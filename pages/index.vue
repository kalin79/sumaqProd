<template>
     <div class="pageConstruccion">
          <div class="centerElement d-flex flex-column justify-content-center align-items-center">
               <div class="logoBox">
                    <img src="@/assets/images/logoP3.png" />
               </div>
               <div class="florBox">
                    <img src="@/assets/images/florConst.png" />
               </div>
               <div class="boxSocial d-flex justify-content-end align-items-center">
                    <a href="javascript:void(0)" target="_blank">
                         <client-only>
                              <b-icon-facebook class="icon-facebook"></b-icon-facebook>
                         </client-only>
                    </a>
                    <a href="javascript:void(0)" target="_blank">
                         <div class="boxInstagram d-flex justify-content-center flex-column align-items-center">
                              <client-only>
                                   <b-icon-instagram class="icon-instagram"></b-icon-instagram>
                              </client-only>
                         </div>
                    </a>
                    <a href="javascript:void(0)" target="_blank">
                         <div class="boxWhatsAppFlex d-flex justify-content-center flex-column align-items-center">
                              <icon-whatsapp />
                         </div>
                    </a>
               </div>
          </div>
     </div>
</template>
<script>
import IconWhatsapp from '@/components/Svg/IconWhatsApp'
export default {
     layout: 'construccion',
     components: {
          IconWhatsapp
     }
}
</script>
<style lang="sass">
     .pageConstruccion
          width: 100vw
          height: 100vh
          background-image: url('@/assets/images/fondoConstruccion.jpg')
          background-size: cover
          background-repeat: no-repeat
          background-position: center 
          .boxSocial
               padding: 0rem 0 0
               .boxWhatsAppFlex
                    background: $greenLight3
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0rem
                    border-radius: 50%
                    .boxWhatsApp
                         font-size: .3rem
                         color: white
               .boxInstagram
                    background: $greenLight3
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0 .5rem
                    border-radius: 50%
                    .icon-instagram
                         font-size: .9rem
                         color: white
               .icon-facebook
                    font-size: 1.5rem
                    color: $greenLight3
          .logoBox
               margin-bottom: .5rem
               img
                    width: 160px
          .florBox
               img
                    width: 350px
                    @media screen and (min-width: 992px)
                         width: 400px
                    @media screen and (min-width: 1200px)
                         width: 500px
                    @media screen and (min-width: 1400px)
                         width: 600px
          .centerElement
               width: 100%
               height: 100%
</style>