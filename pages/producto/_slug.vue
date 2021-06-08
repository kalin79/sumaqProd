<template>
     <div class="boxProductDetail">
          
          <banner :breadcrumb="breadcrumb" />
          <div class="container-fluid container-fluid-xxl" v-if="product">
               <div class="contentDetail">
                    <div class="row">
                         <div class="col-12 col-lg-5">
                              <div class="galleryProducts" v-if="product.gallery.length > 0">
                                   <client-only> 
                                             <carousel
                                             :perPageCustom="[[300, 1]]" 
                                             :autoplay="false" 
                                             :autoplayTimeout=5000
                                             :paginationPadding=10
                                             :minSwipeDistance=8
                                             :navigationEnabled="true"
                                             :paginationEnabled="false"
                                             :loop="false"
                                             :mouse-drag="true"
                                             :touchDrag="true"
                                             >
                                                  <slide v-for="(slide, index) in product.gallery" :key="index">
                                                       <div class="boxImages">
                                                            <img :src="slide" alt="">
                                                       </div>
                                                  </slide>
                                             </carousel>
                                    </client-only>
                                   
                              
                              </div>
                              <div class="boxThumbnails" v-if="product.gallery.length > 0">
                                   <client-only> 
                                             <carousel
                                             :perPageCustom="[[300, 3]]" 
                                             :autoplay="false" 
                                             :autoplayTimeout=5000
                                             :paginationPadding=10
                                             :minSwipeDistance=8
                                             :navigationEnabled="true"
                                             :paginationEnabled="false"
                                             :loop="false"
                                             :mouse-drag="true"
                                             :touchDrag="true"
                                             >
                                                  <slide v-for="(slide, index) in product.gallery" :key="index">
                                                       <div class="boxImages2">
                                                            <img :src="slide" alt="">
                                                       </div>
                                                  </slide>
                                             </carousel>
                                   </client-only>
                              </div>
                         </div>
                         <div class="col-12 col-lg-7">
                              <div class="ContentProduct">
                                   <div class="boxInfoHeader">
                                        <div class="boxTitle">
                                             <h1>{{ product.title_large }}</h1>
                                             <h2 v-if="product.code">{{ product.code }}</h2>
                                        </div>
                                        <div class="boxPrice">
                                             <div class="boxPrice-online">
                                                  <h2>S./ {{ dameprecioProducto(product.price) }}</h2>
                                             </div>
                                             <div class="boxPrice-old" v-if="product.old > 0">
                                                  <h2>Antes: <span>S/ {{ dameprecioProducto(product.old) }}</span></h2>
                                             </div>
                                        </div>
                                        <div class="boxDescriptionShort">
                                             <client-only>
                                                  <div v-html="product.description_small"></div>
                                             </client-only>
                                        </div>
                                   </div>
                                   <div class="boxComplementos" v-if="complementary_products.length > 0">
                                        <div class="titleHorario">
                                             <h2>1. Agregale un complemento a tu pedido (opcional)</h2>
                                        </div>
                                        <div class="galleryComplemento" v-if="complementary_products">
                                             
                                             <client-only>
                                                  
                                                  <carousel
                                                  :perPageCustom="[[300, 1], [992, 3], [1200, 4]]" 
                                                  :autoplay="false" 
                                                  :autoplayTimeout=5000
                                                  :paginationPadding=10
                                                  :minSwipeDistance=8
                                                  :navigationEnabled="true"
                                                  :paginationEnabled="false"
                                                  :loop="false"
                                                  :mouse-drag="true"
                                                  :touchDrag="true"
                                                  >
                                                       
                                                       <slide v-for="(complement, index) in complementary_products" :key="index">
                                                            <div class="boxContentComplemento">
                                                                 <div class="custom-chekbox">
                                                                      <b-form-checkbox
                                                                           v-model="selectComplement"
                                                                           :value="complement"
                                                                      >
                                                                      </b-form-checkbox>
                                                                 </div>
                                                                 <div class="boxPicture">
                                                                      <picture>
                                                                           <img :src="complement.image" :alt="complement.title_large">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="boxDetail">
                                                                      <h3>{{ complement.title_large }}</h3>
                                                                      <h2>S/ {{ dameprecioProducto(complement.price) }}</h2>
                                                                 </div>
                                                            </div>
                                                       </slide>
                                                  </carousel>
                                                  
                                             </client-only>

                                        </div>
                                   </div>
                                   <div class="boxAddButton">
                                        <div class="titleHorario">
                                             <h2 v-if="complementary_products.length > 0">2. Agregar a tu carrito</h2>
                                             <h2 v-else>1. Agregar a tu carrito</h2>
                                        </div>
                                        <div class="d-flex justify-content-center flex-lg-row flex-column align-items-center">
                                             <a href="javascript:void(0)" v-on:click="addCart({id: product.id, precio: product.price, name: product.title_large, photo: product.image, description: product.description_small,cantidad: 1})">
                                                  <div class="d-flex justify-content-center align-items-center">
                                                       <picture>
                                                            <img src="@/assets/images/shop.png" alt="AddCar">
                                                       </picture>
                                                       <p>AGREGAR (S/ {{ dameprecioProducto(product.price) }})</p>
                                                  </div>
                                             </a>
                                             <button v-on:click="addCartChekcout({id: product.id, precio: product.price, name: product.title_large, photo: product.image, description: product.description_small,cantidad: 1})">
                                                  <p>AGREGAR Y SEGUIR COMPRANDO</p>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12 mt-4">
                              <div class="boxTabDetail">
                                   <div class="tabHeader">
                                        <div class="d-flex justify-content-start flex-column flex-lg-row align-items-center">
                                             <a href="javascript:void(0)" id="tabHeader-1" v-on:click="viewDeliveryCotentTab(1)" class="active"><p>DESCRIPCIÓN DEL PRODUCTO</p></a>
                                             <a href="javascript:void(0)" id="tabHeader-2" v-on:click="viewDeliveryCotentTab(2)"><p>POLÍTICAS DE ENVÍO</p></a>
                                             <a href="javascript:void(0)" id="tabHeader-3" v-on:click="viewDeliveryCotentTab(3)"><p>POLÍTICAS DE CAMBIO</p></a>
                                        </div>
                                   </div>
                                   <div class="tabConent">
                                        <section id="tabConent-1" class="active">
                                             <h4>{{ product.title_large }}</h4>
                                             <client-only>
                                             <div v-html="product.description"></div>
                                             </client-only>
                                        </section>
                                        <section id="tabConent-2" >
                                             <h4>{{ product.title_large }}</h4>
                                             <p><strong>Los rangos de entrega</strong>:</p>
                                             <ul>
                                                  <li>07:00 am – 10:00 am <strong>Reparto único de productos con el nombre "DESAYUNO" </strong>en caso seleccione un producto que no pertenezca a esa categoría se programara para el horario siguiente.</li>
                                                  <li>11:00 am – 03:00 pm Reparto de todos los productos que hayan sido comprados con al menos un día de anticipación.</li>
                                                  <li>03:00 pm – 07:00 pm Reparto de pedidos tomados el mismo día.</li>
                                             </ul>
                                             <p>Para fechas especiales como San Valentín, Día de la Madre, Día de la Mujer, Día del Padre, Día Niño, Fiestas patrias y Navidad únicamente se aceptarán pedidos de la categoría que lleve el nombre correspondiente a la campaña en curso.</p>
                                             
                                        </section>
                                        <section id="tabConent-3" >
                                             <h4><strong>Cambios y devoluciones</strong></h4>
                                             <p>Aceptamos cambios con un plazo mínimo de 2 días de anticipación. 
                                                  Para cambios de fecha, dirección, detalles o tipo de producto comunicarse al +51985757450 o 
                                                  al mail <a href="mailto:logistica@floreriasumaq.pe">logistica@floreriasumaq.pe</a> con el asunto <strong>"REALIZAR CAMBIO URGENTE"</strong></p>
                                             <p>En caso no se pueda realizar la entrega debido a que no se encontró a ninguna persona con capacidad de recibir el regalo se procederá de la siguiente forma.</p>
                                             <p>El pedido regresará a nuestra base de repartos en San Miguel donde podrá ser recogido en el transcurso del día.</p>
                                             <p>En caso de no poder recoger el pedido de nuestra base podrá solicitar una reprogramación para el mismo día dependiendo de la disponibilidad. Este nuevo envío tendrá un costo de s/.15 a s/.45 soles (variará según distrito).</p>
                                             <p>Es posible realizar la reprogramación para otra fecha con un costo por reprogramación y costo de envío según distrito. Esto se debe a que nuestros productos en su mayoría son perecibles es por ello que deberán ser preparados nuevamente para envío.</p>
                                             <p>No se aceptan devoluciones de nuestros pedidos bajo ningún contexto.</p>
                                             <h4><strong>COSTO DE ENVÍO</strong></h4>
                                             <h4><strong>Lima</strong></h4>
                                             <ul>
                                                  <li>Zona 1: Pueblo Libre, San Isidro, San Miguel, Magdalena, Jesús María, Lince Breña, Lima s/9</li>
                                                  <li>Zona 2: La Molina, La Victoria, San Luis, Miraflores, Barranco, Surco, San Borja, Surquillo s/13</li>
                                                  <li>Zona 3: Chorrillos, Ate, Rimac, San Juan de Miraflores, Santa Anita s/17</li>
                                                  <li>Zona 4: El Agustino, Bellavista, Callao, Carmen de la Legua, La Perla s/25</li>
                                                  <li>Zona 5: San Juan de Lurigancho, Santa Clara, Villa El Salvador, La Punta s/30</li>
                                                  <li>Zona 6: Independencia, Los Olivos, Lurigancho/Chosica, San Martín de Porres, Villa María del Triunfo s/35</li>
                                                  <li>Zona 7: Carabayllo, Cieneguilla, Comas, Pachacamac, Puente Piedra, Ventanilla, Huaycán s/50</li>
                                                  <li>Zona 8: Chosica, Lurín, Santa Rosa, Mi Perú, Santa Eulalia s/70</li>
                                                  <li>Zona 9: Chaclacayo, Arica, Pulpos, Punta Hermosa s/80</li>
                                             </ul>
                                             <h4><strong>Provincias</strong></h4>
                                             <ul>
                                                  <li>El envío se realizará a la base de Olva de la ciudad s/40</li>
                                             </ul>
                                        </section>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12" v-if="related_products.length > 0">
                              <div class="boxProductosRelaciones">
                                   <div class="boxTitle">
                                        <h2>También te pueden interesar</h2>
                                   </div>
                                   <div class="boxCarrusel" >
                                        <client-only>
                                                  
                                                  <carousel
                                                  :perPageCustom="[[300, 1], [992, 3], [1200, 4]]" 
                                                  :autoplay="true" 
                                                  :autoplayTimeout=5000
                                                  :paginationPadding=10
                                                  :minSwipeDistance=8
                                                  :navigationEnabled="true"
                                                  :paginationEnabled="false"
                                                  :loop="true"
                                                  :mouse-drag="true"
                                                  :touchDrag="true"
                                                  >
                                                       
                                                       <slide v-for="(relateds, index) in related_products" :key="index">
                                                            <div class="boxRelacioinadosCarrusel">
                                                                 <nuxt-link :to="`/${relateds.link}`">
                                                                      <div class="boxPicture">
                                                                           <picture>
                                                                                <img :src="relateds.image" :alt="relateds.title_large">
                                                                           </picture>
                                                                      </div>
                                                                      <div class="boxDetail">
                                                                           <h4>{{ relateds.category }}</h4>
                                                                           <h3>{{ relateds.title_large  }}</h3>
                                                                           <h2>S/ {{ relateds.price }} </h2>
                                                                           <h5 v-if="relateds.price_old > 0">Antes <span>S./{{ relateds.price_old }}</span></h5>
                                                                      </div>
                                                                 </nuxt-link>
                                                            </div>
                                                       </slide>
                                                       
                                                  </carousel>
                                                  
                                             </client-only>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

