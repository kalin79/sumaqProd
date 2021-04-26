<template>
     <div class="BannerProduct">
          <div class="separate"></div>
          <div class="container-fluid container-fluid-xxl">
               <div class="d-flex justify-content-between align-items-end boxBanner">
                    <h3><span>Postres</span></h3>
                    <h2>Tienda de Postres</h2>
                    <div class="Boxbreadcrumb d-flex justify-content-start align-items-start">
                         <nuxt-link to="/">
                              <p class="brown">Home</p> 
                         </nuxt-link>
                         <p class="separateP brown">></p>
                         <nuxt-link to="/postres">
                              <p class="brown">Tienda de Postres</p> 
                         </nuxt-link>
                         <p class="separateP brown">></p>
                         <nuxt-link to="/postres">
                              <p class="brown">Helados</p> 
                         </nuxt-link>
                         <p class="separateP brown">></p>
                         
                         <p class="brown">Caja de 12 helados</p> 
                        
                    </div>
               </div>
          </div> 
     </div>
</template>
<style lang="sass">
     .BannerProduct
          background: $brown
          position: relative
          z-index: 10
          overflow: hidden
          .boxBanner
                    height: 8rem
                    position: relative
                    padding: 0 0 0 4rem
                    @media screen and (min-width: 992px)
                         height: 9rem
                         padding: 0 2rem 0 4rem
                    @media screen and (min-width: 1200px)
                         height: 10rem
                         padding: 0 0 0 4rem
                    @media screen and (min-width: 1400px)
                         height: 10rem
                         padding: 0 0 0 4rem
                    h3
                         position: absolute
                         bottom: -.75rem
                         left: 0rem
                         @include font-libre(16.25rem,14.25rem,9rem,7.5rem,$Playfair,500,$brownLight)
                         line-height: .85em
                         font-style: italic
                         text-align: center
                         text-transform: capitalize
                         opacity: .2
                    h2,
                    p
                         margin: 0
                         padding: 0
                    h2
                         @include font-libre(2rem,1.85rem,1.75rem,1.45rem,$Playfair,400,white)
                         font-style: italic
                         line-height: 2em
                    .Boxbreadcrumb
                         padding: 0 0 .725em 0
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
                                        width: 100%


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