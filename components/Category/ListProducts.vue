<template>
     <div class="boxListProducts">
          <div class="container">
               <div class="boxFilters d-flex justify-content-between align-items-center">
                    <div class="filterSearch">
                         <div class="search-box">
                              <input type ="text" class ="txt" placeholder ="Buscar por nombre...">
                              <a class ="btn">
                                   <client-only>
                                        <b-icon-search></b-icon-search>
                                   </client-only>
                              </a>
                         </div>
                    </div>
                    <div class="filterPrices">
                         <div class="d-flex justify-content-start align-items-center">
                              <div class="boxTextFilter">
                                   <p>Ordernar por</p>
                              </div>
                              <div class="form-check">
                                   <b-form-radio v-model="price" name="sexo" value="Hombre">$ Mayor a menor</b-form-radio>
                              </div>
                              <div class="form-check">
                                   <b-form-radio v-model="price" name="sexo" value="Mujer">$ Menor a mayor</b-form-radio>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="boxProducts">
                    <div class="d-flex align-items-stretch justify-content-start flex-wrap">
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div class="box-item-product doble ">
                              <a href="javascript:void(0)" class="cardBox CardBoxBanner">
                                   <div class="cardImage ">
                                        <picture>
                                             <img src="~/assets/images/f1.jpg" alt="">
                                        </picture>
                                   </div>
                              </a>
                         </div>
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div class="box-item-product">
                              <div class="cardBox">
                                   <div class="cardImage">
                                        <a href="javascript:void(0)">
                                             <picture>
                                                  <img src="~/assets/images/f1.jpg" alt="">
                                             </picture>
                                             <picture>
                                                  <img src="~/assets/images/f2.jpg" alt="">
                                             </picture>
                                        </a>
                                        <a href="javascript:void(0)" class="CartText">
                                             <p>Agregar al carrito</p>
                                        </a>
                                   </div>
                                   <a href="javascript:void(0)" class="cardDetail">
                                        <div class="cardTitle">
                                             <h2>12 Rosas Blancas</h2>
                                        </div>
                                        <div class="cardPriceOld">
                                             <h3>S./ 123.90</h3>
                                        </div>
                                        <div class="cardPrice">
                                             <h3>S./ 23.90</h3>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     data() {
          return {
               price: null 
          }
     }
}
</script>
<style lang="sass">
     .boxListProducts
          .boxProducts
               padding: 3rem 0 1rem
               margin-left: -.5rem
               margin-right: -.5rem
               @media screen and (min-width: 992px)
                    margin-left: -1rem
                    margin-right: -1rem
               .box-item-product
                    flex: 0 0 50% 
                    max-width: 50%
                    margin: 0 0rem 3rem
                    padding: 0 .5rem
                    text-decoration: none
                    @include cardProduct
                    @media screen and (min-width: 992px)
                         flex: 0 0 25% 
                         max-width: 25%
                         padding: 0 1rem

                    &.doble
                         flex: 0 0 100% 
                         max-width: 100% 
                         @media screen and (min-width: 992px)
                              flex: 0 0 50% 
                              max-width: 50% 

          .boxTextFilter
               p
                    @include font-libre($font-sizeDescription,$font-sizeDescription,$font-sizeDescription,$font-sizeDescriptionM,$font-description,400,$grayDark)
          .form-check
               padding-left: 0
               label 
                    display: inline-block
                    cursor: pointer
                    color: $pink
                    position: relative
                    padding: 5px 15px 5px 40px
                    font-size: 1em
                    border-radius: 5px
                    transition: all .3s ease
                    &:hover 
                         background: rgba($pink, .1)
                    &:before 
                         content: ""
                         display: inline-block
                         width: 17px
                         height: 17px
                         position: absolute
                         left: 15px
                         top: 9px
                         border-radius: 50%
                         background: none
                         border: 3px solid $pink
               input[type="radio"]
                    display: none
                    &:checked + label:before 
                         display: none
                    &:checked + label 
                         padding: 5px 15px 
                         background: $pink
                         border-radius: 2px
                         color: #fff
          .filterSearch
               width: 40%
               position: relative
               height: 50px
          .search-box
               position: absolute
               top: 50%
               left: 50%
               transform: translate(-50%,-50%)
               background: #fff
               height: 40px
               border-radius: 40px
               padding: 4px 10px
               border: 1px solid $pink
               transition: 0.5s
               width: 50px
               &:hover
                    width: 300px
                    > .txt
                         width: 80%
                         padding: 0 6px
                         transition: all 1s
                    > .btn
                         > svg 
                              color: $pink
               .btn
                    color: #e84118
                    float: right
                    width: 30px
                    height: 30px
                    border-radius: 50%

                    display: flex
                    justify-content: center
                    align-items: center
                    transition: 0.4s
                    cursor: pointer
                    > svg
                         font-size: 1.35rem
                         color: $pink
               .txt
                    border: none
                    background: none
                    outline: none
                    float: left
                    @include font-libre($font-sizeDescription,$font-sizeDescription,$font-sizeDescription,$font-sizeDescriptionM,$font-description,300,$pink)
                    padding: 0 0 0 0px
                    transition: 0.4s all 0.1
                    line-height: 26px
                    width: 0px
                    &::placeholder
                         @include font-libre($font-sizeDescription,$font-sizeDescription,$font-sizeDescription,$font-sizeDescriptionM,$font-description,300,$pink)
</style>