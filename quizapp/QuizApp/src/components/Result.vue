<template>
  <div>
    <div class="result">
      <div class="title">{{results[resultIndex].title}}</div>
      <div class="desc">
        {{results[resultIndex].desc}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },

  props: {
    results: Array,
    totalCorrect: Number
  },

  computed: {
    resultIndex() {
      let index = 0;

      console.log(this.totalCorrect);
      this.results.forEach((e, i) => {
        if (e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
          index = i
        }
      });
      return index;
    }
  }
}
</script>
<style></style>