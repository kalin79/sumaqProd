<template>
     <div class="beneficioHome">
          <div class="container-fluid container-fluid-xxl">
               <div class="centerBeneficio">
                    <div class="d-flex justify-content-between align-items-center">
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-start">
                                   <figure class="boxImage1">
                                        <img src="@/assets/images/b1.png" />
                                   </figure>
                                   <div class="itemInfo">
                                        <h3>Compras seguras</h3>
                                        <p>Garantizamos al 100% <br>la seguridad de sus pagos.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-start">
                                   <figure class="boxImage2">
                                        <img src="@/assets/images/b2.png" />
                                   </figure>
                                   <div class="itemInfo">
                                        <h3>Delivery flexible</h3>
                                        <p>Hasta el mismo día que <br>realizas tus pedido.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-start">
                                   <figure class="boxImage3">
                                        <img src="@/assets/images/b3.png" />
                                   </figure>
                                   <div class="itemInfo">
                                        <h3>Productos frescos</h3>
                                        <p>Contamos con la logística <br>necesaria para atenderte.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<style lang="sass">
     .beneficioHome
          .container-fluid-xxl
               background: white
               position: relative
               height: 120px
               width: 100%
               // z-index: 4
               .centerBeneficio
                    position: absolute
                    background: white
                    top: 0
                    left: 50%
                    transform: translate(-50%,-40%) 
                    width: 90%
                    border: 1px solid $grayLight2
                    border-radius: 20px
                    box-sizing: border-box
                    padding: 1rem .5rem
                    box-shadow: 3px 5px 8px -5px rgba(black,.25)
                    z-index: 31
                    @media screen and (min-width: 992px)
                         padding: 2rem 4rem
                    .itemBeneficio
                         // &:nth-child(2)
                         //      margin: 0 2.5rem
                         figure
                              &.boxImage1
                                   width: 38px
                                   display: none
                                   @media screen and (min-width: 992px)
                                        display: block
                                        width: 38px
                                   @media screen and (min-width: 1200px)
                                        width: 40px
                                   @media screen and (min-width: 1400px)
                                        width: auto
                              &.boxImage2
                                   width: 45px
                                   display: none
                                   @media screen and (min-width: 992px)
                                        width: 50px
                                        display: block
                                   @media screen and (min-width: 1200px)
                                        width: 58px
                                   @media screen and (min-width: 1400px)
                                        width: auto
                              &.boxImage3
                                   width: 45px
                                   display: none
                                   @media screen and (min-width: 992px)
                                        width: 50px
                                        display: block
                                   @media screen and (min-width: 1200px)
                                        width: 58px
                                   @media screen and (min-width: 1400px)
                                        width: auto
                              img
                                   width: 100%
                         .itemInfo
                              padding-left: 1rem
                              h3
                                   @include font-libre(1.125rem,1rem, .85rem,.75rem,$Playfair,700,$brown)
                                   line-height: 1.5em
                                   margin-bottom: 0.5rem
                                   @media screen and (min-width: 992px)
                                        line-height: 2.25em
                                        margin-bottom: 0
                              p
                                   @include font-libre(0.875rem,.775rem, .7rem,.6rem,$Montserrat,500,$grayLight4)
                                   br
                                        display: none
                                        @media screen and (min-width: 992px)
                                             display: block

</style>
