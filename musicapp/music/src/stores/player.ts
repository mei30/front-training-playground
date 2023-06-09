import { defineStore } from 'pinia'
import { Howl } from 'howler'

import helper from '@/includes/helper'

import type { Song } from '@/includes/types'

export default defineStore('player', {
  state: () => ({
    current_song: {} as Song,
    sound: {} as Howl,
    seek: '00:00',
    duration: '00:00',
    playerProgress: '0%'
  }),
  actions: {
    async newSong(song: Song) {
      if (Object.keys(this.sound).length != 0) {
        return
      }

      this.current_song = song

      this.sound = new Howl({
        src: [song.url],
        html5: true
      })

      this.sound.play()

      this.sound.on('play', () => {
        requestAnimationFrame(this.progress)
      })
    },

    progress() {
      this.seek = helper.formatTime(this.sound.seek())
      this.duration = helper.formatTime(this.sound.duration())

      this.playerProgress = `${(this.sound.seek() / this.sound.duration()) * 100}%`

      if (this.sound.playing()) {
        requestAnimationFrame(this.progress)
      }
    },

    async toggleAudio() {
      if (!this.sound.playing) {
        return
      }

      if (this.sound.playing()) {
        this.sound.pause()
      } else {
        this.sound.play()
      }
    },

    updateSeek(event: any) {
      if (!this.sound.playing) {
        return
      }

      const { x, width } = event.currentTarget.getBoundingClientRect()

      const clickX = event.clientX - x

      const percentage = clickX / width
      const seconds = this.sound.duration() * percentage

      console.log(x, width, clickX)

      this.sound.seek(seconds)
      this.sound.once('seek', this.progress)
    }
  },

  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing()
      }
      return false
    }
  }
})
