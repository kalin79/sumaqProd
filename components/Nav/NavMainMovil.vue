<template>
     <div class="boxMovilMainNav">
          <div class="container-fluid-nav" id="nav-1" >
               <ul class="txtUppercase">
                    <li>
                         <nuxt-link to="/">
                              <span>PRINCIPAL</span>
                         </nuxt-link>
                    </li>
                    <li class="daySpecial">
                         <nuxt-link to="/">
                                   <div class="d-flex align-items-center justify-content-start">
                                        <picture class="arrow">
                                             <img src="@/assets/images/corazon2.png" alt="DÍA DE LA MADRE" class="iconcorazon">
                                        </picture>
                                        <span>DÍA DE LA MADRE</span>
                                   </div>
                         </nuxt-link> 
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <nuxt-link to="/">
                                   <span>TIENDA</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(1,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <nuxt-link to="/">
                              <span>SUSCRIPCIÓN FLORAL</span>
                         </nuxt-link>
                    </li>
                    <li>
                         <nuxt-link to="/">
                              <span>PLAN NOVIAS</span>
                         </nuxt-link>
                    </li>
                    <li>
                         <nuxt-link to="/">
                              <span>PLAN IT</span>
                         </nuxt-link>
                    </li>
               </ul>
               <div class="boxTypeMoney">
                    <div class="d-flex flex-row align-items-center justify-content-between">
                         <div><span>TIPO DE MONEDA</span></div>
                         <div class="boxMoney">
                              <div class="d-flex flex-row align-items-center justify-content-start">
                                   <p>Soles</p>
                                   <div class="switch">
                                        <input id="switch" class="switch__input" name="switch" type="checkbox">
                                        <label class="switch__label" for="switch"></label>
                                   </div>
                                   <p>Dolares</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="row">
                    <div class="col-12 col-lg-4">
                         <div class="boxLogo">
                              <nuxt-link to="/">
                                   <picture>
                                        <img src="@/assets/images/logomovil.svg" alt="Sumaq">
                                   </picture>
                              </nuxt-link>
                         </div>
                    </div>
                    <div class="col-12 col-lg-4">
                         <div class="boxContactSumaq">
                              <p>Llámanos: (51) 985757450</p>
                              <p>Horario de atención: 9:00 a.m.- 6:00 p.m.</p>
                         </div>
                    </div>
                    <div class="col-12 col-lg-4">
                         <div class="boxSocial ">
                              <div class="d-flex justify-content-center justify-content-lg-end align-items-center">
                                   <a href="https://www.facebook.com/FloresSUMAQ.pe" target="_blank">
                                        <client-only>
                                             <b-icon-facebook class="icon-facebook"></b-icon-facebook>
                                        </client-only>
                                   </a>
                                   <a href="https://www.instagram.com/sumaq.pe/" target="_blank">
                                        <div class="boxInstagram d-flex justify-content-center flex-column align-items-center">
                                             <client-only>
                                                  <b-icon-instagram class="icon-instagram"></b-icon-instagram>
                                             </client-only>
                                        </div>
                                   </a>
                                   <a href="https://wa.link/i7kwid" target="_blank">
                                        <div class="boxWhatsAppFlex d-flex justify-content-center flex-column align-items-center">
                                             <icon-whatsapp />
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               
               
               
          </div>
          <div class="container-fluid-nav" id="nav-2">
               <ul class="txtUppercase">
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>PLANTAs</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>Flores</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>Ocasiones</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>Regalos</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>Eventos de flores</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-start">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,0)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2Prev.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/" >
                                   <span>Postres</span>
                              </nuxt-link>
                              <a href="javascript:void(0)" v-on:click="gotoMenu(2,1)">
                                   <picture class="arrow">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                         </div>
                    </li>
               </ul>
          </div>
          <div class="container-fluid-nav" id="nav-3">
               <ul class="txtUppercase">
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>Anturios</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>kokedamas</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>Orquideas</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>PLantas de Exterior</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>PLantas de Interior</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>Suculentas</span>
                              </nuxt-link>
                         </div>
                    </li>
                    <li>
                         <div class="d-flex align-items-center justify-content-between">
                              <a href="javascript:void(0)" v-on:click="gotoMenu(3,1)">
                                   <picture class="arrow2 arrow3">
                                        <img src="@/assets/images/arrow2.png" alt="">
                                   </picture>
                              </a>
                              <nuxt-link to="/">
                                   <span>Ver todas las Plantas</span>
                              </nuxt-link>
                         </div>
                    </li>
                    
               </ul>
          </div>
     </div>
</template>
<script>
import IconWhatsapp from '@/components/Svg/IconWhatsApp'
/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap, Power4} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import EasePack from 'gsap/dist/EasePack'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(EasePack)
gsap.core.globals("ScrollTrigger", ScrollTrigger)
export default {
     components: {
          IconWhatsapp
     },
     mounted () {
     },
     methods : {
          
          gotoMenu(id,direction){
               const nav1 = $("#nav-1")
               const nav2 = $("#nav-2")
               const nav3 = $("#nav-3")
               let tlNav = gsap.timeline()
               if ( id === 1 ) {
                    if (direction === 0){
                         tlNav
                              .set(nav2, {x: "100%"})
                              .set(nav3, {x: "100%"})
                              .to(nav1,{ duration: 1, x: "-100%", ease:Power4.easeInOut})
                              .to(nav2,{ duration: 1, x: "0%", ease:Power4.easeInOut},0)
                    }
               }
               if ( id === 2 ) {
                    if (direction === 1){
                         tlNav
                              .set(nav3, {x: "100%"})
                              .to(nav2,{ duration: 1, x: "-100%", ease:Power4.easeInOut})
                              .to(nav3,{ duration: 1, x: "0%", ease:Power4.easeInOut},0)
                    }else{
                         tlNav
                              .set(nav1, {x: "-100%"})
                              .to(nav2,{ duration: 1, x: "100%", ease:Power4.easeInOut})
                              .to(nav1,{ duration: 1, x: "0%", ease:Power4.easeInOut},0)
                    }
               }
               // console.log(id)
               if ( id === 3 ) {
                    if (direction === 1){
                         tlNav
                              .set(nav2, {x: "-100%"})
                              .to(nav3,{ duration: 1, x: "100%", ease:Power4.easeInOut})
                              .to(nav2,{ duration: 1, x: "0%", ease:Power4.easeInOut},0)
                    }
               }

          }
     }
}
</script>
<style lang="sass" >
     #nav-2
          ul
               li
                    > div
                         a
                              width: 10%
                              text-align: center
                              @media screen and (min-width: 992px)
                                   width: 3%
                              &:nth-child(2)
                                   width: 80%
                                   text-align: left
                                   @media screen and (min-width: 992px)
                                        width: 94%
     .boxMovilMainNav
          position: fixed
          top: -100vh
          right: 0
          height: calc(100vh - 4.5rem)
          width: 100%
          background: white
          overflow: hidden
          transition: .5s ease all
          z-index: 1
          display: block
          @media screen and (min-width: 1200px)
               display: none
          &.active
               top: 4.5rem
          .boxContactSumaq
               padding-top: 1rem
               p
                   @include font-libre(2.25rem,2.25rem,.85rem,.85rem,$Montserrat,500,$grayDark14) 
                   text-align: center
          .boxLogo
               margin: auto 
               text-align: center
               @media screen and (min-width: 992px)
                    margin: 0 
                    text-align: left
               picture
                    display: block
                    img
                         width: 5rem
          span
               @include font-libre(2.25rem,2.25rem,1rem,1rem,$Montserrat,500,$brown)
          .boxTypeMoney
               padding: 1rem 15px
               .boxMoney
                    position: relative 
                    p
                         @include font-libre(2.25rem,2.25rem,1rem,1rem,$Montserrat,500,$brown)
                         margin: 0
                         
               .switch
                    position: relative
                    margin: 0 .35rem
                    
                    &__input
                         position: absolute
                         cursor: pointer
                         top: 0
                         right: 0
                         left: 0
                         bottom: 0
                         width: 100%
                         height: 100%
                         margin: 0
                         opacity: 0
                         z-index: 1
                         &:checked + .switch__label
                              background-color: $greenLight3
                              &::before
                                   left: calc(100% - 22px)
                                   border-color: white
                                   background-color: white
                                   content: "" 
                    &__label
                         display: block
                         position: relative
                         width: 50px
                         height: 23px
                         background-color: $brownLight2
                         border-radius: 25px
                         transition: 0.4s
                         margin-bottom: 0.15rem
                         &::before
                              display: flex
                              align-items: center
                              justify-content: center
                              position: absolute
                              top: 1px
                              right: auto
                              left: 1px
                              bottom: 0
                              width: 21px
                              height: 21px
                              border-radius: 100%
                              border: 2px white solid
                              background-color: white
                              color: white
                              transition: 0.4s
                              content: ""
          .container-fluid-nav
               padding: 0 0 0 0
               position: absolute
               top: 0
               left: 0
               width: 100%
               height: 100%
               background: white
               
               &:last-child
                    z-index: 1
               &:nth-child(2)
                    z-index: 2
               &:nth-child(1)
                    z-index: 3
          ul
               margin: 0
               padding: 0
               list-style: none
               &.txtUppercase
                    li
                         span
                              text-transform: uppercase
               li
                    border-bottom: 1px solid $grayDark8
                    padding: 0 15px
                    &:first-child
                         a
                              padding-top: 1rem 
                    picture
                         &.arrow,
                         &.arrow2
                              img
                                   width: 14px
                         &.arrow2
                              img
                                   transform: scaleX(-1)
                         &.arrow3
                              img
                                   transform: scaleX(-1)
                    &.daySpecial
                         span
                              padding-top: .5rem
                              color: $pinkLight2
                         picture
                              margin-right: .5rem
                              img
                                   width: 14px
                                   &.iconcorazon
                                        width: 100%

                                   
                    &:first-child
                         border-top: 1px solid $grayDark8
                    a
                         display: block
                         padding: .65rem 0
                         text-decoration: none
                         @media screen and (min-width: 992px)
                              padding: .45rem 0
          .boxSocial
               padding: 1rem 0 0 0
               @media screen and (min-width: 992px)
                    padding: 1rem 1rem 0 0rem
               .boxWhatsAppFlex
                    background: $brown
                    width: 2.5rem
                    height: 2.5rem
                    margin: 0rem
                    border-radius: 50%
                    .boxWhatsApp
                         // font-size: 2.3rem
                         color: white
                         width: 1.65rem
                         height: 1.65rem 
               .boxInstagram
                    background: $brown
                    width: 2.5rem
                    height: 2.5rem
                    margin: 0 .95rem
                    border-radius: 50%
                    .icon-instagram
                         font-size: 1.5rem
                         color: white
               .icon-facebook
                    width: 2.26rem
                    height: 2.26rem 
                    color: white
                    fill: $brown

</style>