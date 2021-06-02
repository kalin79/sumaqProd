<template>
     <div>
          <banner-cart-final /> 
          <finalizado-bancaria  :dataPayment = "dataPayment"/>

     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import BannerCartFinal from '@/components/Banner/CartFinal'
import FinalizadoBancaria from '@/components/Cart/FinalizadoBancaria'
export default {
     
     components: {
          BannerCartFinal,
          FinalizadoBancaria
     },
     computed: {
          
     },
     mounted() {
          // console.log('mounted')
          
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          // console.log('asyncData')
          let dataPayment = []
          dataPayment.push({'getForm': store.getters['shopping/user/getForm']})
          dataPayment.push({'subMontoTotal': store.getters['shopping/cart/subMontoTotal']})
          dataPayment.push({'getCurrencySymbol': store.getters['shopping/cart/getCurrencySymbol']})
          dataPayment.push({'getTypeCurrencySymbol': store.getters['shopping/cart/getTypeCurrencySymbol']})
          dataPayment.push({'getExchangeRate': store.getters['shopping/cart/getExchangeRate']})
          dataPayment.push({'getPaymentType': store.getters['shopping/user/getPaymentType']})
          dataPayment.push({'getTypeVoucher': store.getters['shopping/user/getTypeVoucher']})
          dataPayment.push({'dataCart': store.getters['shopping/cart/getDataCart']})

          // console.log(dataPayment)
          setTimeout(function(){
               //  Reseteamos
               // console.log('setTimeout')
               store.commit('shopping/compra/setRest')
               store.commit('shopping/user/setRest')
               store.commit('shopping/cart/setRest')
          }, 15000)
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
               // console.log(res.data)
               if ((res.code === 200) && (res.status === 1)){
                    store.commit('menu/setMenuMain', res.data.menu)
                    store.commit('menu/setMenuTiendaMain', res.data.categories)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }

          return {
               dataPayment,
          }
     },
     head () {
          return {
               title: 'Sumaq - Finalizacion de compra :: Transferencia Bancaria',
               meta: [
               { hid: 'subject', name: 'subject', content: 'Sumaq - Bienvenido en donde podras encontrar el regalo perfecto' },
               { hid: 'description', name: 'description', content: '' }, 
               // Google +
               { hid: 'name-google', content: 'Sumaq - Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'description-google', content: '' }, 
               { hid: 'image-google', content: '' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: 'Sumaq - Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'twitter:description', name: 'twitter:description', content: '' }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: '' }, 
               // Open Graph data
               { hid: 'og:title',name: 'og:title', content: '' }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: '' }, 
               { hid: 'og:image', name: 'og:image', content: '' }, 
               { hid: 'og:description', name: 'og:description', content: '' }, 
               { hid: 'og:site_name', name: 'og:site_name', content: '' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
     
}
</script>
<style lang="sass">

</style>