var i = 0;
var dps = 1;
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

var iter = 0;
function counter() {
    console.log('show at ' + (iter++));
    setTimeout(counter, 1000);
}

counter();

const app = Vue.createApp({
    
    data() {
        return {
            cash: 0, cashpersec : 0,
            
            
        }
    },
    methods: {

        addToCash() {
            this.cash += 1000
        },
 
        buyFactory() {
            
            if (this.cash >= 30) {
              this.cash -= 30;
              this.cashpersec +=1;
            }  
        },
        buyMegaFactory() {
            
          if (this.cash >= 300) {
            this.cash -= 300;
            this.cashpersec +=12;
          }  
      },
      buyGigaFactory() {
            
        if (this.cash >= 3000) {
          this.cash -= 3000;
          this.cashpersec +=130;
        }  
    },
    }
})
