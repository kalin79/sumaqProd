<template>
     <div class="filtroCategoria">
          <div class="container-fluid container-fluid-xxl">
               <div class="centerBeneficio">
                    <div class="d-flex justify-content-between align-items-center">
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-center">
                                   <figure>
                                        <img src="@/assets/images/icon-corazon.png" alt="">
                                   </figure>
                                   <p>
                                        Mostrando {{ viewTotalProducts }}<br> productos de {{ getPagination.total }}
                                   </p>
                              </div>
                         </div>
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-center">
                                   <p>
                                        Filtrar productos por:
                                   </p>
                                   <div class="boxSearch">
                                        <div class="select">
                                             <select v-model="selectOption" class="custom-select" @change="golistProductCategory()">
                                                  <option v-for="(objDataSelect, index) in getSubCategories" :key="index" v-bind:value="objDataSelect">
                                                       {{ objDataSelect.title }}
                                                  </option>
                                             </select>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <!-- {{ getDataCategoryNivel1.sub_categorias }} -->
                         <div class="itemBeneficio">
                              <div class="d-flex justify-content-start align-items-start" v-if="getDataCategoryNivel1.sub_categorias.length === 0">
                                   <nuxt-link to="/">
                                        <p class="brown">Home</p> 
                                   </nuxt-link>
                                   <p class="separateP brown">></p>
                                   <nuxt-link :to="`/tienda${getDataCategoryNivel1.link}`">
                                        <p class="brown">Tienda de {{ getDataCategoryNivel1.title }}</p> 
                                   </nuxt-link>
                              </div>
                              <div class="d-flex justify-content-start align-items-start" v-else>
                                   <nuxt-link to="/">
                                        <p class="brown">Home</p> 
                                   </nuxt-link>
                                   <p class="separateP brown">></p>
                                   <nuxt-link :to="`/tienda${getDataCategoryNivel1.link}`">
                                        <p class="brown">Tienda de {{ getDataCategoryNivel1.title }}</p> 
                                   </nuxt-link>
                                   <p class="separateP brown">></p>
                                   <nuxt-link :to="`/tienda${getDataCategoryNivel1.sub_categorias[0].link}`">
                                        <p class="brown">{{ getDataCategoryNivel1.sub_categorias[0].title }}</p> 
                                   </nuxt-link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     data() {
          return {
               selectOption: {"id": null, "title": "Selecciona", slug:'', "link": '', description:''}
          }
     },
     created() {
          if ( this.getDataCategoryNivel1.sub_categorias.length > 0)
               this.selectOption = this.getDataCategoryNivel1.sub_categorias[0]
     },
     computed: {
          ...mapGetters('products/', ['getPagination']),
          ...mapGetters('products/', ['getTypeNivelCategory']),
          ...mapGetters('products/', ['getDataCategoryNivel1']),
          ...mapGetters('products/', ['getSubCategories']),

          viewTotalProducts(){
               if (this.getPagination.current_page === this.getPagination.last_page)
                    return this.getPagination.total
               else
                    return (this.getPagination.per_page * this.getPagination.current_page)
          }
     },
     methods: {
          golistProductCategory(){
               if (this.selectOption.link != '')
                    this.$router.push(`/tienda${this.selectOption.link}`)
               else{
                    this.$router.push(`/tienda${this.getDataCategoryNivel1.link}`)
               }
          }
     },
}
</script>
<style lang="sass">
     .filtroCategoria
          
          .boxSearch
               margin-left: 1rem
               .select
                    width: 200px
                    height: 60px
                    border-radius: 10px
                    position: relative
                    border: 1px solid $grayLight2
                    margin-top: .5rem
                    overflow: hidden
                    cursor: pointer
                    @media screen and (min-width: 992px)
                         width: 200px
                         height: 45px
                         border-radius: 10px
                    @media screen and (min-width: 1200px)
                         width: 230px
                         height: 50px
                         border-radius: 10px
                    @media screen and (min-width: 1400px)
                         width: 230px
                         height: 60px
                         border-radius: 15px
                    &:focus,
                    &.active
                         outline: none
                         box-shadow: none
                         border: 1px solid $grayLight2
                    &:after
                         content: ''
                         background-image: url('@/assets/images/arrowcbx.png')
                         background-repeat: no-repeat
                         background-position: center
                         width: 14px
                         height: 10px
                         position: absolute
                         top: 50%
                         right: 1rem
                         transform: translateY(-50%)
                    .custom-select
                         width: 100%
                         height: 100%
                         border: 0
                         @include font-libre(0.875rem,.825rem,.775rem,.7rem,$Montserrat,600,$brown)
                         padding: 0rem 1rem
                         appearance: none
                         cursor: pointer
                         outline: 0
                         box-shadow: none
                         background: $whiteGray
                         background-image: none
          .container-fluid-xxl
               background: white
               position: relative
               height: 120px
               width: 100%
               // z-index: 4
               .centerBeneficio
                    position: absolute
                    background: white
                    top: 0
                    left: 50%
                    transform: translate(-50%,-40%) 
                    width: 90%
                    border: 1px solid $grayLight2
                    border-radius: 20px
                    box-sizing: border-box
                    padding: 2rem .5rem
                    box-shadow: 3px 5px 8px -5px rgba(black,.25)
                    z-index: 31
                    @media screen and (min-width: 992px)
                         padding: 2rem 2.75rem
                    @media screen and (min-width: 1200px)
                         padding: 2rem 4rem
                    a
                         text-decoration: none
                         position: relative
                         &:focus,
                         &:active,
                              outline: none
                              text-shadow: transparent
                         &::before
                              position: absolute
                              content: ''
                              height: 1px
                              width: 0
                              background: $brown
                              bottom: 0
                              left: 0 
                              transition: .5s ease width
                         &:hover
                              &::before
                                   width: 100%

                    p
                         @include font-libre(1rem,.95rem, .85rem,.85rem,$Montserrat,500,$blackLight)
                         line-height: 1.25em
                         &.brown
                              color: $brown
                         &.separateP
                              margin: 0 .5rem
                    .itemBeneficio
                         &:first-child,
                         &:last-child
                              display: none
                              @media screen and (min-width: 992px)
                                   display: block
                         figure
                              margin: 0 .75rem 0 0
                              img
                                   width: 30px
                                   @media screen and (min-width: 992px)
                                        width: 30px
                                   @media screen and (min-width: 1200px)
                                        width: 30px
                                   @media screen and (min-width: 1400px)
                                        width: 40px
                         

</style>
