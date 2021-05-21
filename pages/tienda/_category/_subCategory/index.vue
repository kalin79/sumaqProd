<template>
     <div class="boxCategoryProduct">
          <banner />
          <filtro />
          <div class="boxtitle" v-if="getDataCategoryNivel1.sub_categorias.length > 0">
               <h1>Tienda de {{ getDataCategoryNivel1.sub_categorias[0].title }}</h1>
               <h2 v-html="getDataCategoryNivel1.sub_categorias[0].description"></h2>
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
     middleware: ['datageneral'],
     components: {
          Filtro,
          ProductsCategory,
          Banner
     },
     computed: {
          ...mapGetters('products/', ['getProducts']),
          ...mapGetters('products/', ['getDataCategoryNivel1']),
          
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          store.commit('products/setTypeNivelCategory', 1)
          console.log(params.category)
          console.log(params.subCategory)
          
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/list-products?categoria_slug=${params.category}&subcategoria_slug=${params.subCategory}`)
               // console.log(res)
               if ((res.code === 200) && (res.status === 1)){
                    store.commit('products/setProducts', res.data)
                    store.commit('products/setPagination', res.pagination)
                    store.commit('products/setTypeNivelCategory', 2)
                    store.commit('products/setDataCategoryNivel1', res.data_category[0])
                    store.commit('products/setSubCategories', res.sub_categories)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }finally{
               try {
                    let res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
                    // console.log(res2)
                    if ((res2.code === 200) && (res2.status === 1)){
                         store.commit('menu/setMenuMain', res2.data)
                    }else{
                         console.log('error await')
                    }
               }catch (error) {
                    console.log(error)
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