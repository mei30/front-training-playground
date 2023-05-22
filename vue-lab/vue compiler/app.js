let vm = Vue.createApp({
  data() {
    return {
      birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
      people: [
        { name: "john", age: 20 },
        { name: "Mike", age: 44 },
        { name: "Henry", age: 24 },
      ],
    };
  },
}).mount("#app");
