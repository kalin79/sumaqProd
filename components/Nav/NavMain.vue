<template>
     <nav class="navMain">
          <ul class="d-flex flex-row align-items-end justify-content-start">
               <li>
                    <a href="/">
                         <span>home</span>
                    </a>
               </li>
               <li class="daySpecial">
                    <a href="/" class="d-flex flex-column align-items-center">
                         <img src="@/assets/images/corazon2.png" alt="DÍA DE LA MADRE">
                         <span>DÍA DE LA MADRE</span>
                    </a>
               </li>
               <li class="menuTienda" v-on:click="viewTienda()">
                    <a href="javascript:void(0)">
                         <span>tienda</span>
                         <client-only>
                              <b-icon-chevron-down class="icon-chevron-down"></b-icon-chevron-down>
                         </client-only>
                         <div class="lineTienda"></div>
                    </a>
                    <div class="contentNavTienda">
                         <div>
                              <div class="d-flex flex-row align-items-stretch justify-content-start">
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_planta.png" alt="PLANTAS">
                                             <h3>PLANTAS</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Anturios</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Kokedamas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Orquídeas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Plantas de exterior</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Plantas de Interior</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Suculentas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas las plantas</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_flores.png" alt="FLORES">
                                             <h3>FLORES</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Anturios</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Kokedamas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Orquídeas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Plantas de exterior</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Plantas de Interior</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Suculentas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Rosas</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas las flores</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_ocacion.png" alt="OCASIONES">
                                             <h3>OCASIONES</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Amor/Aniversario</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Cumpleaños</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Gracias</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Graduación</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Nacimiento</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Amor Propio</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Inauguración</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Mejorate pronto</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Condolencias</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Línea Premium</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Promociones</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas las ocasiones</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                         <div class="boxItemsNoBorder">
                              <div class="d-flex flex-row align-items-stretch justify-content-start">
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_regalos.png" alt="REGALOS">
                                             <h3>REGALOS</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Boards</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Cerámica</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Globos</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Joyas</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Peluches</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas los regalos</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_eventos.png" alt="EVENTOS FLORALES">
                                             <h3>EVENTOS FLORALES</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Corporativos</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Cumpleaños</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Decoración floral</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Novios</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Quinceañeros</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas las eventos florales</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                                   <div class="itemsNav">
                                        <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                             <img src="@/assets/images/icon_postres.png" alt="POSTRES">
                                             <h3>POSTRES</h3>
                                        </div>
                                        <div class="boxOptionMenu d-flex flex-row align-items-start justify-content-between">
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Brownies</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Chocolates</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Helados</nuxt-link>
                                                  </li>
                                                  <li>
                                                       <nuxt-link to="/" class="">Tortas</nuxt-link>
                                                  </li>
                                             </ul>
                                             <ul>
                                                  <li>
                                                       <nuxt-link to="/" class="">Ver todas los postres</nuxt-link>
                                                  </li>
                                             </ul>
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </li>
               <li>
                    <a href="/">
                         <span>SUSCRIPCIÓN FLORAL</span>
                    </a>
               </li>
               <li>
                    <a href="/">
                         <span>PLAN NOVIAS</span>
                    </a>
               </li>
               <li>
                    <a href="/">
                         <span>PLAN-IT!</span>
                    </a>
               </li>
               <li>
                    <a href="javascript:void(0)" class="btn-search">
                         <client-only>
                              <b-icon-search class="icon-search"></b-icon-search>
                         </client-only>
                    </a>
               </li>
          </ul>
     </nav>
