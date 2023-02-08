//Création du composant Vue de l'app
const app = Vue.createApp({
  // template: "<h2>I am the template</h2>"

  //Initialisation des variables du composant
  data() {
    return {
      url:"http://www.thenetninja.co.uk",
      url2:"https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3",
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Brandon Sanderson", image: 'assets/1.jpg', isFav:true},
        { title: "The Way of Kings", author: "Brandon Sanderson", image: 'assets/2.jpg', isFav:false},
        { title: "Name of the wind", author: "Patrick Rothfuss" , image: 'assets/3.jpg', isFav:true},
      ],
      age:45,
      x: 0,
      y: 0,
    };
  },
  //Déclarations des methodes du composant
  methods: {
    increase() {
      this.age++;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toogleIsFav(book){
     book.isFav =!book.isFav
    },
    handleEvent(event, data) {
      console.log(event, event.type);
      if (data) {
        console.log(data);
      }
    },

    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
  //Declaration des variables calculées - Dépendantes des autres variables du composant
  computed:{
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }
});

//Indique l'endroit où l'appli Vue prendra effet -- ici dans l'élémeent avec id app
app.mount("#app");
