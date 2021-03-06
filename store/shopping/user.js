export const state = () => ({
     dataUserCart: {
            form: null,
            typeVoucher: null,
            paymentType: 0
     }
 })
 
 export const mutations = {
    setForm(state, payload){
        state.dataUserCart.form = payload
    },
    setPaymentType(state, payload){
        state.dataUserCart.paymentType = payload
    },
    setTypeVoucher(state, payload){
        state.dataUserCart.typeVoucher = payload
    },
    setRest(state){
        // state.dataUserCart.form = null
        state.dataUserCart.typeVoucher = null
        state.dataUserCart.paymentType = 0
    },
 }
 export const getters = {
    getForm(state){
        return state.dataUserCart.form
    },
    getPaymentType(state, payload){
        return state.dataUserCart.paymentType
    },
    getTypeVoucher(state){
        return state.dataUserCart.typeVoucher
    },
 }