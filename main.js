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

const app = Vue.createApp({
    
    data() {
        return {
            cash: 0, cashpersec : 0,
            details: ['Cash/click : ','Cash/sec : ', 'Factories owned : ', 'Mega Factories owned : ', 'Giga Factories owned : '],
            
        }
    },
    methods: {
        addToCash() {
            this.cash += 1
        },
 
        buyFactory() {
            
            if (this.cash >= 30) {
              this.cash -= 30;
              this.cashpersec +=1;
            }
            
        },
        
        
    }
})
