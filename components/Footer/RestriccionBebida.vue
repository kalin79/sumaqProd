<template>
     <div class="boxRestriccionBebida">
          <div class="container-fluid container-fluid-xxl">
               <div class="d-flex justify-content-center align-items-center">
                    <h5>PROHIBIDA LA VENTA DE BEBIDAS ALCOHÓLICAS A MENORES DE EDAD <br>TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO</h5>
               </div>
          </div>
     </div>
</template>
<style lang="sass">
     .boxRestriccionBebida
          background: $brownLight2
          padding: .15rem 0
          position: relative
          z-index: 100
          h5
               @include font-libre(1.813rem,1.813rem,1.813rem,.5rem,$Montserrat,200,black)
               text-align: center
               color: rgba(white, .25)
               line-height: .75rem
               @media screen and (min-width: 992px)
                    line-height: 1.85rem
               @media screen and (min-width: 1200px)
                    line-height: 1.85rem
               @media screen and (min-width: 1200px)
                    line-height: 1.85rem

</style>