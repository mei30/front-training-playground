<template>
  <li
    class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50"
  >
    <div>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="font-bold block text-gray-600"
        >{{ song.modified_name }}</RouterLink
      >
      <span class="text-gray-500 text-sm">{{ song.name }}</span>
    </div>

    <div class="text-gray-600 text-lg">
      <span class="comments">
        <i class="fa fa-comments text-gray-600"></i>
        15
      </span>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  name: 'SongItem',
  props: ['song']
}
</script>
