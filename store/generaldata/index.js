export const state = () => ({
     dataGeneral: {
         menuMain: null,
         tiendas: null,
         sliderHome: [],
         sliderEspecial: [],
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
          state.dataGeneral.sliderHome = []
          payload.every(function(element){
               // console.log(element.title)
               // console.log('no')
               if (element.title != 'BannerFechaEspecial'){
                    // console.log('ok')
                    state.dataGeneral.sliderHome.push(element)
               }
               return true
          })
     },
     setSliderEspecial(state,payload){
          // console.log(typeof(payload))
          state.dataGeneral.sliderEspecial = []
          payload.every(function(element){
               // console.log(element.title)
               // console.log('no')
               if (element.title === 'BannerFechaEspecial'){
                    // console.log('ok')
                    state.dataGeneral.sliderEspecial.push(element)
                    return false
               }
               return true
          })
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
     getSliderEspecial(state){
          return state.dataGeneral.sliderEspecial
     },
     getTiendaOcasion(state){
          return state.dataGeneral.tiendaOcasion
     },
}
