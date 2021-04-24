<template>
     <div class="boxCategoryProduct">
          <banner />
          <filtro />
          <div class="boxtitle">
               <h1>Tienda de Postres</h1>
               <h2>Encuentra ese detalle para toda ocasión, desde unos<br> tulipanes.</h2>
          </div>
          <products-category />
     </div>
</template>
<script>
import Banner from '@/components/Banner/Categorias'
import Filtro from '@/components/Category/Filtro'
import ProductsCategory from '@/components/Category/ListProducts'

export default {
     components: {
          Filtro,
          ProductsCategory,
          Banner
     }
}
</script>
<style lang="sass">
     .boxCategoryProduct
          .boxtitle
               // border: 1px solid red
               width: 60%
               margin: auto
               padding: 1rem 0 1.75rem
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