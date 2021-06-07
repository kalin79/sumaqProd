export const state = () => ({
     DataBuy: {
          salesCode: '',
          idSalesCode: '',
     }
  })
  
  export const mutations = {
     setReset(state){
          state.DataBuy = {}
     },
     setCargoDelivery(state,payload){
          state.DataBuy.cargoDelivery = payload
     },
     setSalesCode(state,payload){
          state.DataBuy.salesCode = payload
     },
     setIdSalesCode(state,payload){
          state.DataBuy.idSalesCode = payload
     },
  }
  
  export const getters = {
     getDataBuy(state){
         return state.DataBuy
     },
  }