/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function() {
    return {
      products: [],
      name: "",
      description: "",
      price: "",
      image_url: "",
      id: "",
      message: false,
    };
  },
  created: function() {  // responsible for executing code as soon as the DOM is loaded
    this.productIndex();
  }, 
  methods: {
    productIndex: function() {
      axios.get("http://localhost:3000/products").then(response => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    productCreate: function() {
      var params = {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price),
        image_url: this.image_url,
      };
      axios.post("http://localhost:3000/products", params).then(response => {
        console.log(response.data);
        this.products.push(response.data);
      });
      this.name = "";
      this.description = "";
      this.price = "";
      this.image_url = "";
    },
    // productUpdate: id => {
    //   var params = {
    //     name: this.name,
    //     description: this.description,
    //     price: parseFloat(this.price),
    //     image_url: this.image_url,
    //   };
    //   axios.post(`http://localhost:3000/products/${id}`, params).then(response => {
    //     console.log(response.data);
    //     this.message = true;
    //   });
    // },
    productDestroy: id => {
      axios.delete(`http://localhost:3000/products/${id}`).then(response => {
        console.log(response.data);
      });
    },
  }
});