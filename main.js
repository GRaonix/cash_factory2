let i = 0;
let dps = 1 * 10; //1s in ms

var iter = 0;
function counter() {
  console.log("Cash " + iter++);
  setTimeout(counter, 1000);
}

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, dps);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

counter();

const app = Vue.createApp({
  data() {
    return {
      cash: 0,
      cashpersec: 0,
      width: 300,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
    };
  },
  methods: {
    addToCash() {
      this.cash += 1000;
    },

    buyFactory() {
      if (this.cash >= 30) {
        this.cash -= 30;
        this.cashpersec += 1;
      }
    },
    buyMegaFactory() {
      if (this.cash >= 300) {
        this.cash -= 300;
        this.cashpersec += 12;
      }
    },
    buyGigaFactory() {
      if (this.cash >= 3000) {
        this.cash -= 3000;
        this.cashpersec += 130;
      }
    },
    setCash() {
      setTimeout(() => {
        this.cash = this.cash + this.cashpersec;
        console.log(this.cash);
      }, 1000);
    },
    
  },
});
