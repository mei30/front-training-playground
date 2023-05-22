let vm = Vue.createApp({
  data() {
    return {}
  }
});

vm.component("Hello", {
  data() {
    return {
      message: "Hello"
    }
  },
  template: `<h1>{{message}}`
})

vm.mount("#app");
