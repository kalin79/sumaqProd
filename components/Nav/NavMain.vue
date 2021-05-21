<template>
     <nav class="navMain">
          <ul class="d-flex flex-row align-items-end justify-content-start">
               <li v-for="(items, index) in getMenuMain" :key="index" >
                    <div v-if="items.special_date === 1" class="daySpecial">
                         <nuxt-link :to="`/fecha-especial${items.link}`" class="d-flex flex-column align-items-center">
                              <img :src="'https://admin.floreriasumaq.pe/images/menus/'+items.icon" :alt="items.name">
                              <span>{{ items.name }}</span>
                         </nuxt-link>
                    </div>
                    <div v-else-if="items.name === 'Tienda' " class="menuTienda" v-on:click="viewTienda()">
                         <a href="javascript:void(0)">
                              <span>{{ items.name }}</span>
                              <client-only>
                                   <b-icon-chevron-down class="icon-chevron-down"></b-icon-chevron-down>
                              </client-only>
                              <div class="lineTienda"></div>
                         </a>
                         <div class="contentNavTienda">
                              <div>
                                   <div class="d-flex flex-row align-items-stretch justify-content-start flex-wrap">
                                        <div class="itemsNav" v-for="(tienda, index) in getTiendas" :key="index">
                                             <div class="boxTitle d-flex flex-row align-items-center justify-content-start">
                                                  <img :src="tienda.icon" :alt="tienda.title">
                                                  <h3>{{ tienda.title }}</h3>
                                             </div>
                                             <div class="boxOptionMenu">
                                                  <ul class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                                       <li v-for="(subcategories, index) in tienda.sub_categorias" :key="index">
                                                            <nuxt-link :to="`/tienda${subcategories.link}`" class="">{{ subcategories.title }}</nuxt-link>
                                                       </li>
                                                  </ul>
                                                  <ul class="d-flex flex-row align-items-start justify-content-between flex-wrap">
                                                       <li></li>
                                                       <li>
                                                            <nuxt-link :to="`/tienda${tienda.link}`" class="">{{ tienda.subtitle }}</nuxt-link>
                                                       </li>
                                                  </ul>
                                                  
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div v-else>
                         <nuxt-link :to="`${items.link}`">
                              <span>{{ items.name }}</span>
                         </nuxt-link>
                    </div>
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
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     data() {
          return {
               anterior: 0
          }
     },
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
     computed: {
          ...mapGetters('menu/', ['getMenuMain']),
          ...mapGetters('generaldata/', ['getTiendas']),
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
                    > div
                         @media screen and (min-width: 1200px)
                              margin: 0 .65rem
                         @media screen and (min-width: 1400px)
                              margin: 0 1rem
                    .menuTienda
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
                              border-left: 1px solid $greenLight4 
                              border-bottom: 1px solid $greenLight4 
                              border-right: 1px solid $greenLight4 
                              border-top: 1px solid $greenLight4 
                              background: white
                              overflow: hidden
                              display: none
                              @media screen and (min-width: 992px)
                                   left: -9.45rem
                                   top: 2.7rem
                              @media screen and (min-width: 1200px)
                                   left: -10.85rem
                                   top: 2.55rem
                                   width: 902px
                              @media screen and (min-width: 1400px)
                                   left: -12.75rem
                                   top: 2.55rem
                                   width: 992px
                              &.active
                                   display: block
                              .boxItemsNoBorder
                                   .itemsNav
                                        padding-top: .75rem 
                                        padding-bottom: 2.5rem
                                        border-bottom: 0px solid $greenLight4
                              .itemsNav
                                   padding: 1rem 1.25rem 1.75rem
                                   border-right: 1px solid $greenLight4
                                   border-bottom: 1px solid $greenLight4
                                   width: 300px
                                   @media screen and (min-width: 992px)
                                        padding: 1rem 1.5rem 1.5rem
                                        width: 270px
                                   @media screen and (min-width: 1200px)
                                        padding: 1rem .5rem 1.5rem 1.5rem
                                        width: 300px
                                   @media screen and (min-width: 1400px)
                                        padding: 1rem 2.5rem 1.5rem 1.5rem
                                        width: 330px
                                   &:nth-child(3n)
                                        border-right: 0px solid red
                                        
                                   
                              .boxOptionMenu
                                   ul
                                        margin: 0 1rem 0 0
                                        padding: 0
                                        list-style: none
                                        @media screen and (min-width: 992px)
                                             margin: 0 1rem 0 0
                                        @media screen and (min-width: 1200px)
                                             margin: 0 0rem 0 0
                                        @media screen and (min-width: 1400px)
                                             margin: 0 0rem 0 0
                                        &:last-child
                                             margin-right: 0
                                        li 
                                             line-height: 1em
                                             @media screen and (min-width: 992px)
                                                  line-height: 1em
                                             @media screen and (min-width: 1200px)
                                                  line-height: 1.15em
                                                  width: 55% 
                                             @media screen and (min-width: 1400px)
                                                  line-height: 1.25em
                                                  width: 50% 
                                             &:nth-child(odd)
                                                  @media screen and (min-width: 1200px)
                                                      width: 45% 
                                                  @media screen and (min-width: 1400px)
                                                      width: 50% 
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
                    .daySpecial
                         a
                              span,
                              svg
                                   color: $pinkLight



</style>