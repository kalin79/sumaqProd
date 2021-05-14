export const state = () => ({
    dataCart: {
        order: [],
        cargoDelivery: 0,
        dedicatoria: '',
        firma: '',
        fecha: '',
        hora: '',
        currencySymbol: 'S./',
        typeCurrencySymbol: 1,
        exchangeRate: 3.55 
     }
 })
 
 export const mutations = {
     setMoneySymbol(state, payload){
        state.dataCart.currencySymbol = payload.currencySymbol
        state.dataCart.typeCurrencySymbol = payload.typeCurrencySymbol
     },
    async setMoreProduct(state, payload){
        var boolProduct = true;
        state.dataCart.order.every(function(data, index){
            if (data.id === payload.id){
                data.cantidad = data.cantidad + 1
                boolProduct = false 
                return false
            }else{
                return true
            }

        })
    },
    async setLessProduct(state, payload){
        var boolProduct = true;
        state.dataCart.order.every(function(data, index){
            if (data.id === payload.id){
                data.cantidad = data.cantidad - 1
                if (data.cantidad === 0)
                    state.dataCart.order.splice(index,1)
                boolProduct = false 
                return false
            }else{
                return true
            }

        })
    },
    async setdataCart(state, payload){
        var boolProduct = true;
        state.dataCart.order.every(function(data, index){
            if (data.id === payload.id){
                data.cantidad = data.cantidad + 1
                boolProduct = false 
                return false
            }else{
                return true
            }

        })
        console.log(state.dataCart.order)
        if (boolProduct){
            // state.dataCart.order.push(payload) agrega al final del array
            state.dataCart.order.unshift(payload)
        }
    },
    removeCart(state,index){
        state.dataCart.order.splice(index,1)
    }
 }
 
 export const getters = {
    getExchangeRate(state){
        // console.log(state.dataCart.exchangeRate)
        return state.dataCart.exchangeRate
    },
    getCurrencySymbol(state){
        // console.log(state.dataCart.currencySymbol)
        return state.dataCart.currencySymbol
    },
    getTypeCurrencySymbol(state){
        return state.dataCart.typeCurrencySymbol
    },
    totalProducts(state){
        var _cantidad = 0
        state.dataCart.order.forEach(function(data) {
            _cantidad = _cantidad + data.cantidad
        });
        return _cantidad
    },
    subMontoTotal(state){
        var monto = 0
        state.dataCart.order.forEach(function(data) {
            monto = monto + (data.precio * data.cantidad)
        });

        return monto
    }
 }