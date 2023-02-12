<template>
  <h1>{{title}}</h1>
  <!--Le tag ref permet de référencer notre balise dans le composant-->
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      title:'My First Vue App'
    }
  },
  methods:{
    handleClick() {
      //this.$refs permet d'acceder aux éléments référencés de notre composant.
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    }
  }
}
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

h1{
  border-bottom: 1px black solid;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
