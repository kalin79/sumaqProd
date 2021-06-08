<template>
     <div class="overflowX">
          <div class="fixedWhatsApp">
               <a href="https://wa.link/i7kwid" target="_blank" >
                    <img src="@/assets/images/atencion.png" alt="Comunicate con nosotros por WhatsApp">
               </a>
          </div>
          
          <banner-home />
          <beneficios />
          <categorias />
          <div class="_destacado_pc">
               <destacados />
          </div>
          <div class="_destacado_movil">
               <destacados-m />
          </div>
          <!-- <planes /> -->
          <!-- <blog /> -->
          
     </div>
</template>
<script>

import BannerHome from '@/components/Banner/Home'
import Categorias from '@/components/Home/CategoriasCarrusel'
import Destacados from '@/components/Home/Destacados'
import DestacadosM from '@/components/Home/DestacadosMovil'
import Planes from '@/components/Home/Planes'
import Beneficios from '@/components/Home/Beneficios'
import Blog from '@/components/Home/Blog'

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
     middleware: ['datageneral'],
     components: {
          BannerHome,
          Destacados,
          DestacadosM,
          Categorias,
          Beneficios,
          Planes,
          Blog,
     },
     async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
          try {
               res = await $axios.$get(`https://admin.floreriasumaq.pe/api/v1/menu`)
               // console.log(res.data)
               if ((res.code === 200) && (res.status === 1)){
                    store.commit('menu/setMenuMain', res.data.menu)
                    store.commit('menu/setMenuTiendaMain', res.data.categories)
               }else{
                    console.log('error await')
               }
          }catch (error) {
               console.log(error)
          }
     },
     data(){
          return {
               
          }
     },
     head () {
          return {
               title: 'SUMAQ.pe - Bienvenido en donde podras encontrar el regalo perfecto',
               meta: [
               { hid: 'subject', name: 'subject', content: 'SUMAQ.pe - Bienvenido en donde podras encontrar el regalo perfecto' },
               { hid: 'description', name: 'description', content: 'Bienvenido en donde podras encontrar el regalo perfecto' }, 
               // Google +
               { hid: 'name-google', content: 'SUMAQ.pe - Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'description-google', content: 'Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'image-google', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Twitter Card data
               { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }, 
               { hid: 'twitter:site', name: 'twitter:site', content: '@publisher_handle' }, 
               { hid: 'twitter:title', name: 'twitter:title', content: 'SUMAQ - Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'twitter:description', name: 'twitter:description', content: 'Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'twitter:creator', name: 'twitter:creator', content: '@author_handle' }, 
               { hid: 'twitter:image', name: 'twitter:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               // Open Graph data
               { hid: 'og:title',name: 'og:title', content: 'SUMAQ.pe - Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'og:type', name: 'og:type', content: 'article' }, 
               { hid: 'og:url', name: 'og:url', content: 'https://floreriasumaq.pe/' }, 
               { hid: 'og:image', name: 'og:image', content: 'https://floreriasumaq.pe/facebook.jpeg' }, 
               { hid: 'og:description', name: 'og:description', content: 'Bienvenido en donde podras encontrar el regalo perfecto' }, 
               { hid: 'og:site_name', name: 'og:site_name', content: 'SUMAQ.pe' }, 
               { hid: 'article:published_time', name: 'article:published_time', content: '2020-06-33T05:59:00+01:00' }, 
               { hid: 'article:modified_time', name: 'article:modified_time', content: '2020-12-33T05:59:00+01:00' }, 
               { hid: 'article:section', name: 'article:section', content: 'Article Section' }, 
               { hid: 'article:tag', name: 'article:tag', content: 'Article Tag' }, 
               ]
          }
     },
     mounted () {
          //this.animationScrollDown()
          // try {
          //      return this.$axios.get('home')
          //      .then(res => {
          //           console.log(res)
          //           return {
          //                data: res
          //           }
          //      }) 
          // }catch(e){
          //      console.log(e)
          // }finally{
          //      console.log('fin')
          // }
     },
     methods : {
         animationScrollDown(){
              
               // Seccion productos mas comprados

               const pingSectionHomeTwo = '.destacadosHome' 
               const pageDestacadosHome = '.destacadosHome .animationSection'
               const parallaxTl2 = gsap.timeline({
                    ease: 'none',
                    scrollTrigger: {
                         trigger: pingSectionHomeTwo,
                         start: 'top bottom-=30%',
                         end: 'top bottom-=30%',
                         scrub: false, // permite que la animacion se vuelva a reproducir(true)
                         markers: false,
                         // onLeave: () => { console.log('onLeave'); },
                         // onEnter: () => { console.log('onEnter'); },
                         // onEnterBack: () => { console.log('onEnterBack'); },
                    }
               })
               parallaxTl2
                    .from(pageDestacadosHome, {duration: .5, opacity: 0, yPercent: 10, ease: "power2.out"})
               

               // Seccion nuestros planes

               const pingSectionHomeThree = '.planesHome' 
               const boxTitleH2 = '.planesHome .boxTitle h2'
               const boxSubtitleImg = '.planesHome .boxSubtitle img'
               const boxSubtitleH3 = '.planesHome .boxSubtitle h3'
               const boxPlanes = '.planesHome .boxPlanes'
               const parallaxTl3 = gsap.timeline({
                    ease: 'none',
                    scrollTrigger: {
                         trigger: pingSectionHomeThree,
                         start: 'top bottom-=30%',
                         end: 'top bottom-=30%',
                         scrub: false, // permite que la animacion se vuelva a reproducir(true)
                         markers: false,
                         // onLeave: () => { console.log('onLeave'); },
                         // onEnter: () => { console.log('onEnter'); },
                         // onEnterBack: () => { console.log('onEnterBack'); },
                    }
               })
               parallaxTl3
                    .from(boxTitleH2, {duration: .5, opacity: 0, yPercent: 10, ease: "power2.out"})
                    .from(boxSubtitleImg, {duration: .5, scale: 0, ease: "power2.out"})
                    .from(boxSubtitleH3, {duration: .5, opacity: 0, yPercent: 10, ease: "power2.out"})
                    .from(boxPlanes, {duration: .5, opacity: 0, yPercent: 10, ease: "power2.out"})
               
               //  Seccion Beneficios
               const pingSectionHomeFour = '.beneficioHome' 
               const flor1 = '.beneficioHome .flor1'
               const parallaxTl4 = gsap.timeline({
                    ease: 'none',
                    scrollTrigger: {
                         trigger: pingSectionHomeFour,
                         start: 'top bottom-=20%',
                         end: 'top bottom-=20%',
                         scrub: false, // permite que la animacion se vuelva a reproducir(true)
                         markers: true,
                         // onLeave: () => { console.log('onLeave'); },
                         // onEnter: () => { console.log('onEnter'); },
                         // onEnterBack: () => { console.log('onEnterBack'); },
                    }
               })
               parallaxTl4
                    .from(flor1, {duration: .5, scale: 0, ease: "power2.out"})

         }
     }
}
</script>
<style lang="sass">
     ._destacado_movil
          display: block
          @media screen and (min-width: 992px)
               display: none
     ._destacado_pc
          display: none
          @media screen and (min-width: 992px)
               display: block
     .fixedWhatsApp
          position: fixed
          right: 1.5rem
          bottom: 6rem
          z-index: 400
          @media screen and (min-width: 992px)
               bottom: 8rem
          @media screen and (min-width: 1200px)
               bottom: 9rem
          @media screen and (min-width: 1400px)
               bottom: 9rem
          img
               width: 60px
               @media screen and (min-width: 992px)
                    width: 70px
               @media screen and (min-width: 1200px)
                    width: 75px
               @media screen and (min-width: 1400px)
                    width: 98px

</style>