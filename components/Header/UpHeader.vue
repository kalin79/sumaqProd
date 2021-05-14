<template>
     <div class="HeaderUp">
          <div class="container-fluid container-fluid-xxl">
               <div class="row ContentHeaderUp">
                    <div class="col-2 col-xl-2 col-xxl-2"> 
                         <div class="d-flex justify-content-start align-items-center" >
                              <p>Llámanos: (51) 985 757 450</p>
                         </div>
                    </div>
                    <div class="col-3 col-xl-3 col-xxl-2">
                         <div class="d-flex justify-content-start align-items-center" >
                              <p>Horario de atención: 9:00 a.m.- 6:00 p.m.</p>
                         </div>
                    </div>
                    <div class="col-7 col-xl-7 col-xxl-8">
                         <div class="boxSocial d-flex justify-content-end align-items-center">
                              <a href="https://www.facebook.com/FloresSUMAQ.pe" target="_blank">
                                   <client-only>
                                        <b-icon-facebook class="icon-facebook"></b-icon-facebook>
                                   </client-only>
                              </a>
                              <a href="https://www.instagram.com/sumaq.pe/" target="_blank">
                                   <div class="boxInstagram d-flex justify-content-center flex-column align-items-center">
                                        <client-only>
                                             <b-icon-instagram class="icon-instagram"></b-icon-instagram>
                                        </client-only>
                                   </div>
                              </a>
                              <a href="https://wa.link/i7kwid" target="_blank">
                                   <div class="boxWhatsAppFlex d-flex justify-content-center flex-column align-items-center">
                                        <icon-whatsapp />
                                   </div>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import IconWhatsapp from '@/components/Svg/IconWhatsApp'
export default {
     components: {
          IconWhatsapp
     }
}
</script>
<style lang="sass">
     .HeaderUp
          background-color: $greenLight3
          display: none
          position: relative
          z-index: 2
          @media screen and (min-width: 1200px)
               display: block
          .ContentHeaderUp
               padding: .5rem 0
               @media screen and (min-width: 992px)
                    padding: .25rem 0
               @media screen and (min-width: 1200px)
                    padding: .5rem 0
          .boxSocial
               padding: 0rem 0 0
               .boxWhatsAppFlex
                    background: white
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0rem
                    border-radius: 50%
                    .boxWhatsApp
                         font-size: .3rem
                         color: $greenLight3
               .boxInstagram
                    background: white
                    width: 1.5rem
                    height: 1.5rem
                    margin: 0 .5rem
                    border-radius: 50%
                    .icon-instagram
                         font-size: .9rem
                         color: $greenLight3
               .icon-facebook
                    font-size: 1.5rem
                    color: white
          a
               text-decoration: none
          .icon-shopping-bag
               color: white
               font-size: 1rem
               margin-right: .15rem  
          p
               @include font-libre(0.813rem,0.75rem,.7rem,0.65rem,$Montserrat,500,white)
               line-height: 1.75rem
</style>