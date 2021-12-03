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
                         <slide v-for="(items, index) in getSliderHome" :key="index">
                              <nuxt-link :to="items.link" v-if="items.link!=''">
                                   <div class="boxImages">
                                        <picture>
                                             <source
                                                  :srcset="items.image"
                                                  media="(min-width:992px)" 
                                             >
                                             <img :src="items.imagemobile" alt="">
                                        </picture>
                                   </div>
                              </nuxt-link>
                              <div class="boxImages" v-else>
                                   <picture>
                                        <source
                                             :srcset="items.image"
                                             media="(min-width:992px)" 
                                        >
                                        <img :src="items.imagemobile" alt="">
                                   </picture>
                              </div>
                         </slide>
                    </carousel>
               </client-only>
          </div>
          <!-- {{ banners.data.slider }} -->
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     data() {
          return {
               
          }
     },
     computed: {
          ...mapGetters('generaldata/', ['getSliderHome']),
     },
     mounted() {
          console.log(this.getSliderHome)
     },
}
</script>
<style lang="sass">
     .bannerHome
          position: relative
          z-index: 10
          margin-bottom: 2.5rem
          @media screen and (min-width: 992px)
               margin-bottom: 0rem
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
                    height: 125px
               @media screen and (min-width: 1400px)
                    height: 136px
          


</style>