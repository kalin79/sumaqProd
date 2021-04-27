<template>
     <div class="boxProductDetail">
          <banner />
          <div class="container-fluid container-fluid-xxl">
               <div class="contentDetail">
                    <div class="row">
                         <div class="col-12 col-lg-5">
                              <div class="galleryProducts">
                                   
                                   <vueper-slides
                                        ref="vueperslides1"
                                        :autoplay="true"
                                        :duration=5000
                                        :pause-on-hover="pauseOnHover"
                                        @autoplay-pause="internalAutoPlaying = false"
                                        @autoplay-resume="internalAutoPlaying = true"
                                        :bullets="false"
                                        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
                                        >
                                        <vueper-slide
                                             v-for="(slide, i) in slides"
                                             :key="i"
                                             :image="slide.image"
                                             :video="slide.video">
                                        </vueper-slide>
                                   </vueper-slides>
                              
                              </div>
                              <div class="boxThumbnails">
                                   <vueper-slides
                                        class="no-shadow thumbnails"
                                        ref="vueperslides2"
                                        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                                        :visible-slides="slides.length"
                                        fixed-height="75px"
                                        :bullets="false"
                                        :touchable="false"
                                        :gap="2.5"
                                        :arrows="false">
                                        <vueper-slide
                                             v-for="(slide, i) in slides"
                                             :key="i"
                                             :image="slide.image"
                                             @click.native="$refs.vueperslides2.goToSlide(i)">
                                        </vueper-slide>
                                   </vueper-slides>
                                   
                              </div>
                         </div>
                         <div class="col-12 col-lg-7">
                              <div class="ContentProduct">
                                   <div class="boxInfoHeader">
                                        <div class="boxTitle">
                                             <h1>Caja de 12 Brownies</h1>
                                             <h2>SKU 21G87H</h2>
                                        </div>
                                        <div class="boxPrice">
                                             <div class="boxPrice-online">
                                                  <h2>S./ 139.50</h2>
                                             </div>
                                             <div class="boxPrice-old">
                                                  <h2>Antes: <span>S/ 199.00</span></h2>
                                             </div>
                                        </div>
                                        <div class="boxDescriptionShort">
                                             <p>Una caja de 12 Brownies de chocolate, cada brownie es de 60 grs. de puro bizcocho, bañado con fudge y frutos secos, </p>
                                        </div>
                                   </div>
                                   <div class="boxInfoBody">
                                        <div class="titleHorario">
                                             <h2>1. Selecciona Fecha y Horario de entrega</h2>
                                        </div>
                                        <div class="boxHorario">
                                             <div class="selectHorario">
                                                  <div class="cbxHorario d-flex justify-content-start align-items-center" v-on:click="timeDelivery">
                                                       <div class="d-flex justify-content-start align-items-center">
                                                            <img src="@/assets/images/horario.png" class="imgIcon" />
                                                            <span v-if="CalendarValue!=null">{{ CalendarValue }}</span>
                                                            <span v-else>Fecha</span>
                                                       </div>
                                                       <div class="lineSeparate"></div>
                                                       <div class="d-flex justify-content-start align-items-center">
                                                            <img src="@/assets/images/hora.png" class="imgIcon"/>
                                                            <span v-if="selectedDeliveryTime!=null">{{ selectedDeliveryTime }}</span>
                                                            <span v-else>Hora</span>
                                                       </div>
                                                       <img src="@/assets/images/arrowCbx2.png" class="arrowIcon">
                                                       <img src="@/assets/images/arrowCbx2-active.png" class="arrowIcon arrowIcon-active">
                                                  </div>
                                             </div>
                                             <div class="tabHorarios">
                                                  <div class="tabs">
                                                       <!-- tab-title -->
                                                       <div class="tabHeader">
                                                            <div class="d-flex justify-content-center align-items-center">
                                                                 <div class="d-flex justify-content-center align-items-center active" v-on:click="viewDeliveryTab(1)" id="tabDelivery-1">
                                                                      <img src="@/assets/images/horario.png" class="" />
                                                                      <span>Fecha</span>
                                                                 </div>
                                                                 <div class="d-flex justify-content-center align-items-center" v-on:click="viewDeliveryTab(2)" id="tabDelivery-2">
                                                                      <img src="@/assets/images/hora.png" class="" />
                                                                      <span>Horarios</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <!-- tab-content -->
                                                       <div class="tab-content d-flex justify-content-center">
                                                            <section id="tab-item-1" class="active">
                                                                 <!-- <client-side> -->
                                                                 <b-calendar v-model="CalendarValue" :min="minDate.toISOString()" :date-disabled-fn="dateDisabled" locale="es-Es"></b-calendar>
                                                                 <!-- </client-side> -->
                                                            </section>
                                                            <section id="tab-item-2" >
                                                                 <div class="contentItem">
                                                                      <div class="form-check" v-for="(item, index) in DeliveryTimes" :key="index" v-bind:class="{'disabled' : item.notEnabled === 'disabled'}">
                                                                           <b-form-radio v-model="selectedDeliveryTime" :value="item.value" :disabled="item.notEnabled">{{ item.value }}</b-form-radio>
                                                                      </div>
                                                                 </div>
                                                            </section>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxCargoDelivery">
                                             <div class="d-flex justify-content-start align-items-center">
                                                  <img src="@/assets/images/iconCardo.png" alt="Cargo" />
                                                  <p>Cargo por delivery S/ 20.00</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="boxComplementos">
                                        <div class="titleHorario">
                                             <h2>2. Agregale un complemento a tu pedido (opcional)</h2>
                                        </div>
                                        <div class="galleryComplemento">
                                             
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
                                                       
                                                       <slide>
                                                            <div class="boxContentComplemento">
                                                                 <div class="custom-chekbox">
                                                                      <b-form-checkbox
                                                                           v-model="selectComplement"
                                                                           value="{ text: 'cola', id: '1' }"
                                                                      >
                                                                      </b-form-checkbox>
                                                                 </div>
                                                                 <div class="boxPicture">
                                                                      <picture>
                                                                           <img src="@/assets/images/comple1.jpg" alt="complemento">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="boxDetail">
                                                                      <h3>Caja de bombones Sublime</h3>
                                                                      <h2>S/ 39.00</h2>
                                                                 </div>
                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxContentComplemento">
                                                                 <div class="custom-chekbox">
                                                                      <b-form-checkbox
                                                                           v-model="selectComplement"
                                                                           value="{ text: 'cola2', id: '2' }"
                                                                      >
                                                                      </b-form-checkbox>
                                                                 </div>
                                                                 <div class="boxPicture">
                                                                      <picture>
                                                                           <img src="@/assets/images/comple2.jpg" alt="complemento">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="boxDetail">
                                                                      <h3>Peluche amigos de Pikachu</h3>
                                                                      <h2>S/ 49.00</h2>
                                                                 </div>
                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxContentComplemento">
                                                                 <div class="custom-chekbox">
                                                                      <b-form-checkbox
                                                                           v-model="selectComplement"
                                                                           value="{ text: 'cola3', id: '3' }"
                                                                      >
                                                                      </b-form-checkbox>
                                                                 </div>
                                                                 <div class="boxPicture">
                                                                      <picture>
                                                                           <img src="@/assets/images/comple3.jpg" alt="complemento">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="boxDetail">
                                                                      <h3>Peluche amigos de Pikachu</h3>
                                                                      <h2>S/ 49.00</h2>
                                                                 </div>
                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxContentComplemento">
                                                                 <div class="custom-chekbox">
                                                                      <b-form-checkbox
                                                                           v-model="selectComplement"
                                                                           value="{ text: 'cola4', id: '4' }"
                                                                      >
                                                                      </b-form-checkbox>
                                                                 </div>
                                                                 <div class="boxPicture">
                                                                      <picture>
                                                                           <img src="@/assets/images/comple4.jpg" alt="complemento">
                                                                      </picture>
                                                                 </div>
                                                                 <div class="boxDetail">
                                                                      <h3>Peluche amigos de Pikachu</h3>
                                                                      <h2>S/ 49.00</h2>
                                                                 </div>
                                                            </div>
                                                       </slide>
                                                  </carousel>
                                                  
                                             </client-only>

                                        </div>
                                   </div>
                                   <div class="boxAddButton">
                                        <div class="titleHorario">
                                             <h2>3. Agregar a tu carrito</h2>
                                        </div>
                                        <div class="d-flex justify-content-center flex-lg-row flex-column align-items-center">
                                             <nuxt-link to="/">
                                                  <div class="d-flex justify-content-center align-items-center">
                                                       <picture>
                                                            <img src="@/assets/images/shop.png" alt="AddCar">
                                                       </picture>
                                                       <p>AGREGAR (S/ 159.00)</p>
                                                  </div>
                                             </nuxt-link>
                                             <button>
                                                  <p>AGREGAR Y SEGUIR COMPRANDO</p>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12">
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
                                             <h4>Caja de 12 Brownies</h4>
                                             <p>¡Hazle el día a alguien especial con el Chocolate sin azucar de la marca Turin O quedatelos para guardar en tu alacena y deleitarte una vez al día.</p>
                                        </section>
                                        <section id="tabConent-2" >
                                             <h4>Caja de 12 Brownies</h4>
                                             <p>Para envíos el <strong>MISMO DÍA</strong>:</p>
                                             <ul>
                                             <li>Es necesario haber colocado el pedido antes de las 2:30 PM (horario de centro) del mismo día</li>
                                             </ul>
                                             <h4><strong>Horarios de Entrega</strong></h4>
                                             <ul>
                                             <li>Lunes a Viernes
                                             <ul>
                                             <li>Comienzan a las 8:00AM y nuestra última entrega es a las 7:00PM (Horario del Centro)</li>
                                             </ul></li>
                                             <li>Sábados y Domingos
                                             <ul>
                                             <li>Comienzan a las 9:00AM y nuestra última ruta sale a la 7:00PM (Horario del Centro). </li>
                                             </ul></li>
                                             </ul>
                                             <h3><strong>Día de las Madres y San Valentín</strong></h3>
                                             <ul>
                                             <li>El horario de entrega es entre 7:00 AM y 7:00 PM</li>
                                             <li>Por la carga de volumen no hay entregas con horario especial. </li>
                                             </ul>
                                             <h3><strong>Reprogramaciones</strong></h3>
                                             <ul>
                                             <li>Sabemos lo importante que es esta fecha, es por esto que nos comprometemos a entregar en el díaa y horario seleccionado.</li>
                                             <li>Si no se encuentra el destinatario, intentaremos comunicarnos para resolver la situación.</li>
                                             <li>En caso de no tener respuesta, entregaremos tu pedido con alguien cercano: vecino, compañero de trabajo o recepción.</li>
                                             <li>Si nadie puede recibir el arreglo, se te notificará para reprogramar el envío.</li>
                                             </ul>
                                             <p>Recuerda: todas las notificaciones de tu pedido llegarán a tu correo electrónico registrado.</p>
                                        </section>
                                        <section id="tabConent-3" >
                                             <h4><strong>Políticas de Sustitución de Flores</strong></h4>
                                             <p>En EnviaFlores nos esforzamos por elaborar los arreglos lo más parecido posible a las fotografías y descripciones del producto, sin embargo, como cada arreglo es único y elaborado a mano, puede llegar a tener ligeras variaciones. En algunos casos, los floristas pueden hacer ligeros cambios siempre y cuando el arreglo final sea de igual o mayor valor. Las rosas o flores primarias del arreglo nunca serán sustituidas sin tu autorización.</p>
                                             <p>La variedad, color, tamaño y forma de la flor varía de acuerdo con la localidad, así como el jarrón y color del listón.</p>
                                             <p>Si por alguna razón no podemos cumplir con algún producto adicional como peluches, globos o chocolates, nos comunicaremos contigo de forma inmediata para sugerirte algún producto o bien para realizar el reembolso por el monto que corresponda a dicho producto.</p>
                                             <h4><strong>Políticas de Sustitución de Globos</strong></h4>
                                             <p>Los Globos son productos perecederos; el clima y el ambiente exterior influyen en su durabilidad por lo cual se recomienda mantenerlos en un lugar seco, fresco y techado. Estos productos son susceptibles a romperse o desinflarse dependiendo del uso y cuidad que se les de. Para evitar que se rompan, se recomienda manejarlos con cuidado, no apretarlos, no acercarlos a objetos punzantes o cortantes, no exponerlos al sol directo, no colocarlos en interiores de autos por mucho tiempo o someterlos a cambios de clima bruscos.</p>
                                             <p>Los globos inflados con helio expuestos a altas temperaturas y/o cambios climáticos sufren variaciones debido al comportamiento de las moléculas de helio; de calor a frío el globo puede lucir desinflado y de frío a calor el globo tienda a inflarse. </p>
                                             <p>Los modelos de globos varían constantemente, por lo cuál únicamente podemos garantizar que el globo será entregado tal como aparece en la descripción del producto, es decir será un globo con la ocasión señalada y medida apropiada. El diseño, colores y frases varían según disponibilidad. En caso de no contar con algún globo, se sustituirá con otros(s) de valor equivalente. </p>
                                             <p>Los globos tienen una duración aproximada de 48 horas. </p>
                                             <h4><strong>Política de Sustitución de Peluches</strong></h4>
                                             <p>El modelo del peluche puede variar de acuerdo a la disponibilidad. Se aplicará una devolución por el monto pagado por el peluche si se llegara a entregar en malas condiciones como puede ser roto o sucio.</p>
                                             <p>En EnviaFlores nos comprometemos a que tu arreglo luzca hermoso y nos aseguramos de que sea elaborado con productos de la más alta calidad.</p>
                                        </section>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12">
                              <div class="boxProductosRelaciones">
                                   <div class="boxTitle">
                                        <h2>También te pueden interesar</h2>
                                   </div>
                                   <div class="boxCarrusel">
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
                                                       
                                                       <slide>
                                                            <div class="boxRelacioinadosCarrusel">
                                                                 <nuxt-link to="/">
                                                                      <div class="boxPicture">
                                                                           <picture>
                                                                                <img src="@/assets/images/producto5.jpg" alt="complemento">
                                                                           </picture>
                                                                      </div>
                                                                      <div class="boxDetail">
                                                                           <h4>POSTRES</h4>
                                                                           <h3>Caja de bombones Sublime</h3>
                                                                           <h2>S/ 39.00</h2>
                                                                           <h5>Antes <span>S./29.00</span></h5>
                                                                      </div>
                                                                 </nuxt-link>
                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxRelacioinadosCarrusel">
                                                                 
                                                                 <nuxt-link to="/">
                                                                      <div class="boxPicture">
                                                                           <picture>
                                                                                <img src="@/assets/images/producto2.jpg" alt="complemento">
                                                                           </picture>
                                                                      </div>
                                                                      <div class="boxDetail">
                                                                           <h4>POSTRES</h4>
                                                                           <h3>Caja de bombones Sublime</h3>
                                                                           <h2>S/ 39.00</h2>
                                                                           <h5>Antes <span>S./29.00</span></h5>
                                                                      </div>
                                                                 </nuxt-link>

                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxRelacioinadosCarrusel">
                                                                 
                                                                 <nuxt-link to="/">
                                                                      <div class="boxPicture">
                                                                           <picture>
                                                                                <img src="@/assets/images/producto4.jpg" alt="complemento">
                                                                           </picture>
                                                                      </div>
                                                                      <div class="boxDetail">
                                                                           <h4>POSTRES</h4>
                                                                           <h3>Caja de bombones Sublime</h3>
                                                                           <h2>S/ 39.00</h2>
                                                                           <h5>Antes <span>S./29.00</span></h5>
                                                                      </div>
                                                                 </nuxt-link>

                                                            </div>
                                                       </slide>
                                                       <slide>
                                                            <div class="boxRelacioinadosCarrusel">
                                                                 
                                                                 <nuxt-link to="/">
                                                                      <div class="boxPicture">
                                                                           <picture>
                                                                                <img src="@/assets/images/producto8.jpg" alt="complemento">
                                                                           </picture>
                                                                      </div>
                                                                      <div class="boxDetail">
                                                                           <h4>POSTRES</h4>
                                                                           <h3>Caja de bombones Sublime</h3>
                                                                           <h2>S/ 39.00</h2>
                                                                           <h5>Antes <span>S./29.00</span></h5>
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

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import Banner from '@/components/Banner/Productos'

