<template>
     <div class="bannerShoppingCart2">
          <div class="separate"></div>
          <div class="container-fluid container-fluid-xxl">
               <div class="d-flex justify-content-center align-items-center boxLineTime">
                    <div>
                         <div class="boxBar"></div>
                         <div class="d-flex justify-content-between align-items-center">
                              <h2>CARRITO DE COMPRAS</h2>
                              <h2>DELIVERY Y PAGO</h2>
                              <h2>CORDEN COMPLETADA</h2>
                         </div>
                    </div>
               </div>
          </div> 
     </div>     
</template>
<script>
export default {
}
</script>
<style lang="sass">
     .bannerShoppingCart2
          background: $greenLight3
          position: relative
          z-index: 10
          overflow: hidden
          .separate
               width: 100%
               height: 73px
               @media screen and (min-width: 992px)
                    height: 73px
               @media screen and (min-width: 1200px)
                    height: 133px
               @media screen and (min-width: 1400px)
                    height: 136px
          .boxLineTime
               height: 6.5rem
               width: 100%
               > div
                    width: 100%
                    @media screen and (min-width: 992px)
                         width: 60%
               .boxBar
                    background: $greenLight6
                    height: .35rem
                    border-radius: 10px
                    width: 100%
                    border: 1px solid rgba(white,.25)
                    margin-bottom: .05rem
               h2,
               p
                    margin: 0
                    padding: 0
               h2
                    @include font-libre(.875rem,.875rem,.75rem,.55rem,$Montserrat,500,white)
                    line-height: 2em
               
</style>