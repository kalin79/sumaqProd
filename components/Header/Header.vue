<template>
     <div>
          <div class="HeaderMain">
               <div class="container-fluid container-fluid-xxl ">
                    <div class="row">
                         <div class="col-2 col-xl-2">
                              <nuxt-link to="/" class="logoHeader">
                                   <img src="@/assets/images/logoP4.svg" alt="Sumaq.pe">
                              </nuxt-link>
                         </div>
                         <div class="col-6 col-xl-7">
                              <nav-main />
                         </div>
                         <div class="col-4 col-xl-3 boxShoppingCart">
                              <div class="d-flex flex-row align-items-end justify-content-end fullHeight">
                                   <icon-user />
                                   <icon-cart />
                                   <p>(0)</p>
                                   <div class="boxMoney d-flex flex-row align-items-center justify-content-start">
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
               </div>
          </div>
          <div class="HeaderMainMovil">
               <div class="container-fluid">
                    <div class="boxHeaderMovil d-flex align-items-center justify-content-between">
                         <div class="boxLogo">
                              <img src="@/assets/images/logoP4.svg" alt="Sumaq">
                         </div>
                         <div class="boxShoppingCart">
                              <div class="d-flex flex-row align-items-end justify-content-end">
                                   <a href="javascript:void(0)" class="btn-search">
                                        <client-only>
                                             <b-icon-search class="icon-search"></b-icon-search>
                                        </client-only>
                                   </a>
                                   <icon-user />
                                   <icon-cart />
                                   <div class="boxCircle">
                                        <p>2</p>
                                   </div>
                                   <a href="javascript:void(0)" v-on:click="viewMenuNav" class="menuNav d-flex align-items-center flex-column justify-content-between">
                                        <div class="line"></div>
                                        <div class="line"></div>
                                        <div class="line"></div>
                                   </a>
                              </div>
                         </div>

                    </div>
               </div>
          </div>
          <nav-main-movil />
     </div>
</template>
<script>
import NavMain from '@/components/Nav/NavMain'
import NavMainMovil from '@/components/Nav/NavMainMovil'
import IconUser from '@/components/Svg/IconUser'
import IconCart from '@/components/Svg/IconCart'
export default {
     components: {
          NavMain,
          NavMainMovil,
          IconUser,
          IconCart,
     },
     data() {
          return {
               userLogin: true
          }
     },
     mounted(){
     },
     methods : {
         viewMenuNav() {
             const boxMovilMainNav = $('.boxMovilMainNav')
             if (boxMovilMainNav.hasClass('active')){
                  boxMovilMainNav.removeClass('active')
             }else{
                  boxMovilMainNav.addClass('active')
             }
             
         }
     }
}
</script>
<style lang="sass">
     .HeaderMainMovil
          display: block
          background: white
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.2)
          position: relative
          z-index: 10
          @media screen and (min-width: 1200px)
               display: none
          .container-fluid
               .menuNav
                    position: relative
                    width: 1.65rem
                    height: 20px
                    margin-left: .85rem
                    .line
                         width: 100%
                         height: 3px
                         background: $greenLight3
                         border-radius: 2px
               .boxHeaderMovil
                    padding-top: 1rem 
                    padding-bottom: .5rem
                    position: relative
               .boxLogo
                    img
                         width: 150px
               .btn-search
                    margin-right: 1rem
                    position: relative
                    top: 2px
                    &:hover
                         .icon-search
                              color: $pinkLight
                    .icon-search
                         color: $brown
                         font-size: 1.25rem
               .boxShoppingCart
                    .boxCircle
                         background: $greenLight3
                         border-radius: 50%
                         width: 20px
                         height: 20px
                    p
                         @include font-libre(0.813rem,0.75rem,0.8rem,0.8rem,$Montserrat,600,white)
                         // padding-bottom: .25rem
                         text-align: center
                    
     .HeaderMain
          padding: .75rem 0 .95rem
          background: white
          display: none
          @media screen and (min-width: 1200px)
               display: block
          .boxMoney
               position: relative
               top: 4px 
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
               
          .iconShoppingCart
               position: relative
               // transform: translateY(-4px)
          .fullHeight
               height: 100%
          .boxShoppingCart
               p,
               span
                    @include font-libre(0.813rem,0.75rem,0.65rem,0.6rem,$Montserrat,600,$brown)
                    padding-bottom: .25rem
               .boxMoney
                    margin-left: 1.75rem
                    a
                         text-decoration: none
                    ul
                         margin: 0
                         padding: 0
                         list-style: none
                         display: none
                         li
                              p
                                   padding-bottom: 0rem

     #iconShoppingCart
          margin: 0 .5rem 0 0rem
          width: 20px
          @media screen and (min-width: 992px)
               margin: 0 .15rem
               width: 18px
          @media screen and (min-width: 1200px)
               width: 20px
          @media screen and (min-width: 1400px)
               width: 26px
          .st0
               stroke: $brown
          .st1,
          .st2
               stroke: $brown
     #iconUserSvg
          width: 20px
          margin-right: .85rem
          @media screen and (min-width: 992px)
               width: 18px
               margin-right: .5rem
          @media screen and (min-width: 1200px)
               width: 20px
          @media screen and (min-width: 1400px)
               width: 24px
          .st0
               stroke: $brown
</style>