</template>
<script>
export default {
     methods: {
          viewTienda (){
               const iconChev = $('.navMain .icon-chevron-down')
               const lineBar = $('.navMain .lineTienda')
               const contentNavTienda = $('.navMain .contentNavTienda')

               if (contentNavTienda.hasClass('active')){
                    iconChev.css('display','block')
                    lineBar.css('display','none')
                    contentNavTienda.removeClass('active')
               }else{
                    iconChev.css('display','none')
                    lineBar.css('display','block')
                    contentNavTienda.addClass('active')
               }
               
          }
     },
}
</script>
<style lang="sass">
     .navMain
          height: 100%
          .btn-search
               &:hover
                    .icon-search
                         color: $pinkLight
               .icon-search
                    color: $brown
          ul
               margin: 0
               list-style: none
               padding: 0
               height: 100%
               li
                    @include font-menu(600, .65rem, .65rem ,.7rem,.75rem, $brown, $pinkLight)
                    
                    &.menuTienda
                         position: relative
                         .lineTienda
                              position: absolute
                              bottom: -1.15rem
                              left: 0rem
                              width: 100%
                              height: 4px
                              background: $purpleLight2
                              z-index: 2
                              display: none
                              @media screen and (min-width: 992px)
                                   bottom: -1.15rem
                              @media screen and (min-width: 1200px)
                                   bottom: -1.15rem
                              @media screen and (min-width: 1400px)
                                   bottom: -1.15rem
                         .contentNavTienda
                              position: absolute
                              top: 2.15rem
                              left: -13rem
                              border-radius: 0 0 20px 20px
                              border: 1px solid $greenLight4 
                              background: white
                              overflow: hidden
                              display: none
                              @media screen and (min-width: 992px)
                                   left: -9.45rem
                                   top: 2.7rem
                              @media screen and (min-width: 1200px)
                                   left: -10.85rem
                                   top: 2.7rem
                              @media screen and (min-width: 1400px)
                                   left: -12.75rem
                                   top: 2.7rem
                              &.active
                                   display: block
                              .boxItemsNoBorder
                                   .itemsNav
                                        padding-top: .75rem 
                                        padding-bottom: 2.5rem
                                        border-bottom: 0px solid $greenLight4
                              .itemsNav
                                   padding: 1rem 1.25rem 1.75rem
                                   border-bottom: 1px solid $greenLight4
                                   border-right: 1px solid $greenLight4
                                   width: 300px
                                   @media screen and (min-width: 992px)
                                        padding: 1rem 1.5rem 1.5rem
                                        width: 270px
                                   @media screen and (min-width: 1200px)
                                        padding: 1rem 2rem 1.5rem 1.5rem
                                        width: 300px
                                   @media screen and (min-width: 1400px)
                                        padding: 1rem 2.5rem 1.5rem 1.5rem
                                        width: 330px
                                   &:last-child
                                        border-right: 0px solid $greenLight4
                                   
                              .boxOptionMenu
                                   ul
                                        margin: 0 1rem 0 0
                                        padding: 0
                                        list-style: none
                                        @media screen and (min-width: 992px)
                                             margin: 0 1rem 0 0
                                        @media screen and (min-width: 1200px)
                                             margin: 0 1.25rem 0 0
                                        @media screen and (min-width: 1400px)
                                             margin: 0 1.5rem 0 0
                                        &:last-child
                                             margin-right: 0
                                        li
                                             line-height: 1em
                                             @media screen and (min-width: 992px)
                                                  line-height: 1em
                                             @media screen and (min-width: 1200px)
                                                  line-height: 1.15em
                                             @media screen and (min-width: 1400px)
                                                  line-height: 1.25em
                                             a
                                                  @include font-libre(.75rem,.65rem, .6rem,.6rem,$Montserrat,500,$grayDark5)  
                                                  text-transform: none 
                                                  letter-spacing: -.05em
                                                  text-decoration: underline
                              .boxTitle
                                   padding-bottom: .75rem
                                   h3
                                        @include font-libre(.75rem,.65rem, .6rem,.6rem,$Montserrat,700,$brown)
                                        margin-left: .5rem
                                        margin-top: .25rem
                    &.daySpecial
                         a
                              span,
                              svg
                                   color: $pinkLight



</style>