<template>
     <div class="boxProcessFinal">
          <div class="container-fluid container-fluid-xxl " v-if="(dataPayment.length > 0) && (getDataBuy)">
               <div class="boxHeader">
                    <div class="boxIcon">
                         <client-only>
                              <b-icon-check-circle-fill></b-icon-check-circle-fill>
                         </client-only>
                    </div>
                    <div class="boxTitle">
                         <h3>Hey {{ dataPayment[0].contactoNombre }},</h3>
                         <h1>¡Estamos a un paso de hacernos cómplices de tu felicidad!</h1>
                    </div>
               </div>
               <div class="boxDetail">
                    <div class="row">
                         <div class="col-12 col-lg-6 mb-4 mb-lg-0">
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
                                                  Para finalizar el proceso debera abonar el monto a una de las cuentas de <span class="bold">SUMAQ</span> las cuales se indican lineas abajo.
                                             </p>
                                             <p class="description mb-2">
                                                  Luego deberia enviarnos el voucher por nuestro WhatsApp <a href="https://wa.link/i7kwid" target="_blank">(+51) 985 757 450</a> indicandonos el <span class="bold">Número de orden</span>.
                                             </p>
                                             
                                             <p class="description">
                                                  Hemos enviado un correo electrónico a <span class="bold">{{ dataPayment[0].contactoEmail }}</span> con su pedido. 
                                                  Si el correo electrónico no ha llegado en dos minutos, verifique su carpeta de correo no deseado para ver si el correo electrónico se envió allí.
                                             </p>
                                        </div>
                                   </div>
                                   <div class="boxContent ">
                                        <div class="boxRow pb-5 notLine">
                                             <div class="boxTitle">
                                                  <h2>Cuentas de Banco de Sumaq</h2>
                                             </div>
                                             <div class="boxItems">
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Banco de Crédito del Perú (BCP):</h3> 
                                                       <p class="bold">
                                                            193-91946527-0-77
                                                       </p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                       <h3>BCP CCI:</h3> 
                                                       <p class="bold">
                                                            002-193-193191946652707715
                                                       </p>
                                                  </div>
                                             </div>
                                             <div class="boxItems">
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Banco de BBVA:</h3> 
                                                       <p class="bold">
                                                            0011-03600200579176
                                                       </p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                       <h3>BBVA CCI:</h3> 
                                                       <p class="bold">
                                                            011-360-000200579176-55
                                                       </p>
                                                  </div>
                                             </div>
                                             <div class="boxItems">
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Banco Scotiabank:</h3> 
                                                       <p class="bold">
                                                            045-7410710
                                                       </p>
                                                  </div>
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Scotiabank CCI:</h3> 
                                                       <p class="bold">
                                                            009-231-200457410710-28
                                                       </p>
                                                  </div>
                                             </div>
                                             
                                        </div>
                                        
                                        <div class="boxRow pb-5 notLine">
                                             <div class="boxTitle">
                                                  <h2>Información de contacto</h2>
                                             </div>
                                             <div class="boxItems mb0">
                                                  <h3>Pedido realizado por:</h3>
                                                  <p class="description">
                                                       Sr(a). {{ dataPayment[0].contactoNombre }}
                                                  </p>
                                                  <p class="description">
                                                       Correo: {{ dataPayment[0].contactoEmail }}
                                                  </p>
                                                  <p class="description">
                                                       Celular: {{ dataPayment[0].contactoCelular }}
                                                  </p>
                                             </div>
                                        </div>
                                        <div class="boxRow pb-5  notLine">
                                             <div class="boxTitle">
                                                  <h2>Detalles del Delivery</h2>
                                             </div>
                                             <div class="boxItems">
                                                  <h3>Delivery hecho por:</h3>
                                                  <p class="description">
                                                       Sr(a). {{ dataPayment[0].recepcionaNombres }} {{ dataPayment[0].recepcionaApellidos }}
                                                  </p>
                                                  <p class="description">
                                                       Celular: {{ dataPayment[0].recepcionaCelular }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <h3>Dirección del delivery:</h3>
                                                  <p class="description">
                                                       {{ dataPayment[0].recepcionaDireccion }}
                                                  </p>
                                                  <p class="description">
                                                       Referencia : {{ dataPayment[0].recepcionaReferencia }}
                                                  </p>
                                                  <p class="description">
                                                       Distrito : {{ dataPayment[0].recepcionaObjDistrito.text }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <h3>Fecha y hora:</h3>
                                                  <p class="description">
                                                       {{ dataPayment[0].recepcionaFecha }} - {{ dataPayment[0].recepcionaHora }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <h3>Dedicatoria</h3>
                                                  <p class="description">
                                                       {{ dataPayment[0].dedicatoriaMensaje }}
                                                  </p>
                                             </div>

                                             <div class="boxItems mb0">
                                                  <h3>Firma</h3>
                                                  <p class="description">
                                                       {{ dataPayment[0].dedicatoriaFirma }}
                                                  </p>
                                             </div>
                                             
                                        </div>
                                   </div>
                                   <div class="boxContent ">
                                        <div class="boxRow notLine">
                                             <div class="boxTitle">
                                                  <h2>Información de Pago</h2>
                                             </div>
                                             <div class="boxItems">
                                                  <h3>Costo Total:</h3>
                                                  <p class="description">
                                                       Monto: {{ dataPayment[0].productoSimboloMoneda }} {{ dataPayment[0].montoTotal }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <div v-if="dataPayment[0].comprobanteObjTipo.value != 3">
                                                       <h3>Envío de factura:</h3>
                                                       <p class="description">
                                                            Razon Social: {{ dataPayment[0].comprobanteRazonSocial }}
                                                       </p>
                                                       <p class="description">
                                                            R.U.C.: {{ dataPayment[0].comprobanteRuc }}
                                                       </p>
                                                  </div>
                                                  <div v-else>
                                                       <h3>Envío de boleta:</h3>
                                                       <p class="description">
                                                            Nombre: {{ dataPayment[0].comprobanteRazonSocial }}
                                                       </p>
                                                       <p class="description">
                                                            D.N.I.: {{ dataPayment[0].comprobanteRuc }}
                                                       </p>
                                                  </div>
                                                  
                                                  <p class="description">
                                                       Direccion: {{ dataPayment[0].comprobanteDireccion }}
                                                  </p>
                                                  <!-- <p class="description">
                                                       LIM - PER.
                                                  </p> -->
                                                  <p class="description">
                                                       Correo electrónico: {{ dataPayment[0].comprobanteEmail }}
                                                  </p>
                                                  <p class="description">
                                                       Teléfono: {{ dataPayment[0].comprobanteTelefono }}
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12 col-lg-6">
                              <div class="boxBorder">
                                   <div class="boxContent mb-3">
                                        <div class="boxRow pb-1 notLine">
                                             <div class="boxTitle">
                                                  <h3>Resumen del pedido</h3>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="boxResult">
                                        <div class="boxListProduct">
                                             <div class="boxCard mb-3 d-flex justify-content-between align-items-start" v-for="(item, index) in dataPayment[0].productoObjListado" :key="index">
                                                  <div class="d-flex justify-content-start align-items-start">
                                                       <div class="boxPicture">
                                                            <picture>
                                                                 <img :src="item.photo" alt="ocacion">
                                                            </picture>
                                                            <div class="boxCantidad">
                                                                 <p>{{ item.cantidad }}</p>
                                                            </div>
                                                       </div>
                                                       <div class="boxDetail">
                                                            <h2>{{ item.name }}</h2>
                                                            <div v-html="item.description"></div>
                                                       </div>
                                                  </div>
                                                  <div class="boxPrice">
                                                       
                                                       <p>{{ dataPayment[0].productoSimboloMoneda }} {{ item.precio }}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxCostos">
                                             <div class="rowCosto">
                                                  <div class="mb-2 d-flex justify-content-between align-items-start">
                                                       <h3>Subtotal</h3>
                                                       <h3>{{ dataPayment[0].productoSimboloMoneda }} {{ dataPayment[0].montoSubTotal }}</h3>
                                                  </div>
                                                  <!-- <div class="mb-2 d-flex justify-content-between align-items-start">
                                                       <h3>Impuesto (18%)</h3>
                                                       <h3>{{ getCurrencySymbol }} {{ getImpuesto }}</h3>
                                                  </div> -->
                                                  <div class="pb-4 d-flex justify-content-between align-items-start">
                                                       <h3>Costo por Delivery</h3>
                                                       <h3>{{ dataPayment[0].productoSimboloMoneda }} {{ dataPayment[0].recepcionaObjDistrito.precio }}</h3>
                                                  </div>
                                             </div>
                                             <div class="rowCosto mt-3">
                                                  <div class="d-flex justify-content-between align-items-start">
                                                       <div>
                                                            <h3>Total</h3>
                                                            <!-- <p>Incluye impuestos</p> -->
                                                       </div>
                                                       
                                                       <h3 class="boldPrice">{{ dataPayment[0].productoSimboloMoneda }} {{ dataPayment[0].montoTotal }}</h3>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
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