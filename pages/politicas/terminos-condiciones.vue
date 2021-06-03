<template>
     <div class="boxLegales">
          <div class="separate"></div>
          <div class="container">
               <div class="boxTitle">
                    <h1>TÉRMINOS Y CONDICIONES</h1>
               </div>
               
               <p>Al acceder y navegar en el sitio de internet <span class="pink">https://www.floreriasumaq.pe</span> el usuario admite que ha leído, entendido y aceptado los términos y condiciones de uso de la página sin restricciones, ni modificaciones.</p>

               <h3>1. derechos de propiedad SUMAQ.PE</h3>
               <p>
                    El usuario reconoce y acepta que el sitio web www.floreriasumaq.pe y todos los contenidos ya sea fotos, archivo, material, diseños, publicaciones, publicidad o cualquier idea que sea una obra en el sentido de la legislación sobre propiedad intelectual se encuentra protegida bajo las leyes aplicables y es propiedad de la empresa.
               </p>
               <h3>2. información de marca registrada</h3>
               <p>La empresa es una marca registrada. no está permitido que el usuario utilice de cualquier manera denominaciones las cuales son propiedad de la empresa, sin una autorización previa.</p>

               <h3>3. sugerencias</h3>
               <p>Todas las sugerencias enviadas al email de contacto que realice el usuario que sean implementadas o adaptadas por la empresa no genera derecho alguno a favor de dicho usuario.</p>

               <h3>4. validez de las promociones</h3>
               <p>Las promociones y/o ofertas realizadas por la empresa tendrán validez para las compras efectuadas durante un período de vigencia limitado. los términos y condiciones de las mismas serán comunicados en el sitio web, y estarán sujetas al stock de los productos ofrecidos.</p>

               <h3>5. modificación de los términos y condiciones</h3>
               <p>La empresa podrá modificar los términos y condiciones en cualquier momento, sin previo aviso o consentimiento de los usuarios. de igual forma, se notificará a los usuarios mediante un aviso en el sitio sobre estos cambios en un plazo determinado. </p>
               <p>Todos nuestros <span class="pink">repartidores/delivery autorizados esperaran máximo 15 minutos</span> en cada dirección de entrega.</p>
          
          </div>
     </div>
</template>
<script>


import Banner from '@/components/Banner/Productos'

export default {
     components: {
          Banner
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          
          try {
               let res2= await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
               // console.log(res.data)
               if ((res2.code === 200) && (res2.status === 1)){
                    store.commit('menu/setMenuMain', res2.data.menu)
                    store.commit('menu/setMenuTiendaMain', res2.data.categories)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }finally{
               // console.log('final 2')
          }
     },
     data(){
          return{
              titleHead: 'TÉRMINOS Y CONDICIONES' 
          }
     },
     head () {
          return {
               title: this.titleHead,
               meta: [
               { hid: 'subject', name: 'subject', content: `Sumaq - ${this.titleHead}` },
               { hid: 'description', name: 'description', content: '' }, 
               // Google +
               { hid: 'name-google', content: `Sumaq - ${this.titleHead}` }, 
               { hid: 'description-google', content: '' }, 
               { hid: 'image-google', content: '' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: `Sumaq - ${this.titleHead}` }, 
               { hid: 'twitter:description', name: 'twitter:description', content: '' }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: '' }, 
               // Open Graph data
               { hid: 'og:title',name: 'og:title', content: '' }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: '' }, 
               { hid: 'og:image', name: 'og:image', content: '' }, 
               { hid: 'og:description', name: 'og:description', content: '' }, 
               { hid: 'og:site_name', name: 'og:site_name', content: '' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
}
</script>
<style lang="sass">
     .boxLegales
          padding-bottom: 3rem
          .boxTitle
               padding: 2rem 0 1rem
          .separate
               width: 100%
               height: 90px
               @media screen and (min-width: 1200px)
                    height: 130px
          h4,
          h3,
               @include font-libre(1rem,1rem,.9rem,.9rem,$Montserrat,600,$grayDark17)
               line-height: 1.75em
               margin: 0 0rem 1rem 0
               strong
                    font-weight: 700
          h1
               @include font-libre(1.85rem,1.85rem,1.35rem,1.35rem,$Montserrat,700,$blackLight)
               line-height: 1.75em
               text-align: center
               strong
                    font-weight: 700
          p
               @include font-libre(1rem,1rem,.9rem,.85rem,$Montserrat,400,$grayDark17)
               line-height: 1.75em
               margin: 0 0 1rem 0 
               span
                    &.pink 
                         color: $pink
               strong
                    font-weight: 600
          ul
               margin: 0 0 1rem 1.15rem
               padding: 0
               list-style: none
               ul
                    margin: 0 0 0 1.75rem

               li
                    @include font-libre(1rem,1rem,.9rem,.85rem,$Montserrat,400,$blackLight)
                    line-height: 1.75em
                    margin: 0
                    &:before
                         content: "\2022"
                         color: $pinkLight2
                         font-weight: bold
                         display: inline-block
                         width: 1rem
                         position: relative
                         top: 0rem
                         font-size: 1.25rem
                         margin-left: -1.07rem
</style>