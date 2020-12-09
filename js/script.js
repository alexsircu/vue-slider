var app = new Vue(
  {
    el: "#root",
    data: {
      imagesIndexArray: 0,
      images: [
        "https://modernweb.com/app/uploads/2017/03/vue.jpg",
        "https://reactjs.org/logo-og.png",
        "https://firstclassjs.com/wp-content/uploads/2019/02/angular-logo.png"
      ]
    },
    methods: {
      increaseIndex: function() {
        this.imagesIndexArray++;
        if (this.imagesIndexArray == this.images.length) {
          this.imagesIndexArray = 0;
        }
      },
      decreaseIndex: function() {
        this.imagesIndexArray--;
        if (this.imagesIndexArray == -1) {
          this.imagesIndexArray = this.images.length - 1;
        }
      }
    }
  }
);
