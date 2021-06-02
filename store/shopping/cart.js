export const state = () => ({
    dataCart: {
        order: [],
        cargoDelivery: 0,
        fecha: '',
        hora: '',
        currencySymbol: 'S./',
        typeCurrencySymbol: 1,
        exchangeRate: 3.55,
        salesCode: '',
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
        // console.log(state.dataCart.order)
        if (boolProduct){
            // state.dataCart.order.push(payload) agrega al final del array
            state.dataCart.order.unshift(payload)
        }
    },
    removeCart(state,index){
        state.dataCart.order.splice(index,1)
    },
    setFecha(state,payload){
        state.dataCart.fecha = payload
    },
    setHora(state,payload){
        state.dataCart.hora = `${payload.start_time} - ${payload.end_time}`
    },
    setCargoDelivery(state,payload){
        state.dataCart.cargoDelivery = payload
    },
    setSalesCode(state,payload){
        state.dataCart.salesCode = payload
    },
    setRest(state){
        console.log('entro')
        state.dataCart.order = []
        state.dataCart.cargoDelivery = 0
        state.dataCart.fecha = ''
        state.dataCart.hora = ''
        state.dataCart.currencySymbol = 'S./'
        state.dataCart.typeCurrencySymbol = 1
        state.dataCart.salesCode = ''
    },
 }
 
 export const getters = {
    getDataCart(state){
        return state.dataCart
    },
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
    },
    getFecha(state,payload){
        return state.dataCart.fecha
    },
    getHora(state,payload){
        return state.dataCart.hora
    },
    getCargoDelivery(state){
        return state.dataCart.cargoDelivery
    },
    getSalesCode(state){
        return state.dataCart.salesCode
    },
 }