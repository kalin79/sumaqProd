<template>
     <div>
          <banner />
          <filtro />
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

</style>