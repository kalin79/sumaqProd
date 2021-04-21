<template>
     <div class="HeaderMain">
          <div class="container-fluid container-fluid-xxl ">
               <div class="row">
                    <div class="col-2 col-xl-2">
                         <nuxt-link to="/" class="logoHeader">
                              <img src="@/assets/images/logo.svg" alt="Sumaq.pe">
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
</template>
<script>
import NavMain from '@/components/Nav/NavMain'
import IconUser from '@/components/Svg/IconUser'
import IconCart from '@/components/Svg/IconCart'
export default {
     components: {
          NavMain,
          IconUser,
          IconCart,
     },
     data() {
          return {
               userLogin: true
          }
     },
     mounted(){
          this.animationCheckMoney()
     },
     methods : {
          animationCheckMoney(){
               $('#switch').on('click',function(){
                    console.log($(this).is(':checked'))
                    if( $(this).is(':checked') ){

                    }
               })
          }
     }
}
</script>
<style lang="sass">
     .HeaderMain
          padding: 1.5rem 0 1rem
          background: white
          // .logoHeader
          //      display: block
          //      width: 80px
          //      img 
          //           width: 100% 
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
                    background-color: $greenLight3
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
               .boxLoggedIn
                    margin: 0 .5rem
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
          margin: 0 .15rem
          width: 20px
          @media screen and (min-width: 992px)
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
          margin-right: .5rem
          @media screen and (min-width: 992px)
               width: 18px
          @media screen and (min-width: 1200px)
               width: 20px
          @media screen and (min-width: 1400px)
               width: 24px
          .st0
               stroke: $brown
</style>