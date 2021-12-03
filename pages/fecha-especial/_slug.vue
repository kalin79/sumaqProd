<template>
     <div class="boxCategoryProduct2">
          <banner />
          <div class="bgFondo">
               
               <div class="boxtitle">
                    <h1>{{ getMenuMain[1].name }}</h1>
               </div>
               <!-- {{ getProducts }} -->
               <special-products :getProducts = getProducts />
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import Banner from '@/components/Banner/Especial'
import SpecialProducts from '@/components/Category/SpecialProducts'

export default {
     middleware: ['fechaEspecial'],
     components: {
          SpecialProducts,
          Banner
     },
     computed: {
          ...mapGetters('products/', ['getProducts']),
          ...mapGetters('menu/', ['getMenuMain']),
          
     },
     data(){
          return {
               titleHead: 'Fecha Especial' , 
               descriptionHead: 'Realiza tus pagos con cualquier tarjeta de credito con toda seguridad',
          }
     },
     mounted() {
          this.titleHead = `Fecha Especial :: ${this.getMenuMain[1].name}`
          this.descriptionHead =  this.getMenuMain[1].name
     },
     head () {
          return {
               title: `SUMAQ.pe - ${this.titleHead}`,
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
               { hid: 'og:title', property: 'og:title',  name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
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
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          
          // console.log(params.category)
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/product-by-date-especial`)
               // console.log(res)
               if ((res.code === 200) && (res.status === 1)){
                    store.commit('products/setProducts', res.data)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }finally{
               // console.log('final 1')
               try {
                    let res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
                    // console.log(res.data)
                    if ((res2.code === 200) && (res2.status === 1)){
                         store.commit('menu/setMenuMain', res2.data.menu)
                         store.commit('menu/setMenuTiendaMain', res2.data.categories)
                    }else{
                         console.log('error await')
                    }
               }catch (error) {
                    console.log(error)
               }finally{
                    // console.log('final 2')
               }
          }

          
     },
}
</script>
<style lang="sass">
     .boxCategoryProduct2
          .bgFondo
               background-image: url('~/assets/images/bg_sumaq.png')
               background-repeat: no-repeat
               background-position: center 100px
               background-size: cover
          .boxtitle
               // border: 1px solid red
               width: 60%
               margin: auto
               padding: .35rem 0 .25rem
               @media screen and (min-width: 992px)
                    padding: 2.5rem 0 1.75rem
                    width: 60%
               @media screen and (min-width: 1200px)
                    padding: 1,75rem 0 1.75rem
                    width: 80%
               @media screen and (min-width: 1400px)
                    padding: 2.15rem 0 1.75rem
                    width: 70%
               h1
                    @include font-libre(2.375rem,2rem,1.75rem,1.5rem,$Playfair,400,$black)
                    font-style: italic
                    text-align: center
               h2
                    @include font-libre(1rem,.95rem,.85rem,.8rem,$Montserrat,500,$grayDark6)
                    text-align: center
</style>