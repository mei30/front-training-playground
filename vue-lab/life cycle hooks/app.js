let vm = Vue.createApp({
  data() {
    return {
      message: "Hello World"
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.message);
  },
  created() {
    console.log("created", this.message);
  },
    
  beforeMount() {
    console.log('beforeMount', this.$el);
  },
    
  mounted() {
    console.log('mounted', this.$el)
  },

  beforeUpdate() {
    console.log('beforeUpdated')
  },
  updated() {
    console.log('updated')
  },

  beforeUnmount() {
    console.log("beforeMount")
  },

  unmounted() {
    consol.log('unmounted')
  },
});

vm.mount('#app')