import Banner from '@/components/Banner/Productos'

export default {
     components: {
          // VueperSlides, 
          // VueperSlide,
          Banner
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          
          // console.log(params.slug)
          let breadcrumb = ''
          let product = ''
          let related_products = ''
          let complementary_products = ''
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/producto/${params.slug}`)
               
               if ((res.code === 200) && (res.status === 1)){
                    breadcrumb = res.data.breadcrumb
                    product = res.data.product
                    related_products = res.data.related_products
                    complementary_products = res.data.complementary_products
                    
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }finally{
               // console.log('final 1')
               try {
                    let res2 = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
                    // console.log(res.data)
                    if ((res2.code === 200) && (res2.status === 1)){
                         store.commit('menu/setMenuMain', res2.data.menu)
                         store.commit('menu/setMenuTiendaMain', res2.data.categories)
                    }else{
                         console.log('error await')
                    }
               }catch (error) {
                    console.log(error)
               }finally{
                    // console.log('final 2')
               }
          }

          return {
               breadcrumb,
               product,
               related_products,
               complementary_products,
          }

          
     },
     data() {
          return {
               price: null,
               selectComplement: [],
               tl: null,
               titleHead: '' 
          }
     },
     mounted() {
          this.titleHead = this.product.title_large
          // console.log(this.DeliveryTimes[0].value)
          // console.log(this.min)
               // this.slides.push({image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg'})
     },
    
     head () {
          return {
               title: `SUMAQ.pe - ${this.titleHead}`,
               meta: [
               { hid: 'subject', name: 'subject', content: `SUMAQ.pe - ${this.titleHead}` },
               { hid: 'description', name: 'description', content: `${this.product.description_small}` }, 
               // Google +
               { hid: 'name-google', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'description-google', content: `${this.product.description_small}` }, 
               { hid: 'image-google', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'twitter:description', name: 'twitter:description', content: `${this.product.description_small}` }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Open Graph data
               { hid: 'og:title',name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/'  }, 
               { hid: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', name: 'og:description', content: `${this.product.description_small}` }, 
               { hid: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
     methods : {
          async addCartChekcout(objData){
               // console.log(objData)
               this.$store.commit('shopping/cart/setdataCart', objData)
               this.$router.push('/cart/informacion')
          },
          async addCart(objData){
               var boxPopUp = $('.boxPopUp')
               // console.log(objData)
               this.$store.commit('shopping/cart/setdataCart', objData)
               boxPopUp.fadeIn('slow')
          },
          dameprecioProducto(price){
               return price.toFixed(2)
          },
          viewDeliveryCotentTab(id){
               const tabDelivery = $(`#tabHeader-${id}`)
               const tabItem = $(`#tabConent-${id}`)
               const allHeader = $(".tabHeader > div a")
               const allTabContent = $(".tabConent section")
               allHeader.removeClass('active')
               allTabContent.removeClass('active')
               setTimeout(function(){
                    tabDelivery.addClass('active')
                    tabItem.addClass('active')
               },100)
          },
          
     }, 
}
</script>
<style lang="sass">
     $anchoContent : 95%
     $anchoContent2 : 95%
     @media screen and (min-width: 992px)
          $anchoContent : 85%
          $anchoContent2 : 80%
     .boxProductDetail
          padding: 0 0 5rem 0
          @media screen and (min-width: 992px)
               padding: 0 0 8rem 0
          .boxProductosRelaciones
               padding: 3rem 0 0
               overflow: hidden
               .boxCarrusel
                    padding: 2rem 0 0
                    .VueCarousel-navigation-button
                         font-size: 0
                         height: 100px
                         width: 52px
                         &:focus,
                         &:hover 
                              outline: transparent 
                    .VueCarousel-navigation-button::before
                         content: ""
                         position: absolute
                         top: 0
                         height: 100px
                         width: 52px
                    .VueCarousel-navigation-next::before
                         background: url('@/assets/images/nextWhite.png')
                         background-repeat: no-repeat
                         background-position: 0
                         right: 4.25rem
                    .VueCarousel-navigation-prev::before
                         background: url('@/assets/images/prevWhite.png')
                         background-repeat: no-repeat
                         background-position: 0
                         left: 4.25rem
                    .boxRelacioinadosCarrusel
                         a
                              text-decoration: none
                              display: block
                              &:hover
                                   .boxPicture
                                        picture
                                             img
                                                  transform: scale(1.15)  
                              .boxDetail
                                   padding: 0 0 0 2.5rem
                                   h4
                                        text-transform: uppercase
                                        @include font-libre(0.875rem,0.8rem,0.75rem,0.75rem,$Montserrat,700,$grayDark9)
                                        margin: 0 0 .25rem 0
                                        line-height: 1.5em
                                   h3,
                                   h2
                                        @include font-libre(1.5rem,1.1rem,1rem,1rem,$Montserrat,500,$blackLight)
                                        margin: 0
                                        letter-spacing: -.05em
                                        line-height: 1.5em
                                   h5
                                        @include font-libre(0.875rem,0.8rem,0.75rem,0.75rem,$Montserrat,600,$grayLight3)
                                        margin: 0
                                        line-height: 1.5em
                                        span
                                             position: relative
                                             &::before
                                                  content: ''
                                                  position: absolute
                                                  top: 50%
                                                  transform: translateY(-50%)
                                                  left: 0
                                                  height: 1px
                                                  background: $grayLight3
                                                  width: 100%

                              .boxPicture
                                   padding: 1rem
                                   picture
                                        display: block
                                        height: 400px
                                        overflow: hidden
                                        border-radius: 10px
                                        box-sizing: border-box 
                                        @media screen and (min-width: 992px)
                                             height: 350px
                                        @media screen and (min-width: 1200px)
                                             height: 400px
                                        @media screen and (min-width: 1400px)
                                             height: 400px
                                        img
                                             width: 100%
                                             height: 100%
                                             object-fit: cover
                                             transition: .5s ease all 
               .boxTitle
                    text-align: center
                    h2
                         @include font-libre(1.75rem,1.5rem,1.25rem,1rem,$Playfair,600,black)
                         font-style: italic
          .boxTabDetail
               background: white
               overflow: hidden
               border-top: 1px solid $grayDark13
               padding-top: 2rem 
               @media screen and (min-width: 992px)
                    background: $grayDark15
                    border-radius: 10px 10px 0 0
                    border-left: 1px solid $grayDark13
                    border-right: 1px solid $grayDark13
                    border-bottom: 1px solid $grayDark13
                    border-top: 0px solid $grayDark13
                    padding-top: 0rem 
               .tabConent
                    background: white
                    min-height: 100px
                    section
                         display: none
                         padding: 2rem 1rem 1rem
                         @media screen and (min-width: 992px)
                              padding: 2rem 4rem
                         @media screen and (min-width: 1200px)
                              padding: 2rem 5rem
                         @media screen and (min-width: 1400px)
                              padding: 2rem 5.5rem
                         h4,
                         h3
                              @include font-libre(1rem,1rem,.9rem,.9rem,$Montserrat,600,$grayDark16)
                              line-height: 1.75em
                              margin: 0 0rem 1rem 0
                              strong
                                   font-weight: 700
                         p
                              @include font-libre(1rem,1rem,.9rem,.85rem,$Montserrat,400,$grayDark16)
                              line-height: 1.75em
                              margin: 0 0 1rem 0 
                              strong
                                   font-weight: 600
                         ul
                              margin: 0 0 1rem 1.15rem
                              padding: 0
                              list-style: none
                              ul
                                   margin: 0 0 0 1.75rem

                              li
                                   @include font-libre(1rem,1rem,.9rem,.85rem,$Montserrat,400,$grayDark16)
                                   line-height: 1.75em
                                   margin: 0
                                   &:before
                                        content: "\2022"
                                        color: $pinkLight2
                                        font-weight: bold
                                        display: inline-block
                                        width: 1rem
                                        position: relative
                                        top: 0rem
                                        font-size: 1.25rem
                                        margin-left: -1.07rem
                         &.active
                              display: block
               .tabHeader
                    > div
                         a
                              width: 100%
                              text-align: center
                              background: $grayDark12
                              padding: .5rem 0
                              text-decoration: none
                              border-radius: 20px
                              border: 1px solid $grayDark13
                              transition: .5s ease-out all
                              margin-bottom: 1rem
                              @media screen and (min-width: 992px)
                                   flex: 1
                                   width: auto
                                   margin-bottom: 0rem
                                   border-top: 1px solid $grayDark13
                                   border-left: 0
                                   border-right: 0
                                   border-bottom: 0
                                   border-radius: 10px 10px 0 0
                              &:nth-child(2)
                                   border-left: 1px solid $grayDark13
                                   border-right: 1px solid $grayDark13
                              // &:first-child
                              //      border-right: 1px solid $grayDark13
                              //      z-index: 3
                              // &:last-child
                              //      border-left: 1px solid $grayDark13
                              &.active,
                              &:hover
                                   background: white
                                   border-top: 1px solid $grayDark13
                                   p
                                        color: $brown
                              p
                                   margin: 0
                                   line-height: 2em
                                   @include font-libre(1rem,1rem,.9rem,.9rem,$Montserrat,500,$grayDark11)

                                   
          .contentDetail
               padding: 3rem 0rem 0
          .ContentProduct
               padding: 0 0 0 0rem
               @media screen and (min-width: 992px)
                    padding: 0 0 0 1.5rem
          .titleHorario
               padding: .75rem 0
               h2
                    @include font-libre(1rem,.95rem,.95rem,.9rem,$Montserrat,600,$brown)
                    line-height: 1.5em
                    @media screen and (min-width:992px)
                         line-height: 2em
                    @media screen and (min-width:1200px)
                         line-height: 3em
                    @media screen and (min-width:1400px)
                         line-height: 3em
          .boxAddButton
               padding: 0 0 3.5rem
               @media screen and (min-width: 992px)
                    padding: 0 0 4.5rem
               .titleHorario
                    padding-bottom: 1rem 
               picture
                    margin-right: .5rem
                    img
                         width: 100%
               p
                    margin: 0
                    @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,600,white)
               a,
               button
                    border: 1px solid $greenLight3
                    padding: 0rem 1.95rem
                    height: 60px
                    background: white
                    border-radius: 30px
                    text-decoration: none
                    width: 90%
                    @media screen and (min-width: 992px)
                         width: auto 
               button
                    margin-left: 0rem
                    margin-top: 1rem
                    @media screen and (min-width: 992px)
                         margin-left: 2rem 
                         margin-top: 0rem
                    p
                         color: $greenLight3
               a
                    background: $greenLight3
                    > div
                         width: 100%
                         height: 100%


          .boxComplementos
               padding: .85rem 0 1.5rem
               overflow: hidden
               .boxContentComplemento
                    position: relative
                    .custom-chekbox
                         position: absolute
                         z-index: 10
                         right: .25rem 
                         top: 1.25rem
                         .custom-control-input
                              width: 1.5rem
                              height: 1.5rem
                         .custom-control-input
                              &:focus:not(:checked) 
                                   ~ .custom-control-label
                                        &::before
                                             border-color: $pinkLight
                         .custom-control-input
                              &:focus 
                                   ~ .custom-control-label
                                        &::before
                                             box-shadow: 0 0 0 0.2rem rgba($pinkLight2, .25)
                         .custom-control-input
                              &:checked 
                                   ~ .custom-control-label
                                        &::before
                                             background: $pinkLight2
                                             border-color: $pinkLight
                         .custom-control-label
                              width: 1.5rem
                              height: 1.5rem
                              
                              &:before,
                              &:after
                                   width: 1.5rem
                                   height: 1.5rem
               .galleryComplemento
                    border: 1px solid $grayDark4
                    border-radius: 10px
                    background: $grayLight
                    padding: 1rem 0 0
                    margin-top: 1.25rem
                    
                    .VueCarousel-navigation-button
                         font-size: 0
                         height: 68px
                         width: 30px
                         &:focus,
                         &:hover 
                              outline: transparent 
                    .VueCarousel-navigation-button::before
                         content: ""
                         position: absolute
                         top: 0
                         height: 68px
                         width: 30px
                    .VueCarousel-navigation-next::before
                         background: url('@/assets/images/next.png')
                         background-repeat: no-repeat
                         background-position: 0
                         right: 1.86rem
                    .VueCarousel-navigation-prev::before
                         background: url('@/assets/images/prev.png')
                         background-repeat: no-repeat
                         background-position: 0
                         left: 1.86rem
                    .boxDetail
                         padding: 0.25rem .75rem 1.5rem
                         h3,
                         h2
                              margin: 0
                              @include font-libre(0.95rem,0.85rem,.75rem,1rem,$Montserrat,600,$grayDark14)
                         h2
                              font-weight: 900
                    .boxPicture
                         padding: .75rem
                         picture
                              border: 1px solid $grayDark13 
                              display: block
                              border-radius: 10px
                              overflow: hidden
                              height: 350px
                              @media screen and (min-width: 992px)
                                   height: 180px
                              img
                                   width: 100%
                                   height: 100%
                                   object-fit: cover
                         
          .boxInfoBody
               padding-top: .5rem
               .boxCargoDelivery
                    padding: .75rem 0 0
                    img
                         margin-right: .5rem
                    p
                         @include font-libre(0.875rem,0.8rem,0.785rem,.75rem,$Montserrat,500,$grayDark14)
               
               
               
          .boxInfoHeader
               padding: 0rem 0 0
               @media screen and (min-width: 992px)
                    padding: 1.5rem 0 0
               .boxDescriptionShort
                    width: $anchoContent
                    border-bottom: 1px solid rgba(black,.15)
                    padding-bottom: 1rem
                    p
                         margin: 0
                         @include font-libre(1.025rem,1,.935,1rem,$Montserrat,500,$grayDark10)
                         line-height: 1.45em

               .boxTitle
                    h1
                         @include font-libre(2.25rem,1.975rem,1.9rem,1.75rem,$Playfair,400,$blackLight) 
                    h2
                         @include font-libre(1.05rem,1,.935,1rem,$Montserrat,600,$blue)
                         line-height: 1.75em
               .boxPrice
                    .boxPrice-online
                         h2
                              @include font-libre(2.25rem,1.975rem,1.75rem,1.5rem,$Playfair,400,$blackLight)  
                    .boxPrice-old
                         h2
                              @include font-libre(1rem,.9,.935,1rem,$Montserrat,500,$grayLight3)
                              line-height: 2.5em
                              span
                                   position: relative
                                   &:before
                                        content: ''
                                        width: 100%
                                        height: 1px
                                        background: $grayLight3
                                        position: absolute
                                        top: 50%
                                        left: 0
                                        transform: translateY(-50%)
          .boxThumbnails
               width: 100%
               margin-top: .85rem
               height: 80px
               margin-bottom: 1rem
               .VueCarousel,
               .VueCarousel-inner,
               .VueCarousel-slide
                    height: 100% !important
               .boxImages2
                    margin: 0 .25rem
                    overflow: hidden
                    border-radius: 10px
                    height: 100%
                    img
                         width: 100%
                         height: 100%
                         object-fit: cover

     
          .galleryProducts
               height: 450px
               @media screen and (min-width: 992px)
                    height: 450px
               @media screen and (min-width: 1200px)
                    height: 500px
               @media screen and (min-width: 1400px)
                    height: 500px
               .VueCarousel,
               .VueCarousel-inner,
               .VueCarousel-slide
                    height: 100% !important
               .boxImages
                    height: 100% 
                    img
                         width: 100%
                         height: 100%
                         object-fit: cover
               .VueCarousel-navigation-button
                    font-size: 0
                    height: 68px
                    width: 30px
                    &:focus,
                    &:hover 
                         outline: transparent 
               .VueCarousel-navigation-button::before
                    content: ""
                    position: absolute
                    top: 0
                    height: 100px
                    width: 52px
               .VueCarousel-navigation-next::before
                    background: url('@/assets/images/nextWhite.png')
                    background-repeat: no-repeat
                    background-position: 0
                    right: 1.86rem
               .VueCarousel-navigation-prev::before
                    background: url('@/assets/images/prevWhite.png')
                    background-repeat: no-repeat
                    background-position: 0
                    left: 1.86rem
                         
               

</style>