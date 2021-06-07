 
import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        // key: 'yourkey',
        paths: [
          'shopping.user', 
          'shopping.cart', 
          'shopping.buy', 
          // 'authentication.auth.userAuth',
        ]
    })(store)
  })
}