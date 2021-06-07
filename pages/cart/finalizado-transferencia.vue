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
          let dataBuy = store.getters['shopping/buy/getDataBuy']
          let res2 = null
          
           
          store.commit('shopping/cart/setRest')
          
          try{
               res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/order/${dataBuy.idSalesCode}`)
                
               if ((res2.code === 200) && (res2.status === 1)){
                    
                    dataPayment.push(res2.data.sale)
                    

                    // console.log(dataPayment) 
               }else{
                    console.log('error order')
               }
          }catch (error) {
               console.log(error)
          }

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