<template>
     <div class="destacadosHomeM">
          <div class="boxAdorno">
               <picture>
                    <img src="@/assets/images/flor7.png" />
               </picture>
          </div>
          <div class="animationSection">
               <div class="container-fluid container-fluid-xxl">
                    <div class="boxDestacadoTop">
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
                         <div class="row">
                              <div class="col-12">
                                   <div class="boxTitle">
                                        <h2>Recomendaciones de nuestros floristas <br>para cada ocasión especial...</h2>
                                   </div>
                              </div>
                              <div class="col-12">
                                   <div class="boxSearch">
                                        <p>¿Tienes una ocasión especial?</p>
                                        <div class="select">
                                             <select v-model="selected" class="custom-select" @change="viewMostrarOcasion()">
                                                  <option v-for="(ocacion, index) in options" :key="index" v-bind:value="ocacion">
                                                       {{ ocacion.title }}
                                                  </option>
                                             </select>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="separate"></div>
                         <div class="boxListOcaciones" v-if="listOcaciones != null">
                              <div class="d-flex">
                                   <div class="animationCard w50">
                                        <div class="cardOcacion">
                                             <nuxt-link :to="`${listOcaciones[0].link}`" class="btnLinkImg">
                                                  <picture>
                                                       <img :src="listOcaciones[0].image" :alt="listOcaciones[0].title" class="img1">
                                                  </picture>
                                             </nuxt-link>
                                             <div class="cardDetail">
                                                  <div class="cardShopping d-flex justify-content-center align-items-center">
                                                       <a href="javascript:void(0)" v-on:click="addCart({id: listOcaciones[0].id, precio: listOcaciones[0].price, name: listOcaciones[0].title, photo: listOcaciones[0].image, description: listOcaciones[0].description_small,cantidad: 1})">
                                                            <div class="d-flex justify-content-start align-items-center">
                                                                 <client-only>
                                                                 <b-icon-cart3></b-icon-cart3>
                                                                 </client-only>
                                                                 <span>Añadir al Carrito</span>
                                                            </div>
                                                       </a>
                                                  </div>
                                                  <div class="boxClickProduct" v-on:click="irProducto(listOcaciones[0])">
                                                       <h5>{{ listOcaciones[0].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[0].price) }}</h5>
                                                       <h5 class="card-price-old" v-if="listOcaciones[0].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[0].price_old) }}</span></h5>
                                                       <h5 v-else class="card-price-old blanco">Antes</h5>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="w50">
                                        <div>
                                             <div class="animationCard">
                                                  <div class="cardOcacion">
                                                       <nuxt-link :to="`${listOcaciones[1].link}`" class="btnLinkImg">
                                                            <picture>
                                                                 <img :src="listOcaciones[1].image" :alt="listOcaciones[1].title" class="img2">
                                                            </picture>
                                                       </nuxt-link>
                                                       <div class="cardDetail">
                                                            <div class="cardShopping d-flex justify-content-center align-items-center">
                                                                 <a href="javascript:void(0)" v-on:click="addCart({id: listOcaciones[1].id, precio: listOcaciones[1].price, name: listOcaciones[1].title, photo: listOcaciones[1].image, description: listOcaciones[1].description_small,cantidad: 1})">
                                                                      <div class="d-flex justify-content-start align-items-center">
                                                                           <client-only>
                                                                           <b-icon-cart3></b-icon-cart3>
                                                                           </client-only>
                                                                           <span>Añadir al Carrito</span>
                                                                      </div>
                                                                 </a>
                                                            </div>
                                                            <div class="boxClickProduct" v-on:click="irProducto(listOcaciones[1])">
                                                                 <h5>{{ listOcaciones[1].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[1].price) }}</h5>
                                                                 <h5 class="card-price-old" v-if="listOcaciones[1].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[1].price_old) }}</span></h5>
                                                                 <h5 v-else class="card-price-old blanco">Antes</h5>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div>
                                             <div class="animationCard">
                                                  <div class="cardOcacion">
                                                       <nuxt-link :to="`${listOcaciones[2].link}`" class="btnLinkImg">
                                                            <picture>
                                                                 <img :src="listOcaciones[2].image" :alt="listOcaciones[2].title" class="img2">
                                                            </picture>
                                                       </nuxt-link>
                                                       <div class="cardDetail">
                                                            <div class="cardShopping d-flex justify-content-center align-items-center">
                                                                 <a href="javascript:void(0)" v-on:click="addCart({id: listOcaciones[2].id, precio: listOcaciones[2].price, name: listOcaciones[2].title, photo: listOcaciones[2].image, description: listOcaciones[2].description_small,cantidad: 1})">
                                                                      <div class="d-flex justify-content-start align-items-center">
                                                                           <client-only>
                                                                           <b-icon-cart3></b-icon-cart3>
                                                                           </client-only>
                                                                           <span>Añadir al Carrito</span>
                                                                      </div>
                                                                 </a>
                                                            </div>
                                                            <div class="boxClickProduct" v-on:click="irProducto(listOcaciones[2])">
                                                                 <h5>{{ listOcaciones[2].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[2].price) }}</h5>
                                                                 <h5 class="card-price-old" v-if="listOcaciones[2].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[2].price_old) }}</span></h5>
                                                                 <h5 v-else class="card-price-old blanco">Antes</h5>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <div>
                                        <div class="animationCard">
                                             <div class="cardOcacion">
                                                  <nuxt-link :to="`${listOcaciones[3].link}`" class="btnLinkImg">
                                                       <picture>
                                                            <img :src="listOcaciones[3].image" :alt="listOcaciones[3].title" class="img3">
                                                       </picture>
                                                  </nuxt-link>
                                                  <div class="cardDetail">
                                                       <div class="cardShopping d-flex justify-content-center align-items-center">
                                                            <a href="javascript:void(0)" v-on:click="addCart({id: listOcaciones[3].id, precio: listOcaciones[3].price, name: listOcaciones[3].title, photo: listOcaciones[3].image, description: listOcaciones[3].description_small,cantidad: 1})">
                                                                 <div class="d-flex justify-content-start align-items-center">
                                                                      <client-only>
                                                                      <b-icon-cart3></b-icon-cart3>
                                                                      </client-only>
                                                                      <span>Añadir al Carrito</span>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                       <div class="boxClickProduct" v-on:click="irProducto(listOcaciones[3])">
                                                            <h5>{{ listOcaciones[3].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[3].price) }}</h5>
                                                            <h5 class="card-price-old" v-if="listOcaciones[3].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[3].price_old) }}</span></h5>
                                                            <h5 v-else class="card-price-old blanco">Antes</h5>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div>
                                        <div class="animationCard">
                                             <div class="cardOcacion">
                                                  <nuxt-link :to="`${listOcaciones[4].link}`" class="btnLinkImg">
                                                       <picture>
                                                            <img :src="listOcaciones[4].image" :alt="listOcaciones[4].title" class="img3">
                                                       </picture>
                                                  </nuxt-link>
                                                  <div class="cardDetail">
                                                       <div class="cardShopping d-flex justify-content-center align-items-center">
                                                            <a href="javascript:void(0)" v-on:click="addCart({id: listOcaciones[4].id, precio: listOcaciones[4].price, name: listOcaciones[4].title, photo: listOcaciones[4].image, description: listOcaciones[4].description_small,cantidad: 1})">
                                                                 <div class="d-flex justify-content-start align-items-center">
                                                                      <client-only>
                                                                      <b-icon-cart3></b-icon-cart3>
                                                                      </client-only>
                                                                      <span>Añadir al Carrito</span>
                                                                 </div>
                                                            </a>
                                                       </div>
                                                       <div class="boxClickProduct" v-on:click="irProducto(listOcaciones[4])">
                                                            <h5>{{ listOcaciones[4].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[4].price) }}</h5>
                                                            <h5 class="card-price-old" v-if="listOcaciones[4].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[4].price_old) }}</span></h5>
                                                            <h5 v-else class="card-price-old blanco">Antes</h5>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="boxButtonTienda d-flex justify-content-center align-items-center">
                              <button @click="irTiendaOcasion()">Ver tienda</button>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     data() {
          return {
               selected: null,
               options: null,
               listOcaciones: null,
          }
     },
     mounted() {
          this.options = this.getTiendaOcasion
          this.selected = this.getTiendaOcasion[0]
          this.viewMostrarOcasion()
     },
     computed: {
     ...mapGetters('generaldata/', ['getTiendaOcasion']),
     ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
     ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
     ...mapGetters('shopping/cart/', ['getExchangeRate']),
},
     methods: {
          irProducto(product){
               this.$router.push(`/${product.link}`)
          },
          irTiendaOcasion(){
               this.$router.push(`tienda${this.selected.link}`)
          },
          getPrice(price){
               if (this.getTypeCurrencySymbol === 1)
                    return price.toFixed(2)
               else 
                    return (price / this.getExchangeRate).toFixed(2)
          },
          async viewMostrarOcasion(){
               let id = this.selected.id
               try{
                    let sendSolicitud = await this.$axios.$get(`special_occasion/${id}`)
                    if ((sendSolicitud.code === 200) && (sendSolicitud.status === 1)){
                         if (sendSolicitud.data.product_special_occasion.length > 0){
                              this.listOcaciones = sendSolicitud.data.product_special_occasion
                         }else
                              this.listOcaciones = null
                    }else{
                         console.log('error')
                    }
               }catch (error) {
                    console.log(error)
               }finally {
                    console.log('final')
               }
          },
          addBlur: function(event){
               console.log(event.target.parentElement)
          },
          removeBlur: function(event){
               console.log(event)
          },
          async addCart(objData){
               var boxPopUp = $('.boxPopUp')
               this.$store.commit('shopping/cart/setdataCart', objData)
               boxPopUp.fadeIn('slow')
          },
     }
}
</script>
<style lang="sass">
     .destacadosHomeM
          background-image: url('@/assets/images/fondoBlog.jpg')
          background-repeat: repeat
          background-position: 0 0
          position: relative
          z-index: 50
          .boxAdorno
               position: absolute
               top: -3rem
               left: 50%
               transform: translateX(-50%)
          &:after
               content: ''
               position: absolute
               bottom: 0
               left: 0
               width: 100%
               height: 35rem
               background: white
               
          .boxButtonTienda
               padding-top: 2.5rem 
               position: relative
               z-index: 30
               button
                    background: $greenLight3
                    @include font-libre(.813rem,.8rem,.785rem,.7rem,$Montserrat,600,white)
                    border: 0
                    line-height: 3em
                    padding: 0 3rem
                    border-radius: 30px
                    transition: .5s ease-in background
                    
                    &:hover
                         background: $pinkLight
                    
          .boxDestacadoTop
               padding-top: 4rem
               padding-bottom: 7rem
               padding-left: 
               padding-right: 0
               position: relative
               z-index: 10
               
               .boxVector
                    position: absolute
                    
                    &.pos3
                         bottom: 0
                         right: 0
                         display: none
                         picture
                              opacity: .35
                              img
                                   width: 421px
                                  
                    &.pos2
                         bottom: 0
                         left: 68%
                         transform: translateX(-50%)
                         
                         picture
                              opacity: .15
                              img
                                   width: 220px
                                   
                    &.pos1
                         bottom: 0
                         left: 0 
                         display: none
                         picture
                              opacity: .35
                              img
                                   width: 618px
                                   
               .separate
                    width: 100%
                    height: 0rem
          .imageFlorTitle
               margin-right: .25rem
               img
                    width: 96px
                    
          .boxSearch
               margin: auto
               text-align: center
               .select
                    width: 270px
                    height: 55px
                    border-radius: 10px
                    position: relative
                    border: .35rem solid rgba($greenLight, 0.25)  
                    margin: .85rem auto 0
                    overflow: hidden
                    cursor: pointer
                    position: relative
                    // &::before
                    //    position: absolute
                    //    content: ''
                    //    top: 0
                    //    left: 0
                    //    width: 100%
                    //    height: 100%
                    //    border-radius: 10px
                    //    border: .35rem solid rgba($greenLight, 0.25)  
                    //    z-index: 20
                    &:focus,
                    &.active
                         outline: none
                         box-shadow: none
                         border: 1px solid $grayLight2
                    &:after
                         content: ''
                         background-image: url('@/assets/images/arrowcbxWhite.png')
                         background-repeat: no-repeat
                         background-position: center
                         width: 14px
                         height: 10px
                         position: absolute
                         top: 50%
                         right: 1rem
                         transform: translateY(-50%)
                    .custom-select
                         width: 100%
                         height: 100%
                         border: 0
                         @include font-libre(0.875rem,.825rem,.775rem,.8rem,$Montserrat,600, white)
                         padding: 0rem 1rem
                         appearance: none
                         cursor: pointer
                         outline: 0
                         box-shadow: none
                         background: $greenLight3
                         background-image: none
                         
               p
                    @include font-libre(1.375rem,1.35rem, 1.2rem,1rem,$Playfair,400,$blackLight)
                    font-style: italic
                    text-align: center 
          .boxTitle
               padding: 0 1.5rem
               margin-bottom: 1.75rem
               h2
                    @include font-libre(2.375rem,1.95rem, 1.75rem,1.5rem,$Playfair,400,$black)
                    font-style: italic
                    text-align: center
                    br
                         display: none
          .boxListOcaciones
               // display: flex
               // flex-direction: row
               // align-items: stretch
               position: relative
               z-index: 30
               margin-top: 2rem
               background: white
               .boxClickProduct
                    position: relative
                    z-index: 10
                    cursor: pointer
               .w50
                    width: 50%
               > div
                    &:first-child
                         > div
                              &:first-child
                                   border: 1px solid $grayDark8
                              &:last-child
                                   > div
                                        &:first-child
                                             border-top: 1px solid $grayDark8
                                             border-bottom: 1px solid $grayDark8
                                             border-right: 1px solid $grayDark8
                                        &:last-child
                                             border-bottom: 1px solid $grayDark8
                                             border-right: 1px solid $grayDark8

                    &:last-child
                         > div
                              &:first-child
                                   border-top: 0px solid $grayDark8
                                   border-left: 1px solid $grayDark8
                                   border-right: 1px solid $grayDark8
                                   border-bottom: 1px solid $grayDark8
                              &:last-child
                                   border-left: 1px solid $grayDark8
                                   border-right: 1px solid $grayDark8
                                   border-bottom: 1px solid $grayDark8
                    
               .animationCard
                    .cardOcacion
                         position: relative
                         overflow: hidden
                         .btnLinkImg
                              display: block
                              position: relative
                              z-index: 3
                         &::after
                              content: ''
                              position: absolute
                              z-index: 2
                              top: 0
                              left: 0
                              width: 100%
                              height: 100%
                              border: 0rem solid rgba($greenLight3, 0.35)
                              transition: .25s ease border
                         .boxEye
                              position: absolute
                              top: .5rem
                              right: .5rem
                              display: inline-block
                              background: $greenLight3
                              border-radius: 50%
                              width: 25px
                              height: 25px
                              border: 1px solid white
                              z-index: 30
                              opacity: 0
                              transition: .5s ease all
                              &:hover
                                   background: $pinkLight
                                   border: 2px solid rgba(white,.65)
                              .imgEye
                                   width: 16px
                         picture
                              overflow: hidden
                              margin: 0
                              border-radius: 10px
                              img
                                   border-radius: 0
                                   height: auto
                                   transition: 1s ease transform
                                   width: 100%
                                   object-fit: cover
                                   object-position: center
                                   height: 350px
                                   &.img1
                                        object-position: center
                                   &.img2
                                        height: 146.5px
                                   &.img3
                                        height: 180px
                                        

                         .cardDetail
                              padding: .65rem 0 .75rem .75rem
                              background: white
                              position: relative
                              z-index: 10
                              &::after
                                   content: ''
                                   position: absolute
                                   top: 0
                                   left: 0
                                   width: 100%
                                   height: 100%
                                   transition: .25s ease border
                              .cardShopping
                                   position: absolute
                                   bottom: 2.70rem
                                   left: 0
                                   width: 100%
                                   height: 60px
                                   padding-top: 0rem
                                   opacity: 1
                                   background: white
                                   transition: .25s ease border
                                   a
                                        display: inline-block
                                        opacity: 1
                                        background: $greenLight3
                                        line-height: 2.25em
                                        padding: 0 1.5rem
                                        border-radius: 30px
                                        text-decoration: none
                                        position: relative
                                        transition: .5s ease background
                                        &::after
                                             position: absolute
                                             content: ''
                                             border: .25rem solid rgba(white, .35)
                                             border-radius: 30px
                                             width: 100%
                                             height: 100%
                                             z-index: 10
                                             top: 0
                                             left: 0
                                             transition: .1s ease border
                                        

                                        svg
                                             transform: scaleX(-1)
                                             color: white
                                             margin-right: .5rem
                                        span
                                             @include font-libre(.813rem,.8rem,.785rem,.65rem,$Montserrat,600,white)
                              h5
                                   @include font-libre(1.25rem,1.25rem,1rem,.7rem,$Playfair,400,$blackLight)
                                   text-align: left
                                   &.card-price-old
                                        @include font-libre(.625rem,.6rem,.6rem,.45rem,$Montserrat,600,black)
                                        span
                                             position: relative
                                             display: inline-block
                                             &:before,
                                             &:after
                                                  content: ''
                                                  position: absolute
                                                  top: 50%
                                                  transform: translateY(-50%)
                                                  width: 50%
                                                  left: 0
                                                  right: auto 
                                                  background: black
                                                  height: 1px
                                             &:after
                                                  right: 0
                                                  left: auto



</style>