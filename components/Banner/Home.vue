<template>
     <div class="bannerHome">
          <div class="separate"></div>
          <div class="boxMainHome">
               <client-only>
                    <carousel
                    :perPageCustom="[[300, 1]]" 
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
                         <slide>
                              <nuxt-link to="/">
                                   <div class="boxImages">
                                        <picture>
                                             <source
                                                  srcset="@/assets/images/banner-V1-1920.jpg"
                                                  media="(min-width:992px)" 
                                             >
                                             <img src="@/assets/images/bannerMovil.jpg" alt="">
                                        </picture>
                                   </div>
                              </nuxt-link>
                         </slide>
                    </carousel>
               </client-only>
          </div>
          
     </div>
</template>
<script>
export default {
     data() {
          return {
               
          }
     },
     mounted() {
               
     },
}
</script>
<style lang="sass">
     .bannerHome
          .boxMainHome
               height: auto
               @media screen and (min-width: 992px)
                    height: calc(100vh - 165px)
               @media screen and (min-width: 1200px)
                    height: calc(100vh - 203px)
               @media screen and (min-width: 1400px)
                    height: calc(100vh - 205px)
               .VueCarousel,
               .VueCarousel-inner,
               .VueCarousel-slide
                    height: 100% !important
               .boxImages
                    img
                         width: 100%
                         object-fit: cover
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