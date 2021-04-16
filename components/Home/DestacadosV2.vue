<template>
     <div class="destacadosHome">
          <div class="animationSection">
               <div class="container-fluid container-fluid-xxl">
                    <div class="boxDestacadoTop">
                         <div class="boxVector pos1">
                              <picture>
                                   <img src="@/assets/images/vect5.png" />
                              </picture>
                         </div>
                         <div class="boxVector pos2">
                              <picture>
                                   <img src="@/assets/images/vect2.png" />
                              </picture>
                         </div>
                         <div class="boxVector pos3">
                              <picture>
                                   <img src="@/assets/images/vect6.png" />
                              </picture>
                         </div>
                         <div class="row">
                              <div class="col-6 col-xl-7">
                                   <div class="d-flex justify-content-start align-items-start ">
                                        <picture class="imageFlorTitle">
                                             <img src="@/assets/images/flor7.png" alt="Recomendaciones del Florista">
                                        </picture>
                                        <div class="boxTitle">
                                             <h2>Recomendaciones de nuestros floristas <br>para cada ocasión especial...</h2>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-6 col-xl-5">
                                   <div class="d-flex justify-content-end align-items-center">
                                        <div class="boxSearch">
                                             <p>¿Tienes una ocasión especial?</p>
                                             <div class="select">
                                                  <b-form-select v-model="selected" :options="options"></b-form-select>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="separate"></div>
                         <div class="row">
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d1.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Ramo Ana Lucia1</h5>
                                                  <h5 class="card-price">S/ 155.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 299.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d2.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Canasta Luxury</h5>
                                                  <h5 class="card-price">S/ 89.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 99.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d3.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Peluche Unicornio</h5>
                                                  <h5 class="card-price">S/ 35.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 49.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d5.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Eclairs</h5>
                                                  <h5 class="card-price">S/ 45.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 299.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>

                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d6.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Ramo Ana Lucia</h5>
                                                  <h5 class="card-price">S/ 155.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 299.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d8.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Canasta Luxury</h5>
                                                  <h5 class="card-price">S/ 89.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 99.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d7.jpg" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Peluche Unicornio</h5>
                                                  <h5 class="card-price">S/ 35.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 49.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              <div class="col-6 col-md-4 col-lg-3">
                                   <div class="card">
                                        <nuxt-link to="/">
                                             <figure>
                                                  <img src="~/assets/images/d9.png" class="card-img-top">
                                             </figure>
                                             <div class="card-body">
                                                  <h5 class="card-title">Eclairs</h5>
                                                  <h5 class="card-price">S/ 45.00</h5>
                                                  <h5 class="card-price-old">Antes: <span>S/ 299.00</span></h5>
                                             </div>
                                        </nuxt-link>
                                   </div>
                              </div>
                              
                              
                         </div>
                         <div class="boxButtonTienda d-flex justify-content-center align-items-center">
                              <button>Ver tiende de Amor / Aniversario</button>
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
                    selected: null,
                    options: [
                         { value: null, text: '- Selecciona Ocasión -' },
                         { value: 'a', text: 'Amor / Aniversario' },
                         { value: 'b', text: 'Condolencias' },
                         { value: 'c', text: 'Cumpleaños' },
                         { value: 'c', text: 'Gracias' },
                         { value: 'c', text: 'Nacimiento' },
                    ]
               }
          },
          methods: {
               addBlur: function(event){
                    console.log(event.target.parentElement)
               },
               removeBlur: function(event){
                    console.log(event)
               }
          }
     }
