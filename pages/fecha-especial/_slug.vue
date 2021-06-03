<template>
     <div class="boxCategoryProduct2">
          <banner />
          <div class="boxtitle">
               <h1>{{ getMenuMain[1].name }}</h1>
          </div>
          <!-- {{ getProducts }} -->
          <special-products :getProducts = getProducts />
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import Banner from '@/components/Banner/Categorias'
import SpecialProducts from '@/components/Category/SpecialProducts'

export default {
     components: {
          SpecialProducts,
          Banner
     },
     computed: {
          ...mapGetters('products/', ['getProducts']),
          ...mapGetters('menu/', ['getMenuMain']),
          
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