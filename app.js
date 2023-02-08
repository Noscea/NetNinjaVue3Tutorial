//Création du composant Vue de l'app
const app = Vue.createApp({
  // template: "<h2>I am the template</h2>"

  //Initialisation des variables du composant
  data() {
    return {
      showBooks:true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x:0,
      y:0
    };
  },
  //Déclarations des methodes du composant
  methods: {
    increase() {
      this.age++;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },

    handleEvent(event, data) {
      console.log(event, event.type);
      if (data){
        console.log(data);
      }
    },

    handleMouseMove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  },
});

//Indique l'endroit où l'appli Vue prendra effet -- ici dans l'élémeent avec id app
app.mount("#app");
