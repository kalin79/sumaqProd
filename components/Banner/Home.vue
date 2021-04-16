<template>
     <div class="bannerHome">
          <div class="separate"></div>
          <vueper-slides
               ref="vueperslides1"
               fade
               :autoplay="true"
               :duration=5000
               :infinite="false"
               :pause-on-hover="pauseOnHover"
               @autoplay-pause="internalAutoPlaying = false"
               @autoplay-resume="internalAutoPlaying = true"
               :bullets="false"
               >
               <vueper-slide
                    v-for="(slide, i) in slides"
                    :key="i"
                    :image="slide.image"
                    :link="slide.link"
                    :video="slide.video">
               </vueper-slide>
          </vueper-slides>
          <!-- <picture>
               <source
                    srcset="~/assets/images/banner-1920.jpg"
                    media="(min-width:992px)" 
               >
               <source
                    srcset="~/assets/images/banner-768.jpg"
                    media="(min-width:768px)" 
               >
               <img src="~/assets/images/banner-1920.jpg" alt="">
          </picture> -->
     </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
     components: {
          VueperSlides, 
          VueperSlide
     },
     data() {
          return {
               price: null,
               pauseOnHover: true,
               autoPlaying: true,
               internalAutoPlaying: true,
               tl: null,
               slides: [
                    { 
                         image: require('@/assets/images/banner-V1-1920.jpg'), 
                         link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
                    }
                    // { image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_zoom1.jpg' },
                    // { image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg' },
                    // {
                    //      title: 'Aurora Borealis',
                    //      content: 'This Youtube video has params in the URL and extra attributes on the iframe.',
                    //      image: 'https://i.ytimg.com/vi_webp/ehJg_OlcjpE/maxresdefault.webp',
                    //      video: {
                    //           url: 'https://www.youtube.com/embed/ehJg_OlcjpE?rel=0&showinfo=0&controls=1&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                    //           props: {
                    //           allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture'
                    //           }
                    //      }
                    // },
               ]
          }
     },
     mounted() {
               // this.slides.push({image: 'https://d3e3r3101xvs9k.cloudfront.net/ProductOriginalPhotos/8_Rosas_y_Mini_rosas_en_Jarron_principal11.jpg'})
     },
}
</script>
<style lang="sass">
     .bannerHome
          .separate
               width: 100%
               height: 144px
               @media screen and (min-width: 992px)
                    height: 129px
               @media screen and (min-width: 1200px)
                    height: 145px
               @media screen and (min-width: 1400px)
                    height: 147px
          .vueperslides__inner
               height: calc(100vh - 193px)
               @media screen and (min-width: 992px)
                    height: calc(100vh - 175px)
               @media screen and (min-width: 1200px)
                    height: calc(100vh - 216px)
               .vueperslides__parallax-wrapper
                    height: 100%
                    padding-bottom: 0 !important
          .vueperslides__arrows
               button
                    svg
                         background: white
                         color: $grayDark2
                         padding: 1.5em .75em
                         width: 3.5em
                         @media screen and (min-width: 992px)
                              padding: .95em .5em
                              width: 2em
                         @media screen and (min-width: 1200px)
                              padding: 1em .45em
                              width: 2em


</style>