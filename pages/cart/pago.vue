<template>
     <div>
          <banner-cart />
          <pago-cart :distritos="distritos" :DeliveryTimes="DeliveryTimes" />
     </div>
</template>
<script>
import BannerCart from '@/components/Banner/Cart'
import PagoCart from '@/components/Cart/Pago'
export default {
     components: {
          BannerCart,
          PagoCart,
     },
     head () {
          return {
               title: 'Sumaq - Resumen de compra',
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
     mounted () {
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          // console.log(11)
          let distritos = []
          let DeliveryTimes = []
          
          
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/payment`)
               // console.log(res.data)
               if ((res.code === 200) && (res.status === 1)){
                    distritos = res.data.districs
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }

          let nowDay = new Date()
          let valDay = nowDay.getDay()
          let res2
          try {
               res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/schedule`)
               res2.every(function(data, index){
                    // console.log(data.day)
                    // console.log(valDay)
                    if (data.day === valDay){
                         DeliveryTimes = data.schedule
                         return false
                    }else{
                         return true
                    }

               })
          }catch (error) {
               console.log(error)
          }


          let res3
          try {
               res3 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
               // console.log(res.data)
               if ((res3.code === 200) && (res3.status === 1)){
                    store.commit('menu/setMenuMain', res3.data.menu)
                    store.commit('menu/setMenuTiendaMain', res3.data.categories)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }

          return {
               distritos,
               DeliveryTimes
          }
     },
}
</script>

<style lang="sass">

</style>