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
                              <nuxt-link to="/" v-if="items.link!=''">
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
     mounted() {},
}
</script>
<style lang="sass">
     .bannerHome
          .boxMainHome
               height: 185px
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
                    height: 130px
               @media screen and (min-width: 1400px)
                    height: 130px
          


</style>