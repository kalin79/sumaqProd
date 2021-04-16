<template>
     <div class="boxProductDetail">
          <div class="container">
               <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item">
                              <a href="#">Flores</a> 
                              <client-only>
                                   <b-icon-chevron-right></b-icon-chevron-right>
                              </client-only>
                         </li>
                         <li class="breadcrumb-item">
                              <a href="#">Alcatraz</a>
                              <client-only>
                                   <b-icon-chevron-right></b-icon-chevron-right>
                              </client-only>
                         </li>
                         <li class="breadcrumb-item active" aria-current="page">8 Rosas y Mini rosas en Jarrón</li>
                    </ol>
               </nav>
               <div class="row">
                    <div class="col-6">
                         <div class="d-flex justify-content-start">
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
                         </div>
                    </div>
                    <div class="col-6">
                         <div class="boxInfoProduct d-flex justify-content-between align-items-start">
                              <div class="boxTitle">
                                   <h1>Ramo de rosas rojas y mini rosas rosas</h1>
                              </div>
                              <div class="boxPrice">
                                   <div class="boxPrice-old">
                                        <h2>S./ 19.50</h2>
                                   </div>
                                   <div class="boxPrice-online">
                                        <h2>S./ 17.50</h2>
                                   </div>
                              </div>
                         </div>
                         <div class="boxDetailInfo">
                              <div class="titleHorario">
                                   <h2>
                                   1. Seleccione un horario
                                   </h2>
                              </div>
                              <div class="titleSend">
                                   <p>
                                   * Se hará un cargo de envío por $4.00 USD
                                   </p>
                              </div>
                              <div class="listHorarios">
                                   <div class="cardBoxList d-flex justify-content-between align-items-stretch">
                                        <div class="cardHorario">
                                             <a href="javascript:void(0)" @click="viewHorarios" class="boxHorario card-disabled">
                                                  <h3>Hoy</h3>
                                                  <h4>23 febrero</h4>
                                             </a>
                                             <ul>
                                                  <li>
                                                       <a href="javascript:void(0)" class="horario-disabled"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div class="cardHorario">
                                             <a href="javascript:void(0)"  @click="viewHorarios" class="boxHorario">
                                                  <h3>Mañana</h3>
                                                  <h4>23 febrero</h4>
                                             </a>
                                             <ul>
                                                  <li>
                                                       <a href="javascript:void(0)" class="horario-disabled"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="javascript:void(0)"> 
                                                       8:00AM - 11:00AM
                                                       </a>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div class="cardHorario">
                                             <a href="javascript:void(0)" class="boxHorario">
                                                  <div class="d-flex align-items-center justify-content-center">
                                                       <h3>
                                                            <client-only>
                                                                 <b-icon-calendar2-date></b-icon-calendar2-date>
                                                            </client-only>
                                                            Más fechas
                                                       </h3>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div class="titleHorario">
                                   <h2>
                                   2. Complementar pedido (opcional)
                                   </h2>
                              </div>
                              <div class="titleSend">
                                   <p>
                                   * Elija sus complementos
                                   </p>
                              </div>
                              <div class="boxListComplement">
                                   <div class="d-flex">
                                        <div class="itemComplent">
                                             <div class="boxCheckComplent">
                                                  <input id="c1" type="checkbox"><label for="c1"></label>
                                                  <!-- <input id="c2" type="checkbox"><label for="c2"></label>
                                                  <input id="c3" type="checkbox"><label for="c3"></label> -->
                                             </div>
                                             <picture>
                                                  <img src="" alt="">
                                             </picture>
                                             <div class="detailComplement">
                                                  <div class="complementTitle">6 mascarillas c</div>
                                                  <div class="complementPrice">22.00 USD</div>
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

