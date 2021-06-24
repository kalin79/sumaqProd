<template>
     <div class="destacadosHome">
          <div class="animationSection">
               <div class="container-fluid container-fluid-xxl">
                    <div class="boxDestacadoTop">
                         <!-- <div class="boxVector pos1">
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
                         </div> -->
                         <div class="row">
                              <div class="col-6 col-xl-7">
                                   <div class="d-flex justify-content-start align-items-start ">
                                        <picture class="imageFlorTitle">
                                             <img src="@/assets/images/flor7.png" alt="Recomendaciones del Florista">
                                        </picture>
                                        <div class="boxTitle">
                                             <h2>Recomendaciones de nuestros floristas <br>para cada ocasión especial...</h2>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-6 col-xl-5">
                                   <div class="d-flex justify-content-end align-items-center">
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
                         </div>
                         <div class="separate"></div>
                         <div class="boxListOcaciones" v-if="listOcaciones != null">
                              <!-- <div v-if="listOcaciones.length > 0"> -->
                                   <div>
                                        <div class="animationCard">
                                             <div class="cardOcacion">
                                                  <nuxt-link :to="`${listOcaciones[0].link}`" class="boxEye d-flex justify-content-center align-items-center">
                                                       <img src="@/assets/images/ojos.png" class="imgEye">
                                                  </nuxt-link>
                                                  <picture>
                                                       <img :src="listOcaciones[0].image" :alt="listOcaciones[0].title" class="img1">
                                                  </picture>
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
                                                       <div class="detailClick" v-on:click="irProducto(listOcaciones[0])">
                                                            <h5>{{ listOcaciones[0].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[0].price) }}</h5>
                                                            <h5 class="card-price-old" v-if="listOcaciones[0].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[0].price_old) }}</span></h5>
                                                            <h5 v-else class="card-price-old blanco">Antes</h5>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div>
                                        <div class="d-flex">
                                             <div>
                                                  <div class="animationCard">
                                                       <div class="cardOcacion">
                                                            <nuxt-link :to="`${listOcaciones[1].link}`" class="boxEye d-flex justify-content-center align-items-center">
                                                                 <img src="@/assets/images/ojos.png" class="imgEye">
                                                            </nuxt-link>
                                                            <picture>
                                                                 <img :src="listOcaciones[1].image" :alt="listOcaciones[1].title" class="img2">
                                                            </picture>
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
                                                                 <div class="detailClick" v-on:click="irProducto(listOcaciones[1])">
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
                                                            <nuxt-link :to="`${listOcaciones[2].link}`" class="boxEye d-flex justify-content-center align-items-center">
                                                                 <img src="@/assets/images/ojos.png" class="imgEye">
                                                            </nuxt-link>
                                                            <picture>
                                                                 <img :src="listOcaciones[2].image" :alt="listOcaciones[2].title" class="img2">
                                                            </picture>
                                                            <div class="cardDetail">
                                                                 <div class="cardShopping d-flex justify-content-center align-items-center">
                                                                      <a href="javascript:void(0)"  v-on:click="addCart({id: listOcaciones[2].id, precio: listOcaciones[2].price, name: listOcaciones[2].title, photo: listOcaciones[2].image, description: listOcaciones[2].description_small,cantidad: 1})">
                                                                           <div class="d-flex justify-content-start align-items-center">
                                                                                <client-only>
                                                                                <b-icon-cart3></b-icon-cart3>
                                                                                </client-only>
                                                                                <span>Añadir al Carrito</span>
                                                                           </div>
                                                                      </a>
                                                                 </div>
                                                                 <div class="detailClick" v-on:click="irProducto(listOcaciones[2])">
                                                                      <h5>{{ listOcaciones[2].title }}<br>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[2].price) }}</h5>
                                                                      <h5 class="card-price-old" v-if="listOcaciones[2].price_old > 0">Antes: <span>{{ getCurrencySymbol }} {{ getPrice(listOcaciones[2].price_old) }}</span></h5>
                                                                      <h5 v-else class="card-price-old blanco">Antes</h5>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="d-flex">
                                             <div>
                                                  <div class="animationCard">
                                                       <div class="cardOcacion">
                                                            <nuxt-link :to="`${listOcaciones[3].link}`" class="boxEye d-flex justify-content-center align-items-center">
                                                                 <img src="@/assets/images/ojos.png" class="imgEye">
                                                            </nuxt-link>
                                                            <picture>
                                                                 <img :src="listOcaciones[3].image" :alt="listOcaciones[3].title" class="img3">
                                                            </picture>
                                                            <div class="cardDetail">
                                                                 <div class="cardShopping d-flex justify-content-center align-items-center">
                                                                      <a href="javascript:void(0)"  v-on:click="addCart({id: listOcaciones[3].id, precio: listOcaciones[3].price, name: listOcaciones[3].title, photo: listOcaciones[3].image, description: listOcaciones[3].description_small,cantidad: 1})">
                                                                           <div class="d-flex justify-content-start align-items-center">
                                                                                <client-only>
                                                                                <b-icon-cart3></b-icon-cart3>
                                                                                </client-only>
                                                                                <span>Añadir al Carrito</span>
                                                                           </div>
                                                                      </a>
                                                                 </div>
                                                                 <div class="detailClick" v-on:click="irProducto(listOcaciones[3])">
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
                                                            <nuxt-link :to="`${listOcaciones[4].link}`" class="boxEye d-flex justify-content-center align-items-center">
                                                                 <img src="@/assets/images/ojos.png" class="imgEye">
                                                            </nuxt-link>
                                                            <picture>
                                                                 <img :src="listOcaciones[4].image" :alt="listOcaciones[4].title" class="img3">
                                                            </picture>
                                                            <div class="cardDetail" >
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
                                                                 <div class="detailClick" v-on:click="irProducto(listOcaciones[4])">
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
                              <!-- </div> -->
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
                    console.log(product)
                    this.$router.push(`${product.link}`)
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
                         // console.log(sendSolicitud)
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
               addBlur(event){
                    console.log(event.target.parentElement)
               },
               removeBlur(event){
                    console.log(event)
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
     .destacadosHome
          background-image: url('@/assets/images/fondoBlog.jpg')
          background-repeat: repeat
          background-position: 0 0
          position: relative
          z-index: 50
          .animationSection
               overflow: hidden
          .blanco
               color: white !important
          &:after
               content: ''
               position: absolute
               bottom: 0
               left: 0
               width: 100%
               height: 35rem
               background-color: white
               background-image: url('~/assets/images/bg_sumaq.png')
               background-repeat: no-repeat
               background-position: center
               background-size: cover
               @media screen and (min-width: 992px)
                    height: 32rem
               @media screen and (min-width: 1200px)
                    height: 33rem
               @media screen and (min-width: 1400px)
                    height: 32rem

          .boxButtonTienda
               padding-top: 3.5rem 
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
                    @media screen and (min-width: 992px)
                         line-height: 4em
                         padding: 0 5.5rem
                    @media screen and (min-width: 1200px)
                         line-height: 4em
                         padding: 0 5.5rem
                    @media screen and (min-width: 1200px)
                         line-height: 4em
                         padding: 0 5.5rem
                    &:hover
                         background: $pinkLight
                    
          .boxDestacadoTop
               padding-top: 4.5rem
               padding-bottom: 10rem
               padding-left: 
               padding-right: 0
               position: relative
               z-index: 10
               @media screen and (min-width: 992px)
                    padding-top: 3rem 
                    padding-bottom: 10rem
               @media screen and (min-width: 1200px)
                    padding-top: 3.5rem
                    padding-bottom: 9rem
               @media screen and (min-width: 1400px)
                    padding-top: 4.5rem
                    padding-bottom: 10rem
               .boxVector
                    position: absolute
                    &.pos3
                         bottom: 0
                         right: 0
                         @media screen and (min-width: 992px)
                              right: -9.5rem
                              bottom: -6.5rem
                              // left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              right: -9.5rem
                              bottom: -7.5rem
                              // left: -6rem 
                         @media screen and (min-width: 1400px)
                              bottom: 13.5rem
                              right: -8rem
                              // left: -11.15rem  
                         picture
                              opacity: .25
                              img
                                   width: 421px
                                   @media screen and (min-width: 992px)
                                        width: 350px 
                                   @media screen and (min-width: 1200px)
                                        width: 380px
                                   @media screen and (min-width: 1400px)
                                        width: 400px
                    &.pos2
                         bottom: 0
                         left: 50%
                         transform: translateX(-50%)
                         @media screen and (min-width: 992px)
                              left: 27%
                              transform: translateX(10%)
                              bottom: 1.5rem
                              // left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              left: 27%
                              transform: translateX(22%)
                              bottom: .35rem
                              // left: -6rem 
                         @media screen and (min-width: 1400px)
                              left: 27%
                              transform: translateX(27%)
                              bottom: 1.5rem
                              // left: -11.15rem  
                         picture
                              opacity: .15
                              img
                                   width: 542px
                                   @media screen and (min-width: 992px)
                                        width: 300px 
                                   @media screen and (min-width: 1200px)
                                        width: 300px
                                   @media screen and (min-width: 1400px)
                                        width: 300px
                    &.pos1
                         bottom: 0
                         left: 0 
                         @media screen and (min-width: 992px)
                              bottom: 16.75rem
                              left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              bottom: 15.55rem
                              left: -6rem 
                         @media screen and (min-width: 1400px)
                              bottom: 13.05rem
                              left: -11.15rem  
                         picture
                              opacity: .35
                              img
                                   width: 618px
                                   @media screen and (min-width: 992px)
                                        width: 350px 
                                   @media screen and (min-width: 1200px)
                                        width: 400px
                                   @media screen and (min-width: 1400px)
                                        width: 490px
               .separate
                    width: 100%
                    height: 2rem
          .imageFlorTitle
               margin-right: .25rem
               img
                    width: 96px
                    @media screen and (min-width: 992px)
                         width: 70px
                    @media screen and (min-width: 1200px)
                         width: 80px
                    @media screen and (min-width: 1400px)
                         width: 96px
          .boxSearch
               .select
                    width: 264px
                    height: 60px
                    border-radius: 10px
                    position: relative
                    border: 1px solid $grayLight2
                    margin-top: .5rem
                    overflow: hidden
                    cursor: pointer
                    @media screen and (min-width: 992px)
                         width: 330px
                         height: 45px
                         border-radius: 10px
                    @media screen and (min-width: 1200px)
                         width: 380px
                         height: 50px
                         border-radius: 10px
                    @media screen and (min-width: 1400px)
                         width: 400px
                         height: 60px
                         border-radius: 15px
                    &:focus,
                    &.active
                         outline: none
                         box-shadow: none
                         border: 1px solid $grayLight2
                    &:after
                         content: ''
                         background-image: url('@/assets/images/arrowcbx.png')
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
                         @include font-libre(0.875rem,.825rem,.775rem,.7rem,$Montserrat,600,$grayDark7)
                         padding: 0rem 1rem
                         appearance: none
                         cursor: pointer
                         outline: 0
                         box-shadow: none
                         background: $whiteGray
                         background-image: none
                         
               p
                    @include font-libre(1.375rem,1.35rem, 1.2rem,.85rem,$Playfair,400,$blackLight)
                    font-style: italic
          .boxTitle
               h2
                    @include font-libre(2.375rem,1.95rem, 1.75rem,.85rem,$Playfair,400,$black)
                    font-style: italic
          .boxListOcaciones
               display: flex
               flex-direction: row
               align-items: stretch
               position: relative
               z-index: 30
               margin-top: 2rem
               background: white
               > div
                    &:first-child
                         width: 35%
                         border: 1px solid $grayDark8
                    &:last-child
                         border-bottom: 1px solid $grayDark8
                         border-top: 1px solid $grayDark8
                         border-right: 1px solid $grayDark8
                         > .d-flex
                              &:last-child
                                   > div
                                        &:first-child
                                             border-right: 1px solid $grayDark8
                              &:first-child
                                   > div
                                        &:first-child
                                             border-bottom: 1px solid $grayDark8
                                             border-right: 1px solid $grayDark8
                                        &:last-child
                                             border-bottom: 1px solid $grayDark8
               .animationCard
                    &:hover
                         .cardOcacion
                              .boxEye
                                   opacity: 1
                                   picture
                                        img
                                             transform: scale(1)
                              picture
                                   img
                                        transform: scale(1.25)
                              .cardDetail
                                   &::after
                                        border-left: .35rem solid rgba($greenLight3, 0.25)
                                        border-right: .35rem solid rgba($greenLight3, 0.25)
                                        border-bottom: .35rem solid rgba($greenLight3, 0.25)
                                   .cardShopping
                                        animation-name: cardDetailHoverIn
                                        animation-duration: .25s
                                        animation-timing-function: ease-in
                                        animation-fill-mode: forwards
                                        border-left: .35rem solid rgba($greenLight3, 0.25)
                                        border-right: .35rem solid rgba($greenLight3, 0.25)
                                        a
                                             animation-name: cardDetailButtomHoverIn
                                             animation-duration: .25s
                                             animation-timing-function: ease-in
                                             animation-fill-mode: forwards
                                             animation-delay: .25s
                              &::after
                                   border: .35rem solid rgba($greenLight3, 0.25)
                    .cardOcacion
                         position: relative
                         overflow: hidden
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
                                   @media screen and (min-width: 992px)
                                        height: $altoDesHome
                                   @media screen and (min-width: 1200px)
                                        height: $altoDesHome1200
                                   @media screen and (min-width: 1400px)
                                        height: 220px
                                   &.img1
                                        object-position: 0 25%
                                        @media screen and (min-width: 992px)
                                             height: 440px
                                        @media screen and (min-width: 1200px)
                                             height: 460px
                                        @media screen and (min-width: 1400px)
                                             height: 520px
                                   &.img3
                                        // object-position: 0 25%
                                        @media screen and (min-width: 992px)
                                             height: $altoDesHome
                                        @media screen and (min-width: 1200px)
                                             height: $altoDesHome1200
                                        @media screen and (min-width: 1400px)
                                             height: 210px

                         .cardDetail
                              padding: .85rem 0 1rem 1.25rem
                              background: white
                              position: relative
                              z-index: 10
                              .detailClick
                                   cursor: pointer
                                   position: relative
                                   z-index: 5
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
                                   bottom: 4.89rem
                                   left: 0
                                   width: 100%
                                   height: 0px
                                   padding-top: .95rem
                                   opacity: 0
                                   background: white
                                   animation-name: cardDetailHoverOut
                                   animation-duration: .25s
                                   animation-timing-function: ease-in
                                   transition: .25s ease border
                                   a
                                        display: inline-block
                                        opacity: 0
                                        background: $greenLight3
                                        line-height: 2.5em
                                        padding: 0 1.5rem
                                        border-radius: 30px
                                        text-decoration: none
                                        position: relative
                                        transition: .5s ease background
                                        &::after
                                             position: absolute
                                             content: ''
                                             border: 0rem solid rgba(white, .35)
                                             border-radius: 30px
                                             width: 100%
                                             height: 100%
                                             z-index: 10
                                             top: 0
                                             left: 0
                                             transition: .1s ease border
                                        &:hover
                                             background: $pinkLight
                                             &::after
                                                  border: .25rem solid rgba(white, .35)

                                        svg
                                             transform: scaleX(-1)
                                             color: white
                                             margin-right: .5rem
                                        span
                                             @include font-libre(.813rem,.8rem,.785rem,.7rem,$Montserrat,600,white)
                              h5
                                   @include font-libre(1.25rem,1.25rem,1rem,1rem,$Playfair,400,$blackLight)
                                   text-align: left
                                   
                                   &.card-price-old
                                        @include font-libre(.625rem,.6rem,.6rem,.75rem,$Montserrat,600,black)
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