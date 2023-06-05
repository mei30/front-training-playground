<template>
  <main>
    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis,
            congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet,
            venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="/assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title" v-icon-secondary="{icon: 'headphones-alt', right: true}">Songs</span>
        </div>
        <!-- Playlist -->
        <ol id="playlist">
          <AppSongItem v-for="song in songs" :song="song" :key="song.docID"></AppSongItem>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { query, getDocs, getDoc, doc, startAfter, orderBy, limit } from 'firebase/firestore'
import { songsCollection } from '@/includes/firebase'

import AppSongItem from '@/components/SongItem.vue'

import IconSecondary from '@/directives/icon-secondary'

export default {
  name: 'SongItem',
  components: {
    AppSongItem
  },

  directives: {
    'icon-secondary': IconSecondary
  },

  data() {
    return {
      songs: [],
      maxPerPage: 3,
      pendingRequest: false
    }
  },
  async created() {
    this.getSongs()

    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id
      }

      this.songs.push(song)
    },

    async getSongs() {
      if (this.pendingRequest) {
        return
      }

      this.pendingRequest = true

      let q
      if (this.songs.length) {
        const lastSong = await getDoc(doc(songsCollection, this.songs[this.songs.length - 1].docID))
        q = query(
          songsCollection,
          orderBy('modified_name'),
          startAfter(lastSong),
          limit(this.maxPerPage)
        )
      } else {
        q = query(songsCollection, orderBy('modified_name'), limit(this.maxPerPage))
      }
      const snapshot = await getDocs(q)

      snapshot.forEach(this.addSong)

      this.pendingRequest = false
    },

    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window

      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

      if (bottomOfWindow) {
        this.getSongs()
      }
    }
  }
}
</script>
