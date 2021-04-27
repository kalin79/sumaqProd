<template>
     <div class="footerButtom">
          <div class="d-flex justify-content-center align-items-center boxLine">
               <p>Todos los Derechos Reservados © a Sumaq.pe 2021 / Sitio web desarrollado por <a href="http://codegraph.pe/" target="_blank">Codegraph.pe</a></p>
          </div>
     </div>
</template>
<script>
export default {
     
}
</script>
<style lang="sass">
     .footerButtom
          background: $brown
          border-top: 1px solid $brownLight2
          padding: 1rem 0
          position: relative
          z-index: 100
          p
               @include font-libre(0.75rem,.85rem,0.75rem,0.75rem,$Montserrat,300,white)
               width: 90%
               text-align: center
               @media screen and (min-width: 992px)
                    width: auto 
               a
                    text-decoration: none
                    @include font-libre(0.75rem,.85rem,0.75rem,0.75rem,$Montserrat,300,white)


</style>