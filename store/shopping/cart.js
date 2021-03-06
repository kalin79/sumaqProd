export const state = () => ({
    dataCart: {
        order: [],
        fecha: '',
        hora: '',
        currencySymbol: 'S./',
        typeCurrencySymbol: 1,
        exchangeRate: 3.55,
        cargoDelivery: 0,
        montoDescuento: 0,
        codigiDescuento: '',
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
    setMontoDescuento(state,payload){
        state.dataCart.montoDescuento = payload
    },
    setCargoDelivery(state,payload){
        state.dataCart.cargoDelivery = payload
    },
    setCodigiDescuento(state,payload){
        state.dataCart.codigiDescuento = payload
    },
    removeCart(state,index){
        state.dataCart.order.splice(index,1)
    },
    removeCartId(state,id){
        var boolProduct = true;
        state.dataCart.order.every(function(data, index){
            if (data.id === id){
                data.cantidad = data.cantidad - 1
                if (data.cantidad === 0){
                    state.dataCart.order.splice(index,1)
                }
                boolProduct = false 
                return false
            }else{
                return true
            }

        })
    },
    setFecha(state,payload){
        state.dataCart.fecha = payload
    },
    setHora(state,payload){
        if (payload === '')
            state.dataCart.hora = 'Hora'
        else
            state.dataCart.hora = `${payload.start_time} - ${payload.end_time}`
    },
    setRest(state){
        state.dataCart.order = []
        state.dataCart.fecha = ''
        state.dataCart.hora = ''
        state.dataCart.currencySymbol = 'S./'
        state.dataCart.typeCurrencySymbol = 1
        state.dataCart.exchangeRate = 3.55
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
    getCodigiDescuento(state){
        return state.dataCart.codigiDescuento
    },
    getCurrencySymbol(state){
        // console.log(state.dataCart.currencySymbol)
        return state.dataCart.currencySymbol
    },
    getMontoDescuento(state){
        return state.dataCart.montoDescuento
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
        let monto = 0
        let typeCurrencySymbol = state.dataCart.typeCurrencySymbol
        let exchangeRate = state.dataCart.exchangeRate
        state.dataCart.order.forEach(function(data) {
            if (typeCurrencySymbol === 1){
                monto = monto + (data.precio * data.cantidad)
            }else{
                monto = monto + ((data.precio / exchangeRate) * data.cantidad)
            }
        });
        return monto.toFixed(2)
    },
    getMontoTotal(state){
        let monto = 0
        let typeCurrencySymbol = state.dataCart.typeCurrencySymbol
        let exchangeRate = state.dataCart.exchangeRate
        let cargoDelivery = state.dataCart.cargoDelivery
        let montoDescuento = state.dataCart.montoDescuento
        // console.log(cargoDelivery)
        state.dataCart.order.forEach(function(data) {
            if (typeCurrencySymbol === 1){
                monto = monto + (data.precio * data.cantidad) - montoDescuento
            }else{
                monto = monto + ((data.precio / exchangeRate) * data.cantidad) - (montoDescuento / exchangeRate)
            }
        });
        return (monto + cargoDelivery).toFixed(2)
    },
    getFecha(state,payload){
        return state.dataCart.fecha
    },
    getHora(state,payload){
        return state.dataCart.hora
    },
    
 }