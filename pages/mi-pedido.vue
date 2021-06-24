<template>
     <div class="boxMiPedido">
          <div class="boxFondo">
               <div class="container">
                    <div class="boxCenter">
                         <div class="boxTitle">
                              <h1>Consulta tu Pedido</h1>
                         </div>
                         <div class="boxDescription">
                              <p>Aqui podras consultar el estado de tu pedido ingresando solamente el número de la orden.</p>
                         </div>
                         <ValidationObserver v-slot="{ validate }" ref="observer" >
                              <b-form @submit.prevent="validate().then(onSubmit)">
                                   <div class="row mb-3 mt-3">
                                        <div class="col-7">
                                             <ValidationProvider tag="div" vid="numeroPedido" rules="required" name="Número Orden" v-slot="{ errors, validated }" >
                                                  <b-form-input
                                                       v-model="numpedido"
                                                       autocomplete="off"
                                                       type="text"
                                                       :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                       placeholder="Número Orden"
                                                  ></b-form-input>
                                                  <div class="error-input">{{ errors[0] }}</div>
                                             </ValidationProvider>
                                        </div>
                                        <div class="col-5">
                                             <div class="boxButtom">
                                                  <b-button type="submit" class="btn-submit"><p>Verificar Pedido</p></b-button>
                                             </div>
                                        </div>
                                   </div>
                                   
                              </b-form>
                         </ValidationObserver>
                         <div class="alert alert-primary" role="alert" v-if="boolEstado">
                              El número de la orden: {{ numpedido }} , se encuentra en {{ estadoPedido }}
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>



/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)


export default {
     
     data(){
          return {
               numpedido: '',
               estadoPedido: 'ESPERA',
               boolEstado: false,
          }
     },
     head () {
          return {
               title: 'SUMAQ.pe - Revisar mi Pedido',
               meta: [
               { hid: 'subject', name: 'subject', content: 'SUMAQ.pe - Revisar mi Pedido' },
               { hid: 'description', name: 'description', content: 'Revisar mi Pedido' }, 
               // Google +
               { hid: 'name-google', content: 'SUMAQ.pe - Revisar mi Pedido' }, 
               { hid: 'description-google', content: 'Revisar mi Pedido' }, 
               { hid: 'image-google', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: 'SUMAQ - Revisar mi Pedido' }, 
               { hid: 'twitter:description', name: 'twitter:description', content: 'Revisar mi Pedido' }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Open Graph data
               { hid: 'og:title', property: 'og:title',  content: 'SUMAQ.pe - Revisar mi Pedido' }, 
               { hid: 'og:type', property: 'og:type', content: 'article' }, 
               { hid: 'og:url', property: 'og:url', content: 'https://floreriasumaq.pe/home' }, 
               { hid: 'og:image', property: 'og:image',  content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:image:secure_url', property: 'og:image:secure_url',  content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:image:alt', property: 'og:image:alt',  content: 'SUMAQ.pe - Revisar mi Pedido' }, 
               { hid: 'og:description', property: 'og:description', content: 'Revisar mi Pedido' }, 
               { hid: 'og:site_name', property: 'og:site_name', content: 'SUMAQ.pe' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
     mounted () {
          
     },
     methods : {
          async onSubmit() {
               const isValid = await this.$refs.observer.validate();
               console.log(isValid)
               if (isValid) {
                    try{
                         let sendSolicitud = await this.$axios.$get(`https://admin.floreriasumaq.pe/api/v1/sales-by-order-number?numero_orden=${this.numpedido}`)
                         console.log(sendSolicitud)
                         this.estadoPedido = 'ESPERA'
                    }catch (error) {
                         console.log(error)
                    }finally {
                         this.boolEstado = true
                    }
               }
          }
     }
}
</script>
<style lang="sass">
     .boxMiPedido
          .boxDescription
               margin-top: 1rem
               p
                    @include font-libre(1rem,1rem, .85rem,.85rem,$Montserrat,500,$grayDark18)

          .boxTitle
               margin-top: 2.5rem
               h1
                    @include font-libre(2rem,2rem, 1.75rem,1.45rem,$Montserrat,700,$grayDark18)
                    text-align: center
          .boxCenter
               width: 90%
               margin: auto
               @media screen and (min-width: 992px)
                    width: 60%
          form
               @include inputFormPago()
               .boxButtom
                    padding: 0rem 1rem 0rem
                    button
                         border: 1px solid $greenLight3
                         padding: 0rem 1.95rem
                         height: 50px
                         background: $greenLight3
                         border-radius: 30px
                         text-decoration: none
                         width: 100%
                         p
                              @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,600,white)
          .boxFondo
               background-image: url('~/assets/images/bg_sumaq.png')
               background-repeat: no-repeat
               background-position: center -50px
               background-size: cover
               height: 100%
               padding-bottom: 5rem
               padding-top: 10rem

</style>