export default {
     components: {
          VueperSlides, 
          VueperSlide,
          Banner
     },
     data() {
          const now = new Date()
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          let todayPicker = new Date(today)
          // console.log(todayPicker.getMonth())
          todayPicker.setMonth(todayPicker.getMonth())
          return {
               price: null,
               pauseOnHover: true,
               autoPlaying: true,
               internalAutoPlaying: true,
               selectedDeliveryTime: null,
               CalendarValue: null,
               CalendarOnContext: null,
               selectComplement: [],
               minDate: today,
               DeliveryTimes: [
                    {
                         id: '1',
                         value: '09:00 am - 12:00 pm',
                         notEnabled: 'disabled'
                    },
                    {
                         id: '2',
                         value: '13:00 am - 15:00 pm' 
                    },
                    {
                         id: '3',
                         value: '18:00 am - 21:00 pm'
                         
                    }
               ],
               tl: null,
               slides: [
                    { image: require('@/assets/images/gal1.jpg') },
                    { image: require('@/assets/images/gal2.jpg') },
                    { image: require('@/assets/images/gal3.jpg') },
                    // {
                    //      title: 'Aurora Borealis',
                    //      content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
                    //      image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
                    //      video: {
                    //           url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=1&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                    //           props: {
                    //           allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture'
                    //           }
                    //      }
                    // },
               ]
          }
     },
     mounted() {
          
          // console.log(this.DeliveryTimes[0].value)
          // console.log(this.min)
               // this.slides.push({image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg'})
     },
     // computed: {
     //      navigationNext: function() { 
     //           return `<div class="arrowNext"></div>` 
     //      },
     //      navigationPrev: function() { 
     //           return `<div class="arrowPrev"></div>` 
     //      },
     // },
     methods : {
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
          viewDeliveryTab(id){
               const tabDelivery = $(`#tabDelivery-${id}`) 
               // console.log(`#tabDelivery-${id}`)
               const tabItem = $(`#tab-item-${id}`)
               const allHeader = $(".tabHeader > div div")
               const allTabContent = $(".tab-content section")
               allHeader.removeClass('active')
               allTabContent.removeClass('active')
               setTimeout(function(){
                    tabDelivery.addClass('active')
                    tabItem.addClass('active')
               },100)
               
          },
          setActiveSection(cbxHorario){
               cbxHorario.removeClass('active')
          },
          timeDelivery(event){
               const cbxHorario = $('.cbxHorario')
               const tabHorarios = $('.tabHorarios')
               let tlDeliveryOpen = gsap.timeline()
               let tlDeliveryClose = gsap.timeline({ onComplete: this.setActiveSection,  onCompleteParams: [cbxHorario] })
               if (!cbxHorario.hasClass( "active")){
                    cbxHorario.addClass('active')
                    tlDeliveryOpen
                         .set(tabHorarios,{css : {height: 0}})
                         .to(tabHorarios, {duration: .5, css: {height: 'auto'}})

               }else{
                    tlDeliveryClose
                         .to(tabHorarios, {duration: .5, css: {height: 0}})
               }
          },
          dateDisabled(ymd, date) {
               // Disable weekends (Sunday = `0`, Saturday = `6`) and
               // disable days that fall on the 13th of the month
               const weekday = date.getDay()
               const day = date.getDate()
               // Return `true` if the date should be disabled
               // return weekday === 0 || weekday === 6 || day === 13
               return weekday === 0
          },
          reverseFunction: function(){
               $('.cardHorario ul').removeClass('active')
          },
          viewHorarios: function(event) {
               const boxUl = $(event.target.parentElement).siblings()
               if (!boxUl.hasClass('active')){
                    $('.cardHorario ul').removeClass('active')
                    boxUl.addClass('active')
                    this.tl = gsap.timeline({
                              onReverseComplete: this.reverseFunction,
                              paused: false
                    })
                    this.tl
                         .fromTo(
                              boxUl.find('li'),{
                                   opacity: 0,
                                   y: -20,
                              },
                              {
                                   opacity: 1,
                                   stagger: .25,
                                   y: 0,
                                   duration: .25,
                                   ease: 'power1.out',
                              }
                         )
               }else{
                    this.tl.reverse()
               }
          }
     }, 
}
</script>
<style lang="sass">
     $anchoContent : 100%
     $anchoContent2 : 100%
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
               h2
                    @include font-libre(1rem,.95rem,.85rem,.75rem,$Montserrat,600,$brown)
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
                              @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,600,$grayDark14)
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
               
               .tabHorarios
                    height: 0
                    overflow: hidden
                    // &.active
                    //      display: block
                    .b-calendar-header
                         display: none !important
                    .tabs
                         border: 1px solid $orange 
                         border-top: 0
                         border-bottom-left-radius: 10px
                         border-bottom-right-radius: 10px
                         width: $anchoContent2
                         .tab-content
                              padding: .75rem 0 .85rem
                              min-height: 150px
                              @media screen and (min-width: 992px)
                                   padding: 1.25rem 0 2.5rem
                              .form-check
                                   padding: 0
                                   .custom-control
                                        padding-left: 0
                                   &.disabled
                                        label,
                                        label:hover
                                             background: rgba($grayDark3,.1 )
                                   label 
                                        display: inline-block
                                        cursor: pointer
                                        position: relative
                                        border-radius: 5px
                                        transition: all .3s ease
                                        @include font-libre(0.875rem,0.8rem,0.785rem,.75rem,$Montserrat,600,$blue)
                                        padding: 9px 15px 5px 40px
                                        &:hover 
                                             background: rgba($pinkLight2, .1)
                                        &:before 
                                             content: ""
                                             display: inline-block
                                             width: 17px
                                             height: 17px
                                             position: absolute
                                             left: 15px
                                             top: 9px
                                             border-radius: 50%
                                             background: none
                                             border: 3px solid $grayDark13
                                   input[type="radio"]
                                        display: none
                                        &:checked + label:before 
                                             border: 3px solid $pinkLight2
                                        &:checked + label 
                                             // padding: 5px 15px
                                             border-radius: 2px
                              > section
                                   display: none
                                   width: 100%
                                   border: 0px solid red
                                   margin: auto
                                   text-align: center
                                   @media screen and (minwidth: 992px)
                                        height: 70%
                                   &.active
                                        display: block
                         .tabHeader
                              > div
                                   padding: .85rem 0

                                   div
                                        width: 35%
                                        padding: .5rem 0
                                        border: 1px solid $grayDark4
                                        background: $blancoHuno
                                        cursor: pointer
                                        
                                        img 
                                             width: 22px
                                             margin-right: .5rem
                                        span
                                             @include font-libre(0.875rem,0.8rem,0.785rem,.75rem,$Montserrat,600,$blue)
                                        &:first-child
                                             border-top-left-radius: 20px
                                             border-bottom-left-radius: 20px
                                             border-right: 0
                                        &:last-child
                                             border-top-right-radius: 20px
                                             border-bottom-right-radius: 20px
                                        &.active
                                             background: $grayDark12

               .boxHorario
                    width: $anchoContent
                    padding: .75rem 0 0
                    // @media screen and (min-width: 992px)
                    //      padding: 0
                    .selectHorario
                         .cbxHorario
                              border: 1px solid $grayDark4
                              background: $grayLight
                              padding: 1rem .5rem 1rem 2.5rem
                              width: $anchoContent2
                              border-radius: 40px
                              box-sizing: border-box
                              cursor: pointer
                              position: relative
                              &.active
                                   border-radius: 40px 40px 0px 0
                                   border: 1px solid $orange
                                   border-bottom: 1px solid $grayDark4
                                   .arrowIcon
                                        opacity: 0
                                   .arrowIcon-active
                                        opacity: 1
                                   span
                                        color: $blue
                                   .lineSeparate
                                        background: $blue
                              .lineSeparate
                                   width: .75rem
                                   background: $grayDark11
                                   height: 2px
                                   margin: 0 1rem 
                              img
                                   &.arrowIcon-active
                                        opacity: 0
                                   &.arrowIcon
                                        position: absolute
                                        top: 50%
                                        transform: translateY(-50%)
                                        right: 1rem
                                   &.imgIcon
                                        width: 22px
                                        margin-right: .5rem
                                   
                              span
                                   @include font-libre(0.875rem,0.8rem,0.785rem,.75rem,$Montserrat,600,black)
               
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
                         @include font-libre(1.025rem,1,.935,.8rem,$Montserrat,500,$grayDark10)
                         line-height: 1.45em

               .boxTitle
                    h1
                         @include font-libre(2.25rem,1.975rem,1.75rem,1rem,$Playfair,400,$blackLight) 
                    h2
                         @include font-libre(1.05rem,1,.935,.8rem,$Montserrat,600,$blue)
                         line-height: 1.75em
               .boxPrice
                    .boxPrice-online
                         h2
                              @include font-libre(2.25rem,1.975rem,1.75rem,1rem,$Playfair,400,$blackLight)  
                    .boxPrice-old
                         h2
                              @include font-libre(1rem,.9,.935,.8rem,$Montserrat,500,$grayLight3)
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
               .thumbnails
                    max-width: 250px
                    // height: 100px !important
                    .vueperslides__track-inner
                         flex-direction: row
                    .vueperslide
                         box-sizing: border-box
                         border: 0px solid #fff
                         transition: 0.3s ease-in-out
                         opacity: 0.7
                         cursor: pointer
                         // width: 30% !important
                         // height: 75px !important
                         margin-bottom: .5rem
                         border-radius: 5px
                         overflow: hidden
                    .vueperslide--active
                         box-shadow: 0 0 6px rgba($pink, 0.3)
                         opacity: 1
                         border-color: $pink

          .boxThumbnails
               .vueperslides--fixed-height
                         &.vueperslides--bullets-outside
                              margin-bottom: 1.5rem
          .galleryProducts
               width: 100%
               
               .vueperslides__inner
                    height: 400px
                    @media screen and (min-width: 992px)
                         height: 450px
                    @media screen and (min-width: 1200px)
                         height: 500px
                    @media screen and (min-width: 1400px)
                         height: 500px
                    .vueperslides__parallax-wrapper
                         height: 100%
               

</style>