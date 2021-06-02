export const state = () => ({
     dataCompra: null 
})

export const mutations = {
     setCompra(state, payload){
          state.dataCompra = payload
     },
     setRest(state){
          state.dataCompra = null
     },
}

export const getters = {
     getCompra(state){
          return state.dataCompra
     }
}