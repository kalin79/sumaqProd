<template>
     <div class="boxListProducts">
          <div class="boxVector pos4">
               <picture>
                    <img src="@/assets/images/vect1.png" />
               </picture>
          </div>
          <div class="boxVector pos1">
               <picture>
                    <img src="@/assets/images/vect5.png" />
               </picture>
          </div>
          <div class="boxVector pos2">
               <picture>
                    <img src="@/assets/images/vect7.png" />
               </picture>
          </div>
          <div class="boxVector pos3">
               <picture>
                    <img src="@/assets/images/vect6.png" />
               </picture>
          </div>
          
          <div class="container-fluid container-fluid-xxl" v-if="getProducts">
               <div class="boxProducts">
                    <div class="d-flex align-items-stretch justify-content-start flex-wrap">
                         <div class="box-item-product" v-for="(product, index) in getProducts" :key="index">
                              <div class="cardBox">
                                   <div class="cardImage" >
                                        <picture>
                                             <img :src="product.image" :alt="product.title" v-on:click="irProducto(product)">
                                        </picture>
                                        <a href="javascript:void(0)" class="CartText" v-on:click="addCart({id: product.id, precio: product.price, name: product.title, photo: product.image, description: product.title,cantidad: 1})">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <div class="cardDetail" v-on:click="irProducto(product)">
                                        <div class="cardPrice">
                                             <h3>{{ product.title }}<br> {{ getCurrencySymbol }} {{ getPrice(product.price) }}</h3>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h5 class="card-price-old" v-if="product.price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(product.price) }}</span></h5>
                                             <h5 v-else class="card-price-old blanco">Antes</h5>
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
import { mapActions, mapGetters } from 'vuex'
export default {
     props: ['getProducts'],
     data() {
          return {
               price: null 
          }
     },
     computed: {
          // ...mapGetters('generaldata/', ['getTiendaOcasion']),
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          // ...mapGetters('products/', ['getPagination']),
          // ...mapGetters('products/', ['getDataCategoryNivel1']),
     },
     methods: {
          irProducto(product){
               this.$router.push(`/producto${product.link}`)
          },
          getPrice(price){
               if (this.getTypeCurrencySymbol === 1)
                    return price.toFixed(2)
               else 
                    return (price / this.getExchangeRate).toFixed(2)
          },
          async addCart(objData){
               var boxPopUp = $('.boxPopUp')
               // console.log(objData)
               this.$store.commit('shopping/cart/setdataCart', objData)
               boxPopUp.fadeIn('slow')
          } 
     }
}
</script>
<style lang="sass">
     .boxListProducts
          padding-bottom: 5rem
          position: relative 
          @media screen and (min-width: 992px)
               padding-bottom: 5rem
          @media screen and (min-width: 1200px)
               padding-bottom: 8rem
          .blanco
               color: white !important
          .boxVector
               position: absolute
               display: none
               @media screen and (min-width: 992px)
                    display: block
               &.pos3
                    bottom: 0
                    right: 0
                    @media screen and (min-width: 992px)
                         right: -1.5rem
                         bottom: -6rem
                         // left: -5.25rem 
                    @media screen and (min-width: 1200px)
                         right: -2.5rem
                         bottom: -7rem
                         // left: -6rem 
                    @media screen and (min-width: 1400px)
                         bottom: -7.5rem
                         right: 0rem
                         // left: -11.15rem  
                    picture
                         opacity: .25
                         img
                              width: 421px
                              @media screen and (min-width: 992px)
                                   width: 320px 
                              @media screen and (min-width: 1200px)
                                   width: 380px
                              @media screen and (min-width: 1400px)
                                   width: 400px
               &.pos2
                    bottom: 0
                    left: 50%
                    transform: translateX(-50%)
                    @media screen and (min-width: 992px)
                         left: 29%
                         transform: translateX(10%)
                         bottom: -16.5rem
                         // left: -5.25rem 
                    @media screen and (min-width: 1200px)
                         left: 31%
                         transform: translateX(10%)
                         bottom: -17.5rem
                         // left: -6rem 
                    @media screen and (min-width: 1400px)
                         left: 30%
                         transform: translateX(27%)
                         bottom: -19rem
                         // left: -11.15rem  
                    picture
                         opacity: .15
                         img
                              width: 542px
                              @media screen and (min-width: 992px)
                                   width: 280px 
                              @media screen and (min-width: 1200px)
                                   width: 330px
                              @media screen and (min-width: 1400px)
                                   width: 350px
               &.pos1
                    bottom: 0
                    left: 0 
                    @media screen and (min-width: 992px)
                         bottom: 9.5rem
                         left: -2.15rem 
                    @media screen and (min-width: 1200px)
                         bottom: 12.85rem
                         left: -2.15rem 
                    @media screen and (min-width: 1400px)
                         bottom: 10.05rem
                         left: 0.15rem  
                    picture
                         opacity: .35
                         img
                              width: 618px
                              @media screen and (min-width: 992px)
                                   width: 300px 
                              @media screen and (min-width: 1200px)
                                   width: 350px
                              @media screen and (min-width: 1400px)
                                   width: 450px
               &.pos4
                    top: 0
                    left: 0 
                    @media screen and (min-width: 992px)
                         top: -13.75rem
                         left: -.25rem 
                    @media screen and (min-width: 1200px)
                         top: -13.55rem
                         left: -.6rem 
                    @media screen and (min-width: 1400px)
                         top: -14.05rem
                         left: 0.55rem  
                    picture
                         // opacity: .75
                         img
                              width: 618px
                              @media screen and (min-width: 992px)
                                   width: 350px 
                              @media screen and (min-width: 1200px)
                                   width: 400px
                              @media screen and (min-width: 1400px)
                                   width: 450px
          .boxPagination
               // border: 1px solid red
               position: relative
               z-index: 10
               > div
                    .boxNumberPage
                         width: 7.5rem
                         background: $greenLight3
                         box-sizing: border-box
                         padding: .25rem .35rem
                         border-radius: 20px
                         margin: 0 1rem
                         > div
                              div
                                   line-height: 1.8em
                                   text-align: center
                                   color: white 
                                   &:last-child
                                        padding-right: .85rem 
                                   &:first-child
                                        width: 30px
                                        height: 30px
                                        background: white
                                        color: $black2
                                        border-radius: 50%
                    a
                         width: 37px
                         height: 37px
                         background: $greenLight3
                         border-radius: 50%
                         position: relative
                         transition: .5s ease background
                         &.disabled
                              pointer-events: none
                              cursor: default
                              opacity: 0.6
                         &:hover
                              background: $pinkLight
                         svg
                              position: absolute
                              top: 50%
                              left: 50%
                              transform: translate(-50%,-50%)
                              color: white
                              font-size: 1rem 
          .boxProducts
               padding: 3rem 0 1rem
               .cardDetail,
               .cardImage
                    cursor: pointer
                    img
                         cursor: pointer
               .box-item-product
                    flex: 0 0 50% 
                    max-width: 50%
                    margin: 0 0rem 2.5rem
                    padding: 0 .5rem
                    text-decoration: none
                    position: relative
                    z-index: 10
                    @include cardProduct
                    @media screen and (min-width: 992px)
                         flex: 0 0 25% 
                         max-width: 25%
                         padding: 0 1rem
                    &.doble
                         flex: 0 0 100% 
                         max-width: 100% 
                         @media screen and (min-width: 992px)
                              flex: 0 0 50% 
                              max-width: 50% 

          
          
</style>