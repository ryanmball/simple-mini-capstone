/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      message: "Hello from JavaScript!",
      products: [],
      name: "",
      description: "",
      price: "",
      image_url: "",
    };
  },
  created: function() {  // responsible for executing code as soon as the DOM is loaded
    this.productsIndex();
  }, 
  methods: {
    productsIndex: function() {
      axios.get("http://localhost:3000/products").then(response => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    productsCreate: function() {
      var params = {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price),
        image_url: this.image_url,
      };
      axios.post("http://localhost:3000/products", params).then(response => {
        console.log(response.data);
        this.products.unshift(response.data);
      });
    },
  }
});