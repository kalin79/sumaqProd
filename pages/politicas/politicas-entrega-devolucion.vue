<template>
     <div class="boxLegales">
          <div class="separate"></div>
          <div class="container">
               <div class="boxTitle">
                    <h1>POLÍTICAS DE ENTREGA Y DEVOLUCI&Oacute;N</h1>
               </div>
               <h3>POLÍTICA DE ENVÍOS</h3>
               <ul>
                    <li>07:00 am – 10:00 am Reparto único de productos con el nombre “DESAYUNO” en caso seleccione un producto que no pertenezca a esa categoría se programara para el horario siguiente.</li>
                    <li>11:00 am – 03:00 pm Reparto de todos los productos que hayan sido comprados con al menos un día de anticipación.</li>
                    <li>03:00 pm – 07:00 pm Reparto de pedidos tomados el mismo día.</li>
                   
               </ul>
               <p>Para fechas especiales como <strong>San Valentín, Día de la Madre, Día de la Mujer, Día del Padre, Día Niño, Fiestas patrias y Navidad </strong> únicamente se aceptarán pedidos de la categoría que lleve el nombre correspondiente a la campaña en curso.</p>
               <h3>CAMBIOS Y DEVOLUCIONES</h3>
               <p>Aceptamos cambios con un plazo mínimo de 2 días de anticipación. Para cambios de fecha, dirección, detalles o tipo de producto comunicarse al +51985757450 o al mail <a href="mailto:logistica@floreriasumaq.pe">logistica@floreriasumaq.pe</a> con el asunto “REALIZAR CAMBIO URGENTE”</p>
              
               <p>En caso no se pueda realizar la entrega debido a que no se encontró a ninguna persona con capacidad de recibir el regalo se procederá de la siguiente forma.</p>
               <p>El pedido regresará a nuestra base de repartos en San Miguel donde podrá ser recogido en el transcurso del día.</p>
               <p>En caso de no poder recoger el pedido de nuestra base podrá solicitar una reprogramación para el mismo día dependiendo de la disponibilidad. Este nuevo envío tendrá un costo de <span class="pink">s/.15.00 a s/.45.00 soles </span> (variará según distrito).</p>
               <p>Es posible realizar la reprogramación para otra fecha con un costo por reprogramación y costo de envío según distrito. Esto se debe a que nuestros productos en su mayoría son perecibles es por ello que deberán ser preparados nuevamente para envío.</p>
               <p>No se aceptan devoluciones de nuestros pedidos bajo ningún contexto.</p>
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
              titleHead: 'POLITICAS DE ENTREGA Y DEVOLUCION' ,
              descriptionHead: 'Para fechas especiales como San Valentín, Día de la Madre, Día de la Mujer, Día del Padre, Día Niño, Fiestas patrias y Navidad  únicamente se aceptarán ...'
          }
     },
     head () {
          return {
               title: `SUMAQ.pe - ${this.titleHead}`,
               meta: [
               { hid: 'subject', name: 'subject', content: `SUMAQ.pe - ${this.titleHead}` },
               { hid: 'description', name: 'description', content: `${this.descriptionHead}` }, 
               // Google +
               { hid: 'name-google', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'description-google', content: `${this.descriptionHead}` }, 
               { hid: 'image-google', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'twitter:description', name: 'twitter:description', content: `${this.descriptionHead}` }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Open Graph data
               { hid: 'og:title', property: 'og:title', name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', property: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', property: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/' }, 
               { hid: 'og:image', property: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', property: 'og:description', name: 'og:description', content: `${this.descriptionHead}` }, 
               { hid: 'og:site_name', property: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
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