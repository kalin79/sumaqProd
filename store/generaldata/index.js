export const state = () => ({
     dataGeneral: {
         menuMain: null,
         tiendas: null,
         sliderHome: null,
         tiendaOcasion: null,
     }
 })

export const mutations = {
     setMenuMain(state,payload){
          state.dataGeneral.menuMain = payload
     },
     setTiendas(state,payload){
          state.dataGeneral.tiendas = payload
     },
     setSliderHome(state,payload){
          state.dataGeneral.sliderHome = payload
     },
     setTiendaOcasion(state,payload){
          state.dataGeneral.tiendaOcasion = payload
     },
}

export const getters = {
     getMenuMain(state){
          return state.dataGeneral.menuMain
     },
     getTiendas(state){
          return state.dataGeneral.tiendas
     },
     getSliderHome(state){
          return state.dataGeneral.sliderHome
     },
     getTiendaOcasion(state){
          return state.dataGeneral.tiendaOcasion
     },
}
