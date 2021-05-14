<template>
     <div class="bannerShoppingCart">
          <div class="separate"></div>
          <div class="container-fluid container-fluid-xxl">
               <div class="d-flex justify-content-between align-items-end boxBanner">
                    <h2>CARRITO DE COMPRAS</h2>
                    <div class="Boxbreadcrumb">
                         <div class="d-flex justify-content-start align-items-start">
                              <nuxt-link to="/">
                                   <p class="brown">Home</p> 
                              </nuxt-link>
                              <p class="separateP brown">></p>
                              <nuxt-link to="cart/informacion">
                                   <p class="brown">Carrito</p> 
                              </nuxt-link>
                              <p class="separateP brown">></p>
                              <nuxt-link to="cart/informacion">
                                   <p class="brown">Información</p> 
                              </nuxt-link>
                              
                         </div>
                    </div>
               </div>
          </div> 
     </div>     
</template>
<script>
export default {
}
</script>
<style lang="sass">
     .bannerShoppingCart
          background: $greenLight3
          position: relative
          z-index: 10
          overflow: hidden
          .boxBanner
               height: 6.5rem
               position: relative
               padding: 0 0 0 2rem
               @media screen and (min-width: 992px)
                    height: 7rem
                    padding: 0 2rem .75rem 4rem
               @media screen and (min-width: 1200px)
                    // height: 12rem
                    padding: 0 0 .75rem 4rem
               @media screen and (min-width: 1400px)
                    // height: 12rem
                    padding: 0 0 .75rem 4rem
               h2,
               p
                    margin: 0
                    padding: 0
               h2
                    @include font-libre(1.375rem,1.375rem,1.375rem,1.375rem,$Montserrat,600,white)
                    line-height: 2em
               .Boxbreadcrumb
                    padding: 0 0 .725em 0
                    display: none
                    @media screen and (min-width: 992px)
                         display: block
                    p,
                    a
                         @include font-libre(.875rem,.8rem,.785rem,.7rem,$Montserrat,500,white)
                    p
                         &.separateP
                              margin: 0 .5rem
                    a
                         text-decoration: none
                         position: relative
                         &:focus,
                         &:active,
                              outline: none
                              text-shadow: transparent
                         &::before
                              position: absolute
                              content: ''
                              height: 1px
                              width: 0
                              background: white
                              bottom: 0
                              left: 0 
                              transition: .5s ease width
                         &:hover
                              &::before
                                   width:
          .separate
               width: 100%
               height: 73px
               @media screen and (min-width: 992px)
                    height: 73px
               @media screen and (min-width: 1200px)
                    height: 133px
               @media screen and (min-width: 1400px)
                    height: 136px
</style>