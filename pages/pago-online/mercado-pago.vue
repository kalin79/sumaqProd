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
               
          }
     },
     head () {
          return {
               title: 'Sumaq - Confirmacion de Checkout',
               meta: [
               { hid: 'subject', name: 'subject', content: 'Sumaq - Confirmacion de Checkout' },
               { hid: 'description', name: 'description', content: '' }, 
               // Google +
               { hid: 'name-google', content: 'Sumaq - Confirmacion de Checkout' }, 
               { hid: 'description-google', content: '' }, 
               { hid: 'image-google', content: '' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: 'Sumaq - Confirmacion de Checkout' }, 
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
    
     methods : {
         
     }
}
</script>
<style lang="sass">
     

</style>