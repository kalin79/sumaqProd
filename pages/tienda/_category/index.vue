<template>
     <div class="boxCategoryProduct" v-if="getDataCategoryNivel1">
          <banner />
          <filtro />
          <div class="boxtitle">
               <h1>Tienda de {{ getDataCategoryNivel1.title }}</h1>
               <h2 v-html="getDataCategoryNivel1.description"></h2>
          </div>
          <products-category :getProducts = getProducts />
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import Banner from '@/components/Banner/Categorias'
import Filtro from '@/components/Category/Filtro'
import ProductsCategory from '@/components/Category/ListProducts'

export default {
     components: {
          Filtro,
          ProductsCategory,
          Banner
     },
     computed: {
          ...mapGetters('products/', ['getProducts']),
          ...mapGetters('products/', ['getDataCategoryNivel1']),
          
     },
     data(){
          return{
              titleHead: 'POLITICAS DE ENTREGA Y DEVOLUCION' ,
              descriptionHead: 'Para fechas especiales como San Valentín, Día de la Madre, Día de la Mujer, Día del Padre, Día Niño, Fiestas patrias y Navidad  únicamente se aceptarán ...'
          }
     },
     mounted() {
          this.titleHead = `Tienda de ${this.getDataCategoryNivel1.title}`
          this.descriptionHead = this.getDataCategoryNivel1.description
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
               { hid: 'og:title',name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/'  }, 
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
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          
          // console.log(params.category)
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/list-products?categoria_slug=${params.category}`)
               // console.log(res)
               if ((res.code === 200) && (res.status === 1)){
                    store.commit('products/setProducts', res.data)
                    store.commit('products/setPagination', res.pagination)
                    store.commit('products/setTypeNivelCategory', 1)
                    store.commit('products/setDataCategoryNivel1', res.data_category[0])
                    store.commit('products/setSubCategories', res.sub_categories)
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
     .boxCategoryProduct
          .boxtitle
               // border: 1px solid red
               width: 60%
               margin: auto
               padding: .35rem 0 .25rem
               @media screen and (min-width: 992px)
                    padding: .75rem 0 1.75rem
                    width: 60%
               @media screen and (min-width: 1200px)
                    padding: 1rem 0 1.75rem
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