<template>
     <div>
          <div class="__navMain">
               <header-up />
               <header-main />
          </div>
          <nuxt />
          <suscripcion />
          <restriccion-bebida />
          <footer-main />
          <footer-buttom />
     </div>
</template>
<script>
import HeaderMain from '@/components/Header/Header'
import HeaderUp from '@/components/Header/UpHeader'
import FooterMain from '@/components/Footer/Footer'
import FooterButtom from '@/components/Footer/FooterButtom'
import RestriccionBebida from '@/components/Footer/RestriccionBebida'
import Suscripcion from '@/components/Home/Suscripcion'

export default {
     components: {
          HeaderMain,
          HeaderUp,
          FooterMain,
          FooterButtom,
          RestriccionBebida,
          Suscripcion,
     }
}
</script>
<style lang="sass">
     .__navMain
          position: absolute
          top: 0
          left: 0
          width: 100%
          z-index: 300
          background: white
</style>