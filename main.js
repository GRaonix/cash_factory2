var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
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
            cash: 0,
            details: ['Cash/click : ','Cash/sec : ', 'Factories owned : ', 'Mega Factories owned : ', 'Giga Factories owned : '],
            
        }
    },
    methods: {
        addToCash() {
            this.cash += 1
        },
 
        buyFactory() {
            if (this.cash >= 1) {
                this.cash -= 1
            }
        },
        
        
    }
})
