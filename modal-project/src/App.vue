<template>
  <div>
    <h1>{{ title }}</h1>
    <Modal :header="header" :text="text" theme="sale" />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App",
      header: "Sign up for a giveaway",
      text:"you'll win for sure"
    };
  },
  methods: {
    handleClick() {
      //this.$refs permet d'acceder aux éléments référencés de notre composant.
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px black solid;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