</script>
<style lang="sass">
     .destacadosHome
          background-image: url('@/assets/images/fondoBlog.jpg')
          background-repeat: repeat
          background-position: 0 0
          position: relative
          z-index: 50
          &:after
               content: ''
               position: absolute
               bottom: 0
               left: 0
               width: 100%
               height: 35rem
               background: white
               @media screen and (min-width: 992px)
                    height: 32rem
               @media screen and (min-width: 1200px)
                    height: 33rem
               @media screen and (min-width: 1400px)
                    height: 35rem

          .boxButtonTienda
               padding-top: 1rem 
               position: relative
               z-index: 30
               button
                    background: $brown
                    @include font-libre(.813rem,.8rem,.785rem,.7rem,$Montserrat,600,white)
                    border: 0
                    line-height: 3em
                    padding: 0 2rem
                    border-radius: 30px
                    @media screen and (min-width: 992px)
                         line-height: 4em
                         padding: 0 2.85rem
                    @media screen and (min-width: 1200px)
                         line-height: 4.5em
                         padding: 0 4rem
          .boxDestacadoTop
               padding-top: 4.5rem
               padding-bottom: 16rem
               padding-left: 
               padding-right: 0
               position: relative
               z-index: 10
               @media screen and (min-width: 992px)
                    padding-top: 3rem 
               @media screen and (min-width: 1200px)
                    padding-top: 3.5rem
               @media screen and (min-width: 1400px)
                    padding-top: 4.5rem
               .boxVector
                    position: absolute
                    &.pos3
                         bottom: 0
                         right: 0
                         @media screen and (min-width: 992px)
                              right: -9.5rem
                              bottom: -6.5rem
                              // left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              right: -9.5rem
                              bottom: -7.5rem
                              // left: -6rem 
                         @media screen and (min-width: 1400px)
                              bottom: -8.5rem
                              right: -10rem
                              // left: -11.15rem  
                         picture
                              opacity: .75
                              img
                                   width: 421px
                                   @media screen and (min-width: 992px)
                                        width: 350px 
                                   @media screen and (min-width: 1200px)
                                        width: 380px
                                   @media screen and (min-width: 1400px)
                                        width: 400px
                    &.pos2
                         bottom: 0
                         left: 50%
                         transform: translateX(-50%)
                         @media screen and (min-width: 992px)
                              transform: translateX(-70%)
                              bottom: -20.5rem
                              // left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              transform: translateX(-70%)
                              bottom: -21rem
                              // left: -6rem 
                         @media screen and (min-width: 1400px)
                              bottom: -22.25rem
                              transform: translateX(-70%)
                              // left: -11.15rem  
                         picture
                              // opacity: .75
                              img
                                   width: 542px
                                   @media screen and (min-width: 992px)
                                        width: 500px 
                                   @media screen and (min-width: 1200px)
                                        width: 520px
                                   @media screen and (min-width: 1400px)
                                        width: 542px
                    &.pos1
                         bottom: 0
                         left: 0 
                         @media screen and (min-width: 992px)
                              bottom: 16.75rem
                              left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              bottom: 15.55rem
                              left: -6rem 
                         @media screen and (min-width: 1400px)
                              bottom: 13.05rem
                              left: -11.15rem  
                         picture
                              opacity: .75
                              img
                                   width: 618px
                                   @media screen and (min-width: 992px)
                                        width: 350px 
                                   @media screen and (min-width: 1200px)
                                        width: 400px
                                   @media screen and (min-width: 1400px)
                                        width: 490px
               .separate
                    width: 100%
                    height: 2rem
          .imageFlorTitle
               margin-right: .25rem
               img
                    width: 96px
                    @media screen and (min-width: 992px)
                         width: 70px
                    @media screen and (min-width: 1200px)
                         width: 80px
                    @media screen and (min-width: 1400px)
                         width: 96px
          .boxSearch
               .select
                    width: 264px
                    height: 60px
                    border-radius: 10px
                    position: relative
                    border: 1px solid $grayLight2
                    margin-top: .5rem
                    overflow: hidden
                    cursor: pointer
                    @media screen and (min-width: 992px)
                         width: 330px
                         height: 45px
                         border-radius: 10px
                    @media screen and (min-width: 1200px)
                         width: 380px
                         height: 50px
                         border-radius: 10px
                    @media screen and (min-width: 1400px)
                         width: 400px
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
                         @include font-libre(0.875rem,.825rem,.775rem,.7rem,$Montserrat,600,$grayDark7)
                         padding: 0rem 1rem
                         appearance: none
                         cursor: pointer
                         outline: 0
                         box-shadow: none
                         background: $whiteGray
                         background-image: none
                         
               p
                    @include font-libre(1.375rem,1.35rem, 1.2rem,.85rem,$Playfair,400,$blackLight)
                    font-style: italic
          .boxTitle
               h2
                    @include font-libre(2.375rem,1.95rem, 1.75rem,.85rem,$Playfair,400,$black)
                    font-style: italic
          .card
               border: 0
               margin: 0rem 0 3rem
               background: transparent
               a
                    text-decoration: none
                    &.blur
                         filter: blur(1rem)
                    figure
                         overflow: hidden
                         margin: 0
                         border-radius: 10px
                         img
                              border-radius: 0
                              height: auto
                              transition: 1s ease transform
                              @media screen and (min-width: 992px)
                                   height: auto
                    &:hover
                         img
                              transform: scale(1.3)
                    .card-body
                         padding: .85rem 0 0 1.25rem
                         h5
                              @include font-libre(1.5rem,1.35rem,1.25rem,.85rem,$Playfair,400,$blackLight)
                              text-align: left
                              &.card-price-old
                                   @include font-libre(.875rem,.825rem,.75rem,.7rem,$Roboto,400,$grayLight3)
                                   span
                                        position: relative
                                        display: inline-block
                                        &:before,
                                        &:after
                                             content: ''
                                             position: absolute
                                             top: 50%
                                             transform: translateY(-50%)
                                             width: 50%
                                             left: 0
                                             right: auto 
                                             background: $grayLight3
                                             height: 1px
                                        &:after
                                             right: 0
                                             left: auto

</style>