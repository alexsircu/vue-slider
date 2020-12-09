var app = new Vue(
  {
    el: "#root",
    data: {
      imagesIndexArray: 0,
      images: [
        "https://raw.githubusercontent.com/anaida07/MEVN-boilerplate/master/docs/Vue.js_Logo.svg.png",
        "https://miro.medium.com/max/1000/1*N_6DIrFp3b3qv3WTDohqxg.png",
        "https://aleksei-bulgak-study.github.io/presentation/images/logo.png"
      ],
      play: ""
    },
    created: function () {
      this.play = setInterval(
        () => {
          this.increaseIndex();
        }, 2000
      )
    },
    methods: {
      nextImage: function() {
        clearInterval(this.play);
        this.increaseIndex();
      },
      prevImage: function() {
        clearInterval(this.play);
        this.decreaseIndex();
      },
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
