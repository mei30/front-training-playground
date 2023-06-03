<template>
  <!-- Music Header -->
  <section class="w-full mb-8 py-14 text-center text-white relative">
    <div
      class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
      style="background-image: url(/assets/img/song-header.png)"
    ></div>
    <div class="container mx-auto flex items-center">
      <!-- Play/Pause Button -->
      <button
        type="button"
        class="z-50 h-24 w-24 text-3xl bg-white text-black rounded-full focus:outline-none"
      >
        <i class="fas fa-play"></i>
      </button>
      <div class="z-50 text-left ml-8">
        <!-- Song Info -->
        <div class="text-3xl font-bold">{{ song.modified_name }}</div>
        <div>{{ song.name }}</div>
      </div>
    </div>
  </section>
  <!-- Form -->
  <section class="container mx-auto mt-6">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <!-- Comment Count -->
        <span class="card-title">Comments({{ song.comment_count }})</span>
        <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
      </div>
      <div class="p-6">
        <vee-form :validation-schema="schema" @submit="submit" v-if="userLoggedIn">
          <div
            class="text-white text-center font-bold p-4 mb-4"
            v-if="comment_show_alert"
            :class="comment_alert_variant"
          >
            {{ comment_alert_msg }}
          </div>
          <vee-field
            as="textarea"
            name="comment"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
            placeholder="Your comment here..."
          ></vee-field>
          <ErrorMessage name="comment" class="text-red-600"></ErrorMessage>
          <button
            :disabled="comment_in_submission"
            type="submit"
            class="py-1.5 px-3 rounded text-white bg-green-600 block"
          >
            Submit
          </button>
        </vee-form>
        <!-- Sort Comments -->
        <select
          v-model="sort"
          class="block mt-4 py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        >
          <option value="1">Latest</option>
          <option value="2">Oldest</option>
        </select>
      </div>
    </div>
  </section>
  <!-- Comments -->
  <ul class="container mx-auto">
    <li
      class="p-6 bg-gray-50 border border-gray-200"
      v-for="comment in sortComments"
      :key="comment.commentID"
    >
      <!-- Comment Author -->
      <div class="mb-5">
        <div class="font-bold">{{ comment.name }}</div>
        <time>{{ comment.datePosted }}</time>
      </div>

      <p>
        {{ comment.content }}
      </p>
    </li>
  </ul>
</template>
<script lang="ts">
import { getDoc, doc, query, getDocs, where, updateDoc } from 'firebase/firestore'
import { songsCollection, commentsCollection, auth } from '@/includes/firebase'
import { type ErrorMessage } from 'vee-validate'
import { addDoc } from 'firebase/firestore'

import { mapState } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'Song',
  data() {
    return {
      song: {},
      comments: [],
      schema: {
        comment: 'required|min:3'
      },

      sort: '1',

      comment_in_submission: false,
      comment_show_alert: false,
      comment_alert_variant: 'bg-blue-500',
      comment_alert_msg: 'Please wait, Your comment is being submitted.'
    }
  },
  computed: {
    ...mapState(useUserStore, ['userLoggedIn']),

    sortComments() {
      return this.comments.slice().sort((a, b) => {
        if (this.sort === '1') {
          return new Date(b.datePosted) - new Date(a.datePosted)
        }

        return new Date(a.datePosted) - new Date(b.datePosted)
      })
    }
  },

  async created() {
    const songSnapshot = await getDoc(doc(songsCollection, this.$route.params.id as string))
    if (!songSnapshot.exists()) {
      this.$router.push({ name: 'home' })
      return
    }
    this.song = songSnapshot.data()

    this.sort =
      this.$route.query.sort == '1' || this.$route.query.sort == '2' ? this.$route.query.sort : '1'

    this.getComments()
  },

  methods: {
    async getComments() {
      const q = await query(commentsCollection, where('sid', '==', this.$route.params.id as string))

      const snapshot = await getDocs(q)

      snapshot.forEach(this.addComment)
      console.log(this.comments.length)
    },

    addComment(document) {
      const comment = {
        commentID: document.id,
        ...document.data()
      }

      this.comments.push(comment)
    },

    async submit(values, { resetForm }) {
      this.comment_in_submission = true
      this.comment_show_alert = true
      this.comment_alert_variant = 'bg-blue-500'
      this.comment_alert_msg = 'Please wait, Your comment is being submitted.'

      const comment = {
        content: values.comment,
        datePosted: new Date().toString(),
        sid: this.$route.params.id,
        name: auth.currentUser?.displayName,
        uid: auth.currentUser?.uid
      }

      await addDoc(commentsCollection, comment)

      this.song.comment_count += 1

      const songRef = doc(songsCollection, this.$route.params.id as string)

      await updateDoc(songRef, {
        comment_count: this.song.comment_count
      })

      this.getComments()

      this.comment_in_submission = false
      this.comment_alert_variant = 'bg-green-500'
      this.comment_alert_msg = 'The comment is added.'

      resetForm()
    }
  },
  watch: {
    sort(newValue) {
      if (newValue === this.$route.query.sort) {
        return
      }

      this.$router.push({
        query: {
          sort: newValue
        }
      })
    }
  }
}
</script>
