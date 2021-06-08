<template>
     <div>
          
          <banner-cart />
          <mercado-pago />
     </div>
</template>
<script>



import BannerCart from '@/components/Banner/Cart'
import mercadoPago from '@/components/Pago/mercadoPago'
export default {
     components: {
         BannerCart,
         mercadoPago,
     },
     
     data(){
          return {
               titleHead: 'Pagar con Mercado Pago' , 
               descriptionHead: 'Realiza tus pagos con cualquier tarjeta de credito con toda seguridad',
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
               { hid: 'og:title',name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/' }, 
               { hid: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', name: 'og:description', content: `${this.descriptionHead}` }, 
               { hid: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
    
     methods : {
         
     }
}
</script>
<style lang="sass">
     

</style>