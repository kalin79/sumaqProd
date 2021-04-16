<template>
     <footer class="footerMain">
          <div class="boxFooter">
               <div class="container-fluid container-fluid-xxl">
                    <div class="row">
                         <div class="col">
                              <nuxt-link to="/" class="boxLogo">
                                   <img src="@/assets/images/logoBlanco.svg" alt="Sumaq.pe">
                              </nuxt-link>
                         </div>
                    </div>
                    <div class="separate"></div>
                    <div class="row">
                         <div class="col-1"></div>
                         <div class="col-2">
                              <div class="boxDetail">
                                   <h2>INFORMACIÓN <br>DE LA TIENDA</h2>
                                   <ul>
                                        <li>
                                             <a href="https://wa.link/7rz9o8" target="_blank">(+51)  985757450</a>
                                        </li>
                                        <li>
                                             <a href="mailto:hola@info@sumaq.pe?subject=Información%20al%20cliente" target="_blank">info@sumaq.pe</a>
                                        </li>
                                        <li>
                                             <div class="boxSocial d-flex justify-content-start align-items-center">
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
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="col-2">
                              <div class="boxDetail">
                                   <h2>CONÓCENOS</h2>
                                   <ul>
                                        <li>
                                             <nuxt-link to="/">Quienes Somos</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Blog</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Preguntas frecuentes</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Contáctenos</nuxt-link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="col-2">
                              <div class="boxDetail">
                                   <h2>POLÍTICAS</h2>
                                   <ul>
                                        <li>
                                             <nuxt-link to="/">Horarios de atención</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Términos y condiciones</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Políticas de entrega <br>y devolución</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Políticas de privacidad</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Política de cockies</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Política de datos</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Libro de reclamaciones</nuxt-link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="col-2">
                              <div class="boxDetail">
                                   <h2>MI PEDIDO</h2>
                                   <ul>
                                        <li>
                                             <nuxt-link to="/">Estado del pedido</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/">Cobertura</nuxt-link>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="col-3">
                              <div class="boxDetail">
                                   <h2>Compra segura, <br>aceptamos todas <br>las tarjetas.</h2>
                              </div>
                              <div class="boxTarjetas">
                                   <div class="row">
                                        <div class="col-6">
                                             <img src="@/assets/images/t1.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t2.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t3.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t4.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t5.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t6.png" alt="">
                                        </div>
                                        <div class="col-6">
                                             <img src="@/assets/images/t7.png" alt="">
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </footer>
</template>
<script>
import IconWhatsapp from '@/components/Svg/IconWhatsApp'
import IconFacebook from '@/components/Svg/IconFacebook'

export default {
     components: {
          IconWhatsapp,
          IconFacebook,
     }
}
</script>
<style lang="sass">
     .footerMain
          background: $brown
          position: relative
          z-index: 100
          .boxTarjetas
               padding-top: 1.5rem
               img
                    margin-bottom: 1rem
                    width: 70%
          .boxDetail
               h2
                    @include font-libre(.938rem,.8rem,.8rem,.75rem,$Montserrat,600,white)
                    line-height: 1.5em
               ul
                    margin: 0
                    padding: 0
                    list-style: none
                    li
                         .boxSocial
                              padding: 1.25rem 0 0
                              .boxWhatsAppFlex
                                   background: white
                                   width: 1.5rem
                                   height: 1.5rem
                                   margin: 0 .35rem
                                   border-radius: 50%
                                   .boxWhatsApp
                                        font-size: .3rem
                                        color: $brown
                              .boxInstagram
                                   background: white
                                   width: 1.5rem
                                   height: 1.5rem
                                   margin: 0 .35rem
                                   border-radius: 50%
                                   .icon-instagram
                                        font-size: .9rem
                                        color: $brown
                              .icon-facebook
                                   font-size: 1.5rem
                                   color: white
                         a
                              @include font-libre(.75rem,.7rem,.7rem,.65rem,$Montserrat,300,white)
                              text-decoration: none
                              transition: .5s ease color
                              &:hover
                                   color: $pink
          .separate
               width: 100%
               height: 3rem
          .boxFooter
               padding: 1.5rem 0 3.5rem
               .boxLogo
                    img 
                         width: 220px
                         @media screen and (min-width: 992px)
                              width: 230px
                         @media screen and (min-width: 1200px)
                              width: 260px
</style>