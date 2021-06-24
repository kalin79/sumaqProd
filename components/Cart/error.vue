<template>
     <div class="boxProcessFinal" v-if="dataPayment.length > 0">
          <div class="container-fluid container-fluid-xxl ">
               <div class="boxHeader">
                    <div class="boxIcon">
                         <client-only>
                              <b-icon-check-circle-fill></b-icon-check-circle-fill>
                         </client-only>
                    </div>
                    <div class="boxTitle">
                         <h3>Hey {{ dataPayment[0].contactoNombre }},</h3>
                         <h1>¡Hubo un error en su transaccion!</h1>
                    </div>
               </div>
               <div class="boxDetail">
                    <div class="row">
                         <div class="col-12 col-lg-12 mb-4">
                              <div class="boxBorder">
                                   <div class="boxContent mb-3">
                                        <div class="boxRow pb-3">
                                             <p>
                                                  Número de orden: <span class="BoldLarge">{{ getDataBuy.salesCode }}</span>
                                             </p>
                                        </div>
                                   </div>
                                   <div class="boxContent ">
                                        <div class="boxRow pb-5 notLine">
                                             <p class="description mb-2">
                                                  Si desea una mayor informacion puede comunicarse a nuestro WhatsApp <a href="https://wa.link/i7kwid" target="_blank">(+51) 985 757 450</a> indicandonos el <span class="bold">Número de orden</span>
                                             </p>
                                             
                                             <p class="description">
                                                  Hemos enviado un correo electrónico a <span class="bold">{{ dataPayment[0].contactoEmail }}</span> con el pedido solicitado. 
                                             </p>
                                             <p class="description">
                                                  Si el correo electrónico no ha llegado en dos minutos, verifique su carpeta de correo no deseado para ver si el correo electrónico se envió allí.
                                             </p>
                                        </div>
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
                    
                    <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                         <div class="boxButtom">
                              <a href="/pago-online/mercado-pago"><p>Intentar con otra Tarjeta</p></a>
                         </div>
                    
                         <div class="boxButtom">
                              <nuxt-link to="/cart/pago"><p>Cambiar Método de Pago</p></nuxt-link>
                         </div>
                    </div>
                  
               </div>
          </div>
          
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin)
gsap.core.globals("ScrollTrigger", ScrollTrigger)
export default {
     props: ['dataPayment'],
     data(){
          return{
               
          }
     },
     mounted() {
             
     },
     computed: {
          ...mapGetters('shopping/buy', ['getDataBuy']),
     },
     methods: {
          
     },
}
</script>
<style lang="sass">
     .boxProcessFinal
          padding-bottom: 5rem
          .boxButtom
               padding: 0rem 1rem 0rem
               a
                    display: block
                    border: 1px solid $greenLight3
                    padding: 0rem 1.95rem
                    height: 50px
                    background: $greenLight3
                    border-radius: 30px
                    text-decoration: none
                    width: 300px
                    p
                         @include font-libre(1rem,1rem,1rem,1rem,$Montserrat,600,white)
                         line-height: 3em
                         text-align: center
          .boxResult
               .boxCostos
                    border-radius: 20px
                    border: 1px solid $blancoHuno2
                    background: $blancoHuno
                    overflow: hidden
                    padding: 1.35rem 1.75rem
                    .rowCosto
                         &:first-child
                              border-bottom: 1px solid $blancoHuno2
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                         h3
                              @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                              &.boldPrice
                                   @include font-libre(1.375rem,1.375rem, 1.375rem,1.15rem,$Montserrat,600,$grayDark18)
               .boxListProduct
                    .boxCard
                         border-radius: 20px
                         border: 1px solid $blancoHuno2
                         background: $blancoHuno
                         overflow: hidden
                         padding: 1rem 1rem
                         @media screen and (min-width: 992px)
                              padding: 1.35rem 1.75rem
                         .boxPrice
                              p
                                   @include font-libre(0.875rem,0.875rem, 0.875rem,0.75rem,$Montserrat,600,$grayDark18)
                         .boxDetail
                              padding: 0 0 0 .85rem
                              width: 120px
                              @media screen and (min-width: 992px)
                                   padding: 0 0 0 1.5rem
                                   width: 180px
                              @media screen and (min-width: 1200px)
                                   padding: 0 0 0 1.5rem
                                   width: 290px
                              h2
                                   @include font-libre(0.875rem,0.875rem, 0.875rem,0.75rem,$Montserrat,600,$grayDark18)
                              p
                                   @include font-libre(0.75rem,0.75rem, 0.75rem,0.7rem,$Montserrat,600,$grayDark18)
                         .boxPicture
                              position: relative
                              width: 60px
                              height: 80px
                              @media screen and (min-width: 992px)
                                   width: 111px
                                   height: 136px
                              .boxCantidad
                                   position: absolute
                                   width: 21px
                                   height: 21px
                                   border-radius: 50%
                                   background: $greenLight3
                                   border: 1px solid $greenLight5
                                   top: -0.5rem
                                   right: -0.5rem
                                   p
                                        @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,600,white)
                                        text-align: center
                              picture
                                   width: 100%
                                   height: 100%
                                   overflow: hidden
                                   border-radius: 10px
                                   display: block
                                   border: 2px solid $brown
                                   img
                                        width: 100%
                                        height: 100%
                                        object-fit: cover
          .boxDetail
               .boxBorder
                    border-radius: 10px
                    overflow: hidden
                    padding: 1.5rem 1.85rem
                    border: 1px solid $blancoHuno2
                    .boxContent
                         .boxRow
                              border-bottom: 1px solid $blancoHuno2
                              &.notLine
                                   border: 0
                              .boxTitle
                                   border-bottom: 1px solid $blancoHuno2
                                   padding-bottom: .5rem
                                   margin-bottom: 1rem
                                   h2
                                        @include font-libre(1.375rem,1.375rem,1.375rem,1.375rem,$Montserrat,400,$grayDark18)
                              .boxItems
                                   padding-left: 1rem
                                   margin-bottom: 1.5rem
                                   &.mb0
                                        margin-bottom: 0
                                   h3
                                        @include font-libre(0.875rem,0.875rem,0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                                        line-height: 1.5em

                              p
                                   @include font-libre(0.875rem,0.875rem,0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                                   &.description
                                        @include font-libre(0.75rem,0.75rem,0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                                   span
                                        &.bold
                                             font-weight: 600
                                        &.BoldLarge
                                             @include font-libre(1.5rem,1.5rem,1.5rem,1.15rem,$Montserrat,600,$grayDark10)


          .boxHeader
               padding: 1.75rem 0 2rem
               @media screen and (min-width: 992px)
                    padding: 3.5rem 0 3rem
               .boxTitle
                    h1
                         @include font-libre(2rem,2rem,1.75rem,1rem,$Montserrat,500,$grayDark18)
                         text-align: center
                    h3
                         @include font-libre(1.375rem,1.375rem,1.15rem,.85rem,$Montserrat,600,$grayDark18)
                         text-align: center

               .boxIcon
                    margin: 0 auto 1rem
                    text-align: center
                    svg
                         fill: $greenLight7
                         font-size: 2.85rem
</style>