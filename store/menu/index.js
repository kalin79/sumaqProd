export const state = () => ({
     menu: {
          main: null,
          tienda: null,
     }
})

export const mutations = {
     setMenuMain(state,payload){
          state.menu.main = payload
     },
     setMenuTiendaMain(state,payload){
          state.menu.tienda = payload
     },
}

export const getters = {
     getMenuMain(state){
          return state.menu.main
     },
     getMenuTiendaMain(state){
          return state.menu.tienda
     },  
}