export const state = () => ({
     menu: {
          main: null
     }
})

export const mutations = {
     setMenuMain(state,payload){
          state.menu.main = payload
     },
}

export const getters = {
     getMenuMain(state,payload){
          return state.menu.main
     },    
}