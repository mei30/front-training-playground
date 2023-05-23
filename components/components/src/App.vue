<script>
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';

export default {
  name: 'App',
  data() {
    return {
      age: 20
    }
  },
  methods: {
    ageChanged(number) {
      this.age += number;
    }
  },
  components: {
    Greeting,
    User
  }
}
</script>

<template>
  <p>Hey {{age}}!</p>
  <Greeting :age="age"></Greeting>
  <User :age="age" @increment_age="ageChanged"></User>
</template>

<style>
</style>
