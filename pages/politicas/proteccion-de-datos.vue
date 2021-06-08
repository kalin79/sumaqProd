<template>
     <div class="boxLegales">
          <div class="separate"></div>
          <div class="container">
               <div class="boxTitle">
                    <h1>POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES QUEJAS Y RECLAMOS</h1>
               </div>
               <p>Esta Política de Privacidad se aplica al procesamiento de Datos Personales recopilados por FLORERIA SUMAQ.PE (en adelante “SUMAQ”) a través de su sitio web y aplicaciones digitales, de conformidad con lo dispuesto por la Ley N° 29733, Ley de Protección de Datos Personales, y su reglamento aprobado por Decreto Supremo N° 003-2013-JUS (“Reglamento”).
               El titular del banco de datos en el que se almacenarán los datos personales que nos proporcionarás es SUMAQ con RUC N° 10700878401, con domicilio en Av. Mariano Cornejo N° 2194, Pueblo Libre, Lima. La existencia de este banco de datos personales ha sido declarada a la Autoridad Nacional de Protección de Datos Personales, mediante su inscripción en el Registro Nacional de Protección de Datos Personales, bajo la denominación “QUEJAS Y RECLAMOS” y el código N° 14999.
               </p>
               <h3>1. OBJETIVO</h3>
               <p>La presente Política de Tratamiento de datos personales expresa cómo recolectamos, utilizamos y/o transferimos su información personal. También explica cómo hacer uso de tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) previstos en la Normativa de Protección de Datos Personales.</p>
               <h3>2. CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
               <p>Con motivo de la mejora continua de nuestros procesos, SUMAQ podrá realizar mejoras continuas y modificaciones y esta Política de Privacidad, a las cuales usted da su conformidad. Por favor, verifique estos términos regularmente para consultar los cambios que puedan haber existido.</p>
               <h3>3. INFORMACIÓN</h3>
               <p>Solo recolectamos los datos personales que usted desee proporcionar para los fines que se describen en el punto 4 de la presente Política. Nosotros recolectamos información personal directa como nombre, teléfono, correo electrónico, fecha de nacimiento, dirección, a través de formularios electrónicos u otros formatos; todo ello en estricto cumplimiento de la Ley de Protección de Datos Personales.</p>
               <p>Al ingresar tus datos, declaras y certificas que ellos corresponden a ti y que son verdaderos, exactos, auténticos, completos, y correctos; y que eres mayor de edad. SUMAQ no recopilará información de menores de edad, así proporcionen sus datos.</p>
               <h3>4. FINALIDADES DEL TRATAMIENTO DE SUS DATOS PERSONALES</h3>
               <p>Los datos personales que usted libremente proporciona a través del sitio web, grabaciones telefónicas u otros medios, serán tratados para los siguientes fines: atender consultas, quejas o reclamos. Para lo cual SUMAQ podrá valerse de los terceros (encargados de tratamiento) que apreciarás haciendo click en <strong>https://floreriasumaq.pe/</strong> . Según se indica en el referido enlace, algunos de dichos terceros se encuentran situados fuera del Perú, por lo que se producirá una transferencia internacional de datos. Si bien la entrega de sus datos personales es libre y voluntaria, podría ocurrir que usted no cubra los requisitos para que se procesen sus quejas, reclamos o consultas.</p>
               <h3>5. EJERCICIO DE SUS DERECHOS ARCO</h3>
               <p>Usted puede revocar su consentimiento o ejercer sus derechos que como titular de datos personales le asisten (acceso, rectificación, cancelación, oposición, información o revocación), de manera gratuita. Podrá ejercitar estos derechos a través del portal web <strong>https://floreriasumaq.pe/</strong>.</p>
               <h3>6. PLAZO DE CONSERVACIÓN DE LOS DATOS Y MEDIDAS DE SEGURIDAD</h3>
               <p>Conservaremos sus datos personales de forma indefinida, salvo que el titular solicite la cancelación de los mismos como parte de sus derechos especificados en el punto 5 de la presente política. SUMAQ tiene implementadas las medidas técnicas, organizativas y legales que garantizan la seguridad y confidencialidad de tus datos personales.</p>
               
               
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
              titleHead: 'POLITICAS DE ENTREGA Y DEVOLUCION', 
              descriptionHead: 'Esta Política de Privacidad se aplica al procesamiento de Datos Personales recopilados por FLORERIA SUMAQ.PE (en adelante “SUMAQ”) ...',
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
               { hid: 'og:title', property: 'og:title',   name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
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