export default {
     components: {
          VueperSlides, 
          VueperSlide
     },
     data() {
          return {
               price: null,
               pauseOnHover: true,
               autoPlaying: true,
               internalAutoPlaying: true,
               tl: null,
               slides: [
                    { image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_superior1.jpg' },
                    { image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_zoom1.jpg' },
                    { image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg' },
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
               // this.slides.push({image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg'})
     },
     methods : {
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
     %caja-horario-disabled
          border: 1px solid rgba($grayDark, 0.35)
          cursor: default
          background: transparent
          h3,
          h4
               color: $grayDark
     .boxProductDetail
          padding: 2rem 0 2.5rem
          .boxCheckComplent
               label
                    display: grid
                    place-items: center
                    width: 50px
                    height: 50px
                    background-color: #fff
                    overflow: hidden
                    border: 1px solid red
               input[type="checkbox"]
                    position: absolute
                    width: 1px
                    clip: rect(0 0 0 0)
                    overflow: hidden
                    white-space: nowrap
                    &:checked
                         + label
                              &:before
                                   content: '✔'
                    &:focus
                         + label
                              outline: 2px solid #406f99
          .boxDetailInfo
               .titleHorario
                    padding: 1.5rem 0 .5rem 
                    h2
                         @include font-subtitle($pink)
                         font-weight: 600
               .titleSend
                    p
                         @include font-description($grayDark,left)
          .listHorarios
               padding: 1rem 
               .cardBoxList
                    margin-left: -1rem 
                    margin-right: -1rem
               .cardHorario
                    flex: 0 0 32% 
                    max-width: 32%
                    .boxHorario
                         display: block
                         border: 1px solid rgba($pink, 0.35)
                         border-radius: 10px
                         overflow: hidden
                         padding: .45rem 0rem .65rem
                         text-decoration: none
                         transition: .5s ease background 
                         height: 70px
                         > div
                              height: 100%
                         &:hover
                              background: $pink
                              h3,
                              h4
                                   color: white
                         &.card-disabled
                              @extend %caja-horario-disabled
                              &:hover
                                   @extend %caja-horario-disabled

                         h3
                              @include font-libre(1rem,1rem,1.5rem,.75rem,$Oswald,500,$pink) 
                              text-align: center
                              line-height: 1.75em
                         h4
                              @include font-libre(1rem,1rem,1.5rem,.75rem,$Oswald,300,$pink) 
                              text-align: center
                              line-height: 1.3em

                    ul
                         display: none
                         list-style: none
                         margin: 0
                         padding: 0
                         &.active
                              display: block
                         li
                              opacity: 0
                              a
                                   border: 1px solid rgba($pink, 0.35)
                                   border-radius: 5px
                                   @include font-libre(.85rem,.85rem,.85rem,.70rem,$OpenSans,400,$pink) 
                                   text-align: center
                                   margin: .25rem 0
                                   padding: .35rem 0
                                   display: block
                                   text-decoration: none
                                   &.horario-disabled
                                        border: 1px solid rgba($gray, 0.35)
                                        color: $gray
                                        cursor: default

          .boxInfoProduct
               border-bottom: 1px solid rgba($grayDark,.25 )
               padding-bottom: 1.25rem
               .boxTitle
                    h1
                         @include font-title($grayDark)
                         text-align: left 
                         font-weight: 500
               .boxPrice
                    width: 30%
               .boxPrice-online
                    text-align: right
                    h2
                         @include font-libre(1.5rem,1.5rem,1.5rem,1rem,$Oswald,500,$grayDark) 
               .boxPrice-old
                    text-align: right
                    h2
                         @include font-libre(1.05rem,1.5rem,1.5rem,.85rem,$Oswald,500,$pink)
                         text-align: right
                         position: relative
                         display: inline-block
                         line-height: 2em
                         &:before
                              content: ''
                              width: 100%
                              height: 1px
                              background: $pink
                              position: absolute
                              top: 50%
                              left: 0
                              transform: translateY(-50%)
          .boxThumbnails
               width: 20%
               .thumbnails
                    margin: auto
                    max-width: 300px
                    height: 100% !important
                    .vueperslides__track-inner
                         flex-direction: column
                    .vueperslide
                         box-sizing: border-box
                         border: 1px solid #fff
                         transition: 0.3s ease-in-out
                         opacity: 0.7
                         cursor: pointer
                         width: 89% !important
                         height: 75px !important
                         margin-bottom: .5rem
                    .vueperslide--active
                         box-shadow: 0 0 6px rgba($pink, 0.3)
                         opacity: 1
                         border-color: $pink
          .galleryProducts
               width: 80%
               .vueperslides__inner
                    height: 500px
                    .vueperslides__parallax-wrapper
                         height: 100%
               

</style>