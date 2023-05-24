<script>
export default {
  name: 'user',
  props: ["age"],
  emits: ['increment_age'],
  methods: {
    increment() {
      this.$emit('increment_age', 3)
    }
  },
}
</script>

<template>
  <button @click="increment">Increment Age</button>
  <p>User age is {{age}}</p>
</template>

<style scoped lang="scss">
p {
  color: darken($color: #e29595, $amount: 15%)
}
</style>