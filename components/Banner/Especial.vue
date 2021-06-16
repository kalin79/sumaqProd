<template>
     <div class="bannerCategoria">
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
                              <div class="boxImages">
                                   <picture>
                                        <source
                                             srcset="@/assets/images/EspecialPC.jpg"
                                             media="(min-width:992px)" 
                                        >
                                        <img src="@/assets/images/EspecialMovil.jpg" alt="">
                                   </picture>
                              </div>
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
     .bannerCategoria
          position: relative
          z-index: 10
          .boxMainHome
               height: auto
               @media screen and (min-width: 992px)
                    height: calc(95vh - 165px)
               @media screen and (min-width: 1200px)
                    height: calc(90vh - 203px)
               @media screen and (min-width: 1400px)
                    height: calc(90vh - 205px)
               .VueCarousel,
               .VueCarousel-inner,
               .VueCarousel-slide
                    @media screen and (min-width: 992px)
                         height: calc(95vh - 165px)
                    @media screen and (min-width: 1200px)
                         height: calc(90vh - 203px)
                    @media screen and (min-width: 1400px)
                         height: calc(90vh - 205px)
               .boxImages
                    height: 100%
                    img
                         width: 100%
                         height: 100%
                         object-fit: cover
                         position: center
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