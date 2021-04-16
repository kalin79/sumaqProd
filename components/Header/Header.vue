<template>
     <div class="HeaderMain">
          <div class="container-fluid container-fluid-xxl ">
               <div class="row">
                    <div class="col-2 col-xl-2">
                         <nuxt-link to="/" class="">
                              <img src="@/assets/images/logo.svg" alt="Sumaq.pe">
                         </nuxt-link>
                    </div>
                    <div class="col-6 col-xl-7">
                         <nav-main />
                    </div>
                    <div class="col-4 col-xl-3 boxShoppingCart">
                         <div class="d-flex flex-row align-items-end justify-content-end fullHeight">
                              <div class="boxLoggedIn" v-if="userLogin">
                                   <p>Hola, Carlos</p>
                              </div>
                              <icon-user v-else />
                              <icon-cart />
                              <p>(0)</p>
                              <div class="boxMoney">
                                   <a href="javascript:void(0)">
                                        <span>MONEDA: S./ </span>
                                   </a>
                                   <ul>
                                        <li>
                                             <p>MONEDA: S./</p>
                                        </li>
                                        <li>
                                             <p>MONEDA: USD</p>
                                        </li>
                                   </ul>
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
}
</script>
<style lang="sass">
     .HeaderMain
          padding: 1.5rem 0 1rem
          background: white
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
          @media screen and (min-width: 992px)
               width: 18px
          @media screen and (min-width: 1200px)
               width: 20px
          @media screen and (min-width: 1400px)
               width: 24px
          .st0
               stroke: $brown
</style>