<script>
export default {
  name: 'greeting',
  data() {
    return {
      message: "Hello World from simple component"
    }
  },
  props: ["age"]
}
</script>

<template>
  <p v-if="age > 20">{{message}}</p>
</template>

<style scoped lang="scss">
p {
  color: darken($color: #e29595, $amount: 15%)
}
</style>