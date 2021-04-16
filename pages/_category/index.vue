<template>
     <div>
          <header-category />
          <products-category />
     </div>
</template>
<script>
import HeaderCategory from '@/components/Category/Header'
import ProductsCategory from '@/components/Category/ListProducts'

export default {
     components: {
          HeaderCategory,
          ProductsCategory
     }
}
</script>
<style lang="sass">

</style>