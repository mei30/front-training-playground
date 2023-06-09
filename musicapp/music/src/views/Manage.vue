<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <AppUpload></AppUpload>
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <CompositionItem
              v-for="(song, i) in songs"
              :key="song.docID"
              :song="song"
              :index="i"
              :updateSong="updateSong"
              :removeSong="removeSong"
              :addSong="addSong"
              :updateUnsavedFlag="updateUnsavedFlag"
            ></CompositionItem>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import useUserStore from '@/stores/user'
import AppUpload from '@/components/Upload.vue'
import CompositionItem from '@/components/CompositionItem.vue'

import { query, where, getDocs, type DocumentData } from 'firebase/firestore'
import { songsCollection, auth } from '@/includes/firebase'

import type { Song } from '@/includes/types'

export default {
  name: 'manage',
  data() {
    return {
      songs: [] as Song[],
      unsavedFlag: false
    }
  },

  components: {
    AppUpload,
    CompositionItem
  },

  beforeRouteEnter(to, from, next) {
    const store = useUserStore()

    if (store.userLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  },
  async created() {
    const q = await query(songsCollection, where('uid', '==', auth.currentUser?.uid))

    const snapshot = await getDocs(q)

    snapshot.forEach(this.addSong)
  },

  methods: {
    updateSong(i: number, value: any) {
      this.songs[i].modified_name = value.modified_name
      this.songs[i].genre = value.genre
    },

    removeSong(i: number) {
      this.songs.splice(i, 1)
    },
    addSong(document: DocumentData) {
      const song: Song = {
        ...document.data(),
        docID: document.id
      }

      this.songs.push(song)
    },
    updateUnsavedFlag(value: boolean) {
      this.unsavedFlag = value
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next()
    } else {
      // eslint-disable-next-line no-alert, no-restricted-globals
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?')
      next(leave)
    }
  }
}
</script>
