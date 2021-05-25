<template>
     <div class="boxProcessFinal">
          <!-- {{ dataPayment.length }} -->
          <!-- {{ dataPayment[0].getForm.contactoNombre }} -->
          <div class="container-fluid container-fluid-xxl " v-if="getForm">
               <div class="boxHeader">
                    <div class="boxIcon">
                         <client-only>
                              <b-icon-check-circle-fill></b-icon-check-circle-fill>
                         </client-only>
                    </div>
                    <div class="boxTitle">
                         <h3>Hey {{ getForm.contactoNombre }},</h3>
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
                                                  Número de orden: <span class="BoldLarge">{{ dataCart.salesCode }}</span>
                                             </p>
                                        </div>
                                   </div>
                                   <div class="boxContent ">
                                        <div class="boxRow pb-5 notLine">
                                             <p class="description mb-2">
                                                  Para finalizar el proceso debera abonar el monto a una de las cuentas de <span class="bold">SUMAQ</span> las cuales se indican lineas abajo.
                                             </p>
                                             <p class="description mb-2">
                                                  Luego deberia enviarnos el voucher por nuestro WhatsApp <a href="https://wa.link/i7kwid" target="_blank">(+51) 985 757 450</a> indicandonos el <span class="bold">Número de orden</span>
                                                  o el correo que indico en <span class="bold">"Información de contacto:"</span>.
                                             </p>
                                             
                                             <p class="description">
                                                  Hemos enviado un correo electrónico a <span class="bold">{{ getForm.contactoEmail }}</span> con su pedido. 
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
                                                            192-123-200-931
                                                       </p>
                                                  </div>
                                             </div>
                                             <div class="boxItems">
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Banco de Interbank:</h3> 
                                                       <p class="bold">
                                                            192-123-200-931
                                                       </p>
                                                  </div>
                                             </div>
                                             <div class="boxItems">
                                                  <div class="d-flex justify-content-between">
                                                       <h3>Banco Scotiabank:</h3> 
                                                       <p class="bold">
                                                            192-123-200-931
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
                                                       Sr(a). {{ getForm.contactoNombre }}
                                                  </p>
                                                  <p class="description">
                                                       Correo: {{ getForm.contactoEmail }}
                                                  </p>
                                                  <p class="description">
                                                       Celular: {{ getForm.contactoCelular }}
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
                                                       Sr(a). {{ getForm.recepcionaNombres }} {{ getForm.recepcionaApellidos }}
                                                  </p>
                                                  <p class="description">
                                                       Celular: {{ getForm.recepcionaCelular }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <h3>Dirección del delivery:</h3>
                                                  <p class="description">
                                                       {{ getForm.recepcionaDireccion }}
                                                  </p>
                                                  <p class="description">
                                                       Referencia : {{ getForm.recepcionaReferencia }}
                                                  </p>
                                             </div>

                                             <div class="boxItems mb0">
                                                  <h3>Fecha y hora:</h3>
                                                  <p class="description">
                                                       {{ dataCart.fecha }} - {{ dataCart.hora }}
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
                                                       Monto: {{ getCurrencySymbol }} {{ dameTotal }}
                                                  </p>
                                             </div>

                                             <div class="boxItems">
                                                  <div v-if="getTypeVoucher.value === 2">
                                                       <h3>Envío de factura:</h3>
                                                       <p class="description">
                                                            Razon Social: {{ getForm.comprobanteRazonSocial }}
                                                       </p>
                                                       <p class="description">
                                                            R.U.C.: {{ getForm.comprobanteRuc }}
                                                       </p>
                                                  </div>
                                                  <div v-else>
                                                       <h3>Envío de boleta:</h3>
                                                       <p class="description">
                                                            Nombre: {{ getForm.comprobanteRazonSocial }}
                                                       </p>
                                                       <p class="description">
                                                            D.N.I.: {{ getForm.comprobanteRuc }}
                                                       </p>
                                                  </div>
                                                  
                                                  <p class="description">
                                                       Direccion: {{ getForm.comprobanteDireccion }}
                                                  </p>
                                                  <!-- <p class="description">
                                                       LIM - PER.
                                                  </p> -->
                                                  <p class="description">
                                                       Correo electrónico: {{ getForm.comprobanteEmail }}
                                                  </p>
                                                  <p class="description">
                                                       Teléfono: {{ getForm.comprobanteTelefono }}
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
                                             <div class="boxCard mb-3 d-flex justify-content-between align-items-start" v-for="(item, index) in dataCart.order" :key="index">
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
                                                            <p v-html="item.description"></p>
                                                       </div>
                                                  </div>
                                                  <div class="boxPrice">
                                                       <p>{{ getCurrencySymbol }} {{ getPrice(item.precio) }}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxCostos">
                                             <div class="rowCosto">
                                                  <div class="mb-2 d-flex justify-content-between align-items-start">
                                                       <h3>Subtotal</h3>
                                                       <h3>{{ getCurrencySymbol }} {{ dameSubMontoTotal }}</h3>
                                                  </div>
                                                  <!-- <div class="mb-2 d-flex justify-content-between align-items-start">
                                                       <h3>Impuesto (18%)</h3>
                                                       <h3>{{ getCurrencySymbol }} {{ getImpuesto }}</h3>
                                                  </div> -->
                                                  <div class="pb-4 d-flex justify-content-between align-items-start">
                                                       <h3>Costo por Delivery</h3>
                                                       <h3>{{ getCurrencySymbol }} {{ getPrice(dataCart.cargoDelivery) }}</h3>
                                                  </div>
                                             </div>
                                             <div class="rowCosto mt-3">
                                                  <div class="d-flex justify-content-between align-items-start">
                                                       <div>
                                                            <h3>Total</h3>
                                                            <!-- <p>Incluye impuestos</p> -->
                                                       </div>
                                                       
                                                       <h3 class="boldPrice">{{ getCurrencySymbol }} {{ dameTotal }}</h3>
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
     data(){
          return{
               igv: 0.18,
               dataPayment: [], 
          }
     },
     computed: {
          ...mapGetters('shopping/cart/', ['subMontoTotal']),
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          ...mapGetters('shopping/user/', ['getForm']),
          ...mapGetters('shopping/user/', ['getPaymentType']),
          ...mapGetters('shopping/user/', ['getTypeVoucher']),
          ...mapState(
               { dataCart: state => state.shopping.cart.dataCart},
          ),
          dameTipoComprobante(){
               if (this.selectTipoComprobante)
                    return 'R.U.C.'
               else
                    return 'D.N.I'
          },
          dameNombreComprobante(){
               if (this.selectTipoComprobante)
                    return 'Razón Social'
               else
                    return 'Nombre completo'
          },
          dameTotal(){
               // let total = this.subMontoTotal + this.subMontoTotal * this.igv + this.dataCart.cargoDelivery
               let total = this.subMontoTotal + this.dataCart.cargoDelivery
               if (this.getTypeCurrencySymbol === 1)
                    return total.toFixed(2)
               else
                    return (total / this.getExchangeRate).toFixed(2)
          },
          
          dameSubMontoTotal(){
               if (this.getTypeCurrencySymbol === 1)
                    return this.subMontoTotal.toFixed(2)
               else
                    return (this.subMontoTotal / this.getExchangeRate).toFixed(2)
          },
          getImpuesto(){
               let impuesto =  0
               if (this.getTypeCurrencySymbol === 1){
                    impuesto =  this.subMontoTotal * this.igv
                    return impuesto.toFixed(2)
               }else{
                    impuesto =  (this.subMontoTotal / this.getExchangeRate)  * this.igv
                    return impuesto.toFixed(2)
               }
          },
     },
     async mounted(){
          
          this.dataPayment.push({'getForm': this.getForm})
          this.dataPayment.push({'subMontoTotal': this.subMontoTotal})
          this.dataPayment.push({'getCurrencySymbol': this.getCurrencySymbol})
          this.dataPayment.push({'getTypeCurrencySymbol': this.getTypeCurrencySymbol})
          this.dataPayment.push({'getExchangeRate': this.getExchangeRate})
          this.dataPayment.push({'getPaymentType': this.getPaymentType})
          this.dataPayment.push({'getTypeVoucher': this.getTypeVoucher})
          // this.loadPage = true
     },
     methods: {
          getPrice(price){
               if (this.getTypeCurrencySymbol === 1)
                    return price.toFixed(2)
               else 
                    return (price / this.getExchangeRate).toFixed(2)
          },
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
                                   width: 225px
                              @media screen and (min-width: 1200px)
                                   padding: 0 0 0 1.5rem
                                   width: 320px
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