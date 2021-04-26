<template>
     <div class="boxProductDetail">
          <banner />
          <div class="container-fluid container-fluid-xxl">
               <div class="contentDetail">
                    <div class="row">
                         <div class="col-5">
                              <div class="">
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
                         </div>
                         <div class="col-7">
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
                                                  <div class="cbxHorario active d-flex justify-content-start align-items-center">
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
                                                                 <div class="d-flex justify-content-center align-items-center active ">
                                                                      <img src="@/assets/images/horario.png" class="" />
                                                                      <span>Fecha</span>
                                                                 </div>
                                                                 <div class="d-flex justify-content-center align-items-center ">
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
     methods : {
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
     $anchoContent : 85%
     $anchoContent2 : 80%
     .boxProductDetail
          .contentDetail
               padding: 3rem 0rem 0
          .ContentProduct
               padding: 0 0 0 1.5rem
          .boxInfoBody
               .tabHorarios
                    .b-calendar-header
                         display: none !important
                    .tabs
                         border: 1px solid $orange 
                         border-top: 0
                         border-bottom-left-radius: 10px
                         border-bottom-right-radius: 10px
                         width: $anchoContent2
                         .tab-content
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
                                   width: 70%
                                   
                                   border: 0px solid red
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
                    .selectHorario
                         .cbxHorario
                              border: 1px solid $grayDark4
                              background: $grayLight
                              padding: 1rem .5rem 1rem 2.5rem
                              width: 80%
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
               .titleHorario
                    h2
                         @include font-libre(1rem,.95rem,.85rem,.75rem,$Montserrat,600,$brown)
                         line-height: 3em
          .boxInfoHeader
               .boxDescriptionShort
                    width: $anchoContent
                    border-bottom: 1px solid rgba(black,.15)
                    padding-bottom: 1rem
                    p
                         margin: 0
                         @include font-libre(1.125rem,1,.935,.8rem,$Montserrat,500,$grayDark10)
                         line-height: 1.45em

               .boxTitle
                    h1
                         @include font-libre(2.375rem,1.975rem,1.75rem,1rem,$Playfair,400,$blackLight) 
                    h2
                         @include font-libre(1.125rem,1,.935,.8rem,$Montserrat,600,$blue)
                         line-height: 1.75em
               .boxPrice
                    .boxPrice-online
                         h2
                              @include font-libre(2.375rem,1.975rem,1.75rem,1rem,$Playfair,400,$blackLight)  
                    .boxPrice-old
                         h2
                              @include font-libre(1.125rem,1,.935,.8rem,$Montserrat,500,$grayLight3)
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
          .galleryProducts
               width: 100%
               .vueperslides__inner
                    height: 500px
                    @media screen and (min-width: 992px)
                         height: 450px
                    @media screen and (min-width: 1200px)
                         height: 500px
                    @media screen and (min-width: 1400px)
                         height: 500px
                    .vueperslides__parallax-wrapper
                         height: 100%
               

</style>