<template>
     <div class="boxPopUp">
          <div class="container-fluid container-fluid-xxl">
               <div class="contentPopUp">
                    <div class="d-flex justify-content-end">
                         <div class="contentDetailShooping">
                              <div class="boxHeader">
                                   <div class="d-flex justify-content-between align-items-start">
                                        <div class="boxTitle">
                                             <h2>CARRITO DE COMPRAS</h2>
                                             <p>Haz agregado a tu carrito de compra:</p>
                                        </div>
                                        <a href="javascript: void(0)" v-on:click="closePreviewShopping">
                                             <picture>
                                                  <img src="@/assets/images/closePopUp.png" />
                                             </picture>
                                        </a>
                                   </div>
                              </div>
                              <div class="boxBody">
                                   <div class="boxScroll">
                                        <table class="table">
                                             <thead>
                                                  <tr>
                                                       <th></th>
                                                       <th scope="col">PRODUCTO</th>
                                                       <th scope="col">PRECIO</th>
                                                       <th scope="col">CANTIDAD</th>
                                                       <th scope="col">TOTAL</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  <tr v-for="(item, index) in dataCart.order" :key="index">
                                                       <td>
                                                            <a href="javascript:void(0)" class="delete" @click="deletedOrder(index)">
                                                                 <picture>
                                                                      <img src="@/assets/images/delete.png" />
                                                                 </picture>
                                                            </a>
                                                       </td>
                                                       <td>
                                                            <div class="d-flex">
                                                                 <picture class="imgProduct">
                                                                      <img :src="require(`@/assets/images/${item.photo}`)" alt="ocacion">
                                                                 </picture>
                                                                 <div class="descriptionTable">
                                                                      <h3>{{ item.name }}</h3>
                                                                      <p>
                                                                           {{ item.description }}
                                                                      </p>
                                                                 </div>
                                                                 
                                                            </div>
                                                       </td>
                                                       <td class="verticalCenter">
                                                            <p>{{ getCurrencySymbol }} {{ getPrecio(item.precio) }}</p>
                                                       </td>
                                                       <td class="verticalCenter">
                                                            <div class="boxCantidadProducto">
                                                                 <div class="d-flex">
                                                                      <a href="javascript:void(0)" class="btnMenos d-flex justify-content-center align-items-center" @click="lessProduct(item)"><p>-</p></a>
                                                                      <div class="text d-flex justify-content-center align-items-center"><p>{{ item.cantidad }}</p></div>
                                                                      <a href="javascript:void(0)" class="btnMas d-flex justify-content-center align-items-center" @click="moreProduct(item)"><p>+</p></a>
                                                                 </div>
                                                            </div>
                                                       </td>
                                                       <td class="verticalCenter"><p>{{ getCurrencySymbol }} {{ montoTotal(item.precio,item.cantidad) }}</p></td>
                                                  </tr>
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                              <div class="boxFooter">
                                   <div class="d-flex flex-column flex-xl-column flex-lg-row justify-content-center align-items-center">
                                        <nuxt-link to="/" class="boxButtonShopping">
                                             CONTINUAR
                                        </nuxt-link>
                                        <button  type="button" class="boxButtonShopping blanco" v-on:click="closePreviewShopping">
                                             SEGUIR COMPRANDO
                                        </button>
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
export default {
     data(){
          return {
               
          }
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
          getPrecio(price){
               // console.log(this.getTypeCurrencySymbol)
               if (this.getTypeCurrencySymbol === 1)
                    return price
               else 
                    return (price*this.getExchangeRate).toFixed(2)
          },
          montoTotal(monto, cantidad){
               if (this.getTypeCurrencySymbol === 1)
                    return (monto*cantidad).toFixed(2)
               else
                    return ((monto*cantidad)*this.getExchangeRate).toFixed(2)
          },
          closePreviewShopping(){
               var boxPopUp = $('.boxPopUp')
               boxPopUp.fadeOut('slow')
          }
     }
}
</script>
<style lang="sass" >
     .boxPopUp
          position: fixed
          width: 100vw
          height: 100vh
          overflow: hidden
          background: rgba(#3b3b3b, .65) 
          z-index: 1000
          top: 0
          left: 0
          display: none
          .boxFooter
               padding: 1rem 0
               .boxButtonShopping
                    background: $greenLight3
                    @include font-libre(.813rem,.8rem,.785rem,.7rem,$Montserrat,600,white)
                    border: 0
                    line-height: 3em
                    // padding: 0 3rem
                    border-radius: 30px
                    transition: .5s ease-in background
                    width: 290px
                    text-align: center
                    border: 1px solid $greenLight3
                    text-decoration: none
                    @media screen and (min-width: 992px)
                         line-height: 4em
                         width: 240px
                    @media screen and (min-width: 1200px)
                         line-height: 4em
                         width: 320px
                    @media screen and (min-width: 1200px)
                         line-height: 4em
                         width: 390px
                    &.blanco
                         background: white
                         border: 1px solid $greenLight3
                         color: $greenLight3
                         margin-top: 1rem
                         margin-left: 0rem
                         @media screen and (min-width: 992px)
                              margin-top: 0rem
                              margin-left: 1rem
                         @media screen and (min-width: 1200px)
                              margin-top: 1rem
                              margin-left: 0rem
                    // &:hover
                    //      background: $pinkLight
          .contentPopUp
               padding-top: 4.563rem
               overflow: hidden
               @media screen and (min-width: 992px)
                    padding-top: 4.563rem
               @media screen and (min-width: 1200px)
                    padding-top: 8.188rem
               .contentDetailShooping
                    background: white
                    width: 100%
                    box-sizing: border-box
                    @media screen and (min-width: 992px)
                         width: 663px
                    @include tableCart()
                    .boxHeader
                         padding: 1.5rem 2.5rem 0 2rem
                         @media screen and (min-width: 992px)
                              padding: 1.5rem 2.5rem 0 2rem
                         @media screen and (min-width: 1400px)   
                              padding: 2rem 2.5rem 0 2rem  
                         .boxTitle
                              h2
                                   @include font-libre(1.375rem,1rem, 1rem,1rem,$Montserrat,600,$grayDark17)
                              p
                                   @include font-libre(1rem,.8rem, .8rem,.8rem,$Montserrat,500,$brown)
                                   line-height: 1em
                         a
                              picture
                                   img
                                        width: 14px
                                        @media screen and (min-width: 992px)
                                             width: 14px
                                        @media screen and (min-width: 1400px)   
                                             width: 24px

</style>