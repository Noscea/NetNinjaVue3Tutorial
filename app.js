//Création du composant Vue de l'app
const app = Vue.createApp({
  // template: "<h2>I am the template</h2>"

  //Initialisation des variables du composant
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  //Déclarations des methodes du composant
  methods: {
    increase() {
      this.age++;
    },
  },
});

//Indique l'endroit où l'appli Vue prendra effet -- ici dans l'élémeent avec id app
app.mount("#app");
