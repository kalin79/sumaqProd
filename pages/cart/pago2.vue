<template>
     <div>
          <banner-cart />
          <pago-cart :distritos="distritos" 
               :DeliveryTimes="DeliveryTimes" 
               :tipoMeotodosPago="tipoMeotodosPago" 
               :dedicatorias ="dedicatorias"
               :tipoComprobantes ="tipoComprobantes"
          />
     </div>
</template>
<script>
import BannerCart from '@/components/Banner/Cart'
import PagoCart from '@/components/Cart/Pago2'
export default {
     components: {
          BannerCart,
          PagoCart,
     },
     data(){
          return {
               titleHead: 'Preceso de Confirmación y Pago' , 
               descriptionHead: 'Ya estamos a un paso de ser parte de este momento en especial',
               DeliveryTimes: [],
          }
     },
     head () {
          return {
               title: this.titleHead,
               meta: [
               { hid: 'subject', name: 'subject', content: `SUMAQ.pe - ${this.titleHead}` },
               { hid: 'description', name: 'description', content: `${this.descriptionHead}` }, 
               // Google +
               { hid: 'name-google', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'description-google', content: `${this.descriptionHead}` }, 
               { hid: 'image-google', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'twitter:description', name: 'twitter:description', content: `${this.descriptionHead}` }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Open Graph data
               { hid: 'og:title', property: 'og:title', name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/' }, 
               { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', property: 'og:description', name: 'og:description', content: `${this.descriptionHead}` }, 
               { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
     mounted () {
          const now = new Date()
          const hour = now.getHours()
          const min = now.getMinutes()
          const seg = now.getSeconds()
          let _this = this
          // console.log(hour)
          // console.log(min)
          // console.log(seg)
          
          
          this.DeliveryTimesAux.every(function(data, index){
               let _arr = data.start_time.split(':')
               let _arrhour = _arr[0].split('"')
               let _hour = parseInt(_arrhour[0])
               // console.log(_this.DeliveryTimes)
               // console.log(hour)
               // console.log(_hour)
               if (hour > 12){
                    if (_hour > 12){
                         _this.DeliveryTimes.push(data)
                    }
               }else{
                  _this.DeliveryTimes.push(data)  
               }
               return true
          })

     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          // console.log(11)
          let distritos = []
          let DeliveryTimesAux = []
          let tipoComprobantes = []
          let dedicatorias = []
          let tipoMeotodosPago = []
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/payment`)
               // console.log(res.data)
               if ((res.code === 200) && (res.status === 1)){
                    distritos = res.data.districs
                    tipoMeotodosPago = res.data.payment_methods
                    dedicatorias = res.data.dedications
                    tipoComprobantes = res.data.payment_vouchers
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }

          let nowDay = new Date()
          let valDay = nowDay.getDay() + 1
          let res2
          try {
               res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/schedule`)
               res2.every(function(data, index){
                    // console.log(data.day)
                    // console.log(valDay)
                    if (data.day === valDay){
                         DeliveryTimesAux = data.schedule
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
               DeliveryTimesAux,
               tipoMeotodosPago,
               dedicatorias,
               tipoComprobantes,
          }
     },
}
</script>

<style lang="sass">

</style>