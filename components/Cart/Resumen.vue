<template>
     <div class="boxCartResumen">
          <div class="container-fluid container-fluid-xxl ">
               <div class="row">
                    <div class="col-12 col-lg-7 order-last order-lg-first">
                         <div class="boxDetalle">
                              <div class="boxBody">
                                   <div class="boxTable">
                                        <div class="boxHeaderTable">
                                             <div class="d-flex justify-content-start align-items-center">
                                                  <div></div>
                                                  <div class="d-flex">
                                                       <div>PRODUCTO</div>
                                                       <div>PRECIO</div>
                                                       <div>CANTIDAD</div>
                                                       <div>TOTAL</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxScroll">
                                             <div class="boxBodyTable" v-for="(item, index) in dataCart.order" :key="index">
                                                  <div class="d-flex justify-content-center align-items-center">
                                                       <div class="boxDeleted">
                                                            <a href="javascript:void(0)" class="delete" @click="deletedOrder(index)">
                                                                 <picture>
                                                                      <img src="@/assets/images/delete.png" />
                                                                 </picture>
                                                            </a>
                                                       </div>
                                                       <div class="d-flex">
                                                            <div class="d-flex justify-content-start align-items-start">
                                                                 <div class="boxPicture">
                                                                      <picture class="imgProduct">
                                                                           <img :src="item.photo" alt="ocacion">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="descriptionTable">
                                                                      <h3>{{ item.name }}</h3>
                                                                      <p v-html="item.description"></p>
                                                                 </div>
                                                            </div>
                                                            <div class="d-flex justify-content-center align-items-start">
                                                                 <p class="textVertical">{{ getCurrencySymbol }} {{ getPrice(item.precio) }}</p>
                                                            </div>
                                                            <div class="boxCantidadProducto">
                                                                 <div class="d-flex">
                                                                      <a href="javascript:void(0)" class="btnMenos d-flex justify-content-center align-items-center" @click="lessProduct(item)"><p>-</p></a>
                                                                      <div class="text d-flex justify-content-center align-items-center"><p>{{ item.cantidad }}</p></div>
                                                                      <a href="javascript:void(0)" class="btnMas d-flex justify-content-center align-items-center" @click="moreProduct(item)"><p>+</p></a>
                                                                 </div>
                                                            </div>
                                                            <div class="d-flex justify-content-center align-items-start">
                                                                 <p class="textVertical">{{ getCurrencySymbol }} {{  montoTotal(item.precio,item.cantidad) }}</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <cart-informacion />
                    </div>
                    <div class="col-12 col-lg-5">
                         <cart-cuenta />
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import CartInformacion from '@/components/Cart/Informacion'
import CartCuenta from '@/components/Cart/Cuenta'
export default {
     data(){
          return {
          }
     },
     components: {
          CartInformacion,
          CartCuenta,
     },
     computed: {
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          ...mapState(
               { dataCart: state => state.shopping.cart.dataCart},
          ),
     },
     methods: {
          lessProduct(objData){
               this.$store.commit('shopping/cart/setLessProduct', objData)
          },
          moreProduct(objData){
               this.$store.commit('shopping/cart/setMoreProduct', objData)
          },
          deletedOrder(index){
               this.$store.commit('shopping/cart/removeCart', index)
          },
          getPrice(price){
               if (this.getTypeCurrencySymbol === 1)
                    return price.toFixed(2)
               else 
                    return (price / this.getExchangeRate).toFixed(2)
          },
          montoTotal(monto, cantidad){
               if (this.getTypeCurrencySymbol === 1)
                    return (monto*cantidad).toFixed(2)
               else
                    return ((monto*cantidad) / this.getExchangeRate).toFixed(2)
          },
          closePreviewShopping(){
               var boxPopUp = $('.boxPopUp')
               boxPopUp.fadeOut('slow')
          }
     }
}
</script>
<style lang="sass">
     .boxCartResumen
          border: 0px solid red
          padding: 1.75rem 0 3rem
          .boxDetalle
               margin-bottom: .35rem
               @include tableDivCart()
</style>