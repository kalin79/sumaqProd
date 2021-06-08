<template>
     <div class="boxLegales">
          <div class="separate"></div>
          <div class="container">
               <div class="boxTitle">
                    <h1>COSTO DE ENVÍO</h1>
               </div>
               <h3>Lima</h3>
               <ul>
                    <li>Zona 1: Pueblo Libre, San Isidro, San Miguel, Magdalena, Jesús María, Lince Breña, Lima s/9</li>
                    <li>Zona 2: La Molina, La Victoria, San Luis, Miraflores, Barranco, Surco, San Borja, Surquillo s/13</li>
                    <li>Zona 3: Chorrillos, Ate, Rimac, San Juan de Miraflores, Santa Anita s/17</li>
                    <li>Zona 4: El Agustino, Bellavista, Callao, Carmen de la Legua, La Perla s/25</li>
                    <li>Zona 5: San Juan de Lurigancho, Santa Clara, Villa El Salvador, La Punta s/30</li>
                    <li>Zona 6: Independencia, Los Olivos, Lurigancho/Chosica, San Martín de Porres, Villa María del Triunfo s/35</li>
                    <li>Zona 7: Carabayllo, Cieneguilla, Comas, Pachacamac, Puente Piedra, Ventanilla, Huaycán s/50</li>
                    <li>Zona 8: Chosica, Lurín, Santa Rosa, Mi Perú, Santa Eulalia s/70</li>
                    <li>Zona 9: Chaclacayo, Arica, Pulpos, Punta Hermosa s/80</li>
               </ul>
               <h3>Provincias</h3>
               <p>El envío se realizará a la base de Olva de la ciudad s/40</p>
              
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
              titleHead: 'COBERTURA' , 
              descriptionHead: 'Se hace envio tanto a lima y provincia',
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
               { hid: 'og:title',name: 'og:title', content: `SUMAQ.pe - ${this.titleHead}` }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/' }, 
               { hid: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', name: 'og:description', content: `${this.descriptionHead}` }, 
               { hid: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
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