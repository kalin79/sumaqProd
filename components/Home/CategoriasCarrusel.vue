<template>
     <div class="homeCategory">
          <div class="container-fluid container-fluid-xxl">
               <!-- <div class="boxVector pos1">
                    <img src="@/assets/images/vect1.png" alt="Flor"/>
               </div>
               <div class="boxVector pos2">
                    <img src="@/assets/images/vect2.png" alt=""/>
               </div>
               <div class="boxVector pos3">
                    <img src="@/assets/images/vect6.png" alt=""/>
               </div>
               <div class="boxVector pos4">
                    <img src="@/assets/images/vect4.png" alt=""/>
               </div> -->
               <div class="boxTitle">
                    <figure>
                         <img src="@/assets/images/iconoCategoria.png" alt="Flor"/>
                    </figure>
                    <h2>Tiendas por categoría</h2>
                    <p>Encuentra ese detalle para toda ocasión, desde unos <br>tulipanes.</p>
               </div>
               <div class="boxCarrusel">
                    <client-only>
                         <carousel
                         :perPageCustom="[[300, 1], [992,3], [1200,4], [1400,5]]" 
                         :autoplay="true" 
                         :autoplayTimeout=5000
                         :paginationPadding=10
                         :minSwipeDistance=8
                         :navigationEnabled="true"
                         :paginationEnabled="false"
                         :loop="false"
                         :mouse-drag="true"
                         :touchDrag="true"
                         >
                              <slide v-for="(tienda, index) in getTiendas" :key="index">
                                   <nuxt-link :to="`/tienda${tienda.link}`">
                                        <div class="cardCarrsuel">
                                             <div class="imageScale">
                                                  <img :src="tienda.poster" :alt="tienda.title" />
                                             </div>
                                             <div class="cardTitle">
                                                  <h2>{{ tienda.title }}</h2>
                                             </div>
                                             <div class="cardDescription">
                                                  <p>{{ tienda.title }}</p>
                                             </div>
                                        </div>
                                   </nuxt-link>
                              </slide>
                         </carousel>
                    </client-only>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     mounted() {
          // $('.VueCarousel-navigation button').attr('value','asd')
               // this.slides.push({image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg'})
     },
     computed: {
          ...mapGetters('generaldata/', ['getTiendas']),
     },
}
</script>
<style lang="sass">
     .homeCategory
          padding: 0rem 0 2rem
          background-image: url('~/assets/images/bg_sumaq.png')
          background-repeat: no-repeat
          background-position: center
          background-size: cover
          @media screen and (min-width: 992px)
               padding: 1.25rem 0 2.5rem
          .boxCarrusel
               position: relative
               z-index: 100
               padding: 1.5rem 0 3rem
               border: 0px solid blue
               @media screen and (min-width: 992px)
                    padding: 2.5rem 0 3rem
               @media screen and (min-width: 1200px)
                    padding: 3rem 0 3rem
               @media screen and (min-width: 1400px)
                    padding: 3.5rem 0 6.5rem
               .VueCarousel-navigation
                    button
                         font-size: 1.5rem
                    .VueCarousel-navigation-prev
                         transform: translateY(-50%) translateX(-26%)
                    .VueCarousel-navigation-next
                         transform: translateY(-50%) translateX(30%)
               a
                    text-decoration: none
                    &:focus,
                    &:active
                         outline: none
                    .cardDescription
                         text-align: center
                         p
                              @include font-libre(0.875rem,.80rem, .75rem,.75rem,$Montserrat,500,$grayDark6)
                    .cardTitle
                         padding: 1rem 0 .5rem
                         text-align: center
                         h2
                              @include font-libre(1.5rem,1.45rem, 1.25rem,1.15rem,$Montserrat,500,$brown)
                    .cardCarrsuel
                         padding: 1rem
                         @media screen and (min-width: 1400px)
                              padding: 1rem .5rem
                         &:hover
                              .cardTitle
                                   h2
                                        text-decoration: underline
                              .imageScale
                                   img
                                        transform: scale(1.5)
                                        -webkit-transform:scale(1.5)
                                   &:after
                                        border: .65rem solid rgba(white,0.35)
                         .imageScale
                              display: block
                              overflow: hidden
                              width: 12.25rem
                              height: 12.25rem
                              border-radius: 50%
                              position: relative 
                              border: 0px solid $greenLight3
                              margin: auto
                              clip-path: content-box
                              @media screen and (min-width: 992px)
                                   width: 14.375rem
                                   height: 14.375rem
                              @media screen and (min-width: 1200px)
                                   width: 13.125rem
                                   height: 13.125rem
                              @media screen and (min-width: 1400px)
                                   width: 15rem
                                   height: 15rem
                              &:before
                                   content: ''
                                   position: absolute
                                   width: 16.25px
                                   height: 16.25px
                                   z-index: 5
                                   border: 2px solid $greenLight3
                                   top: -.0rem
                                   left: -.0rem
                                   border-radius: 50%
                                   @media screen and (min-width: 992px)
                                        width: 14.375rem
                                        height: 14.375rem
                                   @media screen and (min-width: 1200px)
                                        width: 13.125rem
                                        height: 13.125rem
                                   @media screen and (min-width: 1400px)
                                        width: 15rem
                                        height: 15rem
                              &:after
                                   content: ''
                                   z-index: 3
                                   top: -.0rem
                                   left: -.0rem
                                   width: 16.25px
                                   height: 16.25px
                                   border: 0rem solid rgba(white,1)
                                   border-radius: 50%
                                   position: absolute
                                   transition: .25s ease border
                                   @media screen and (min-width: 992px)
                                        width: 14.375rem
                                        height: 14.375rem
                                   @media screen and (min-width: 1200px)
                                        width: 13.125rem
                                        height: 13.125rem
                                   @media screen and (min-width: 1400px)
                                        width: 15rem
                                        height: 15rem
                              img
                                   width: 100%
                                   height: 100%
                                   object-fit: cover
                                   transition: .5s ease transform
          .container-fluid
               position: relative
               padding-bottom: .75rem
               .boxVector
                    position: absolute
                    top: 0
                    z-index: 20
                    
                    &.pos4
                         bottom: 0
                         top: auto
                         left: 0rem
                         display: none
                         @media screen and (min-width: 992px)
                              bottom: -16.35rem
                              left: 0rem
                              display: block
                         @media screen and (min-width: 1200px)
                              bottom: -18.65rem
                              left: 0rem
                         @media screen and (min-width: 1400px)
                              bottom: -20.5rem
                              left: 0rem
                         img
                              width: 389px
                              opacity: .35
                              @media screen and (min-width: 992px)
                                   width: 300px
                              @media screen and (min-width: 1200px)
                                   width: 350px
                              @media screen and (min-width: 1400px)
                                   width: 389px
                    &.pos3
                         top: 0
                         right: 0rem
                         left: auto
                         display: none
                         @media screen and (min-width: 992px)
                              top: 5.15rem
                              right: -4.5rem
                              left: auto
                              display: block
                         @media screen and (min-width: 1200px)
                              top: 5.9rem
                              right: -4.5rem
                              left: auto
                         @media screen and (min-width: 1400px)
                              top: 5.75rem
                              right: -6.5rem
                              left: auto
                         img
                              width: 421px
                              opacity: .35
                              @media screen and (min-width: 992px)
                                   width: 340px
                              @media screen and (min-width: 1200px)
                                   width: 350px
                              @media screen and (min-width: 1400px)
                                   width: 421px
                    &.pos2
                         top: -5rem
                         left: 45%
                         transform: translateX(-50%)
                         @media screen and (min-width: 992px)
                              transform: translate(-65%,-40%)
                         @media screen and (min-width: 1200px)
                              transform: translate(-63%,-30%)
                         @media screen and (min-width: 1400px)
                              transform: translate(-65%,-35%)
                         img
                              width: 230px
                              opacity: .75
                              @media screen and (min-width: 992px)
                                   width: 460px
                              @media screen and (min-width: 1200px)
                                   width: 450px
                              @media screen and (min-width: 1400px)
                                   width: 542px
                    &.pos1
                         top: -11.5rem
                         left: -12rem
                         @media screen and (min-width: 992px)
                              top: -11.65rem
                              left: -14.85rem
                         @media screen and (min-width: 1200px)
                              top: -11.5rem
                              left: -14.5rem
                         @media screen and (min-width: 1400px)
                              top: -12rem
                              left: -18rem
                         img
                              width: 300px
                              // opacity: .65
                              @media screen and (min-width: 992px)
                                   width: 490px
                              @media screen and (min-width: 1200px)
                                   width: 500px
                              @media screen and (min-width: 1400px)
                                   width: 556px
          .boxTitle
               text-align: center
               // padding-top: 2rem
               figure
                    margin: 0 0 .75rem
                    img
                         width: 80px
                         background: white
               h2
                    @include font-libre(2.375rem,2rem, 1.75rem,1.35rem,$Playfair,500,$black)
                    font-style: italic
                    line-height: 1em
                    margin-bottom: .5rem
               p
                    @include font-libre(1rem,.85rem, .75rem,.726rem,$Montserrat,500,$grayDark6)
                    line-height: 1.75em

</style>