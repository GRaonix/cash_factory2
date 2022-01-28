const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            details: ['Cash/click : ','Cash/sec : ', 'Factories owned : ', 'Mega Factories owned : '],
            
        }
    },
    methods: {
        addToCash() {
            this.cart += 1
        },
 
        buyFactory() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        
        
    }
})
