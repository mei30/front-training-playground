<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right" @click.prevent="deleteSong">
        <i class="fa fa-times"></i>
      </button>
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
        @click.prevent="showForm = !showForm">
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="showForm">
      <vee-form :validation-schema="schema" :initial-values="song" @submit="edit">
        <div class="text-white text-center font-bold p-4 mb-4" :class="alert_variant" v-if="show_alert">
          {{ alert_message }}
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field type="text" name="modified_name" @input="updateUnsavedFlag(true)"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Song Title" />
          <ErrorMessage class="text-red-400" name="modified_name"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field type="text" name="genre" @input="updateUnsavedFlag(true)"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Genre" />
          <ErrorMessage class="text-red-400" name="genre"></ErrorMessage>
        </div>
        <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600" :disabled="in_submission">
          Submit
        </button>
        <button type="button" class="py-1.5 px-3 rounded text-white bg-gray-600" :disabled="in_submission"
          @click.prevent="showForm = false">
          Go Back
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script lang="ts">
import { ErrorMessage } from 'vee-validate';
import { PropType } from 'vue'

import { songsCollection, storage } from '@/includes/firebase';

import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage'

interface Song {
  display_name?: string;
  original_name?: string;
  modified_name?: string;
  genre?: string;
  comment_count?: number;
  url?: string;
  docID?: string;
}
export default {
  name: "CompositionItem",
  props: {
    song: {
      type: Object as PropType<Song>,
      required: true
    },
    updateSong: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },

    removeSong: {
      type: Function,
      required: true
    },
    updateUnsavedFlag: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showForm: false,
      schema: {
        modified_name: "required",
        genre: "alpha_spaces"
      },
      in_submission: false,
      show_alert: false,
      alert_variant: 'bg-blue-500',
      alert_message: 'Please wait! Updating song info.'

    };
  },
  components: { ErrorMessage },
  methods: {
    async edit(values) {
      this.in_submission = true;
      this.show_alert = true;
      this.alert_variant = 'bg-blue-500';
      this.alert_message = 'Please wait! Updating song info.';

      const songRef = doc(songsCollection, this.song.docID);

      try {
        await updateDoc(songRef, values);
      } catch (error) {
        this.in_submission = true;
        this.alert_variant = 'bg-red-500';
        this.alert_message = 'Something went wrong, Try agin later.';
        return;
      }

      this.updateSong(this.index, values);
      this.updateUnsavedFlag(false);


      this.in_submission = false;
      this.alert_variant = 'bg-green-500';
      this.alert_message = 'Success!';
    },
    async deleteSong() {
      const songRef = ref(storage, `songs/${this.song.original_name}`);

      await deleteObject(songRef);

      await deleteDoc(doc(songsCollection, this.song.docID));

      this.removeSong(this.index);
    },
  }
}
</script>