<template>
     <div class="planesHome">
          <div class="boxAdorno">
               <picture>
                    <img src="@/assets/images/adorno.png" />
               </picture>
          </div>
          <div class="container-fluid container-fluid-xxl">
               <div class="boxConentPlanes">
                    <div class="boxFlor pos1">
                         <picture>
                              <img src="@/assets/images/vect7.png" />
                         </picture>
                    </div>  
                    <div class="boxFlor pos2">
                         <picture>
                              <img src="@/assets/images/vect6.png" />
                         </picture>
                    </div>   
                    <div class="boxTitle">
                         <h2>planes</h2>
                         <div class="boxSubtitle">
                              <div class="d-flex flex-column justify-content-center align-items-center">
                                   <!-- <img src="@/assets/images/icon-plan.png" alt="planes"> -->
                                   <h3>Conoce nuestros planes</h3>
                              </div>
                         </div>
                    </div>
                    <div class="row boxPlanes">
                         <div class="col-4 col-xl-4">
                              <a href="javascript:void(0)" class="itemPlan">
                                   <div class="boxBackground">
                                        <div class="boxPicture">
                                             <img src="@/assets/images/plan1.jpg" class="boxBackgroundImage"/>
                                             <div class="linePicture d-flex flex-column justify-content-end align-items-start">
                                                  <div class="boxTitle">
                                                       <h2>Suscripción Floral</h2>
                                                       <h3>AHORRA HASTA UN 40% EN LA TIENDA</h3>
                                                  </div>
                                                  <div class="boxInfo">
                                                       <div class="d-flex flex-row justify-content-end align-items-center ">
                                                            <p>MÁS INFORMACIÓN</p>
                                                            <client-only>
                                                                 <b-icon-chevron-right class="icon-chevron"></b-icon-chevron-right>
                                                            </client-only>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </a>
                         </div>
                         <div class="col-4 col-xl-4">
                              <a href="javascript:void(0)" class="itemPlan">
                                   <div class="boxBackground">
                                        <div class="boxPicture">
                                             <img src="@/assets/images/plan2.jpg" class="boxBackgroundImage"/>
                                             <div class="linePicture d-flex flex-column justify-content-end align-items-start">
                                                  <div class="boxTitle">
                                                       <h2>Plan para Novias</h2>
                                                       <h3>EL MOMENTO MÁS ESPECIAL DE TU VIDA</h3>
                                                  </div>
                                                  <div class="boxInfo">
                                                       <div class="d-flex flex-row justify-content-end align-items-center ">
                                                            <p>MÁS INFORMACIÓN</p>
                                                            <client-only>
                                                                 <b-icon-chevron-right class="icon-chevron"></b-icon-chevron-right>
                                                            </client-only>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </a>
                         </div>
                         <div class="col-4 col-xl-4">
                              <a href="javascript:void(0)" class="itemPlan">
                                   <div class="boxBackground">
                                        <div class="boxPicture">
                                             <img src="@/assets/images/plan3.jpg" class="boxBackgroundImage"/>
                                             <div class="linePicture d-flex flex-column justify-content-end align-items-start">
                                                  <div class="boxTitle">
                                                       <h2>Plan-it!</h2>
                                                       <h3>AHORRA HASTA UN 40% EN LA TIENDA</h3>
                                                  </div>
                                                  <div class="boxInfo">
                                                       <div class="d-flex flex-row justify-content-end align-items-center ">
                                                            <p>MÁS INFORMACIÓN</p>
                                                            <client-only>
                                                                 <b-icon-chevron-right class="icon-chevron"></b-icon-chevron-right>
                                                            </client-only>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<style lang="sass">
     .planesHome
          background-image: url('@/assets/images/fondoPlan.jpg')
          background-repeat: repeat
          background-position: 0 0
          padding: 0rem 0 0rem
          position: relative
          z-index: 80
          &:after
               content: ''
               background: white
               position: absolute
               bottom: 0
               left: 0
               width: 100%
               height: 20rem
          .boxConentPlanes
               padding-bottom: 15rem
          .container-fluid
               position: relative
               .boxFlor
                    position: absolute
                    z-index: 11
                    &.pos2
                         bottom: 0
                         right: 0
                         @media screen and (min-width: 992px)
                              bottom: -27.5rem
                              right: -6.5rem
                         @media screen and (min-width: 1200px)
                              bottom: -30.5rem
                              right: -8rem
                         @media screen and (min-width: 1400px)
                              bottom: -32rem
                              right: -13rem
                         picture
                              opacity: .5
                              img
                                   width: 421px
                                   @media screen and (min-width: 992px)
                                        width: 360px
                                   @media screen and (min-width: 1200px)
                                        width: 400px
                                   @media screen and (min-width: 1400px)
                                        width: 421px
                    &.pos1
                         bottom: 0
                         left: 50%
                         transform: translateX(-50%)
                         @media screen and (min-width: 992px)
                              left: 27%
                              transform: translateX(35%)
                              bottom: -2.5rem
                              // left: -5.25rem 
                         @media screen and (min-width: 1200px)
                              left: 27%
                              transform: translateX(22%)
                              bottom: .35rem
                              // left: -6rem 
                         @media screen and (min-width: 1400px)
                              left: 27%
                              transform: translateX(27%)
                              bottom: 1.5rem
                         picture
                              opacity: .25
                              img
                                   width: 300px
                                   @media screen and (min-width: 992px)
                                        width: 400px
                                   @media screen and (min-width: 1200px)
                                        width: 300px
                                   @media screen and (min-width: 1400px)
                                        width: 300px
          .boxAdorno
               position: absolute
               top: -4rem
               left: 50%
               transform: translateX(-50%)
          .boxPlanes
               position: relative
               z-index: 60
               padding-left: 15px
               padding-right: 15px
               >div
                    padding-left: 0
                    padding-right: 0
               .itemPlan
                    display: block
                    height: 380px
                    box-sizing: border-box
                    overflow: hidden
                    text-decoration: none
                    @media screen and (min-width: 992px)
                         height: 430px
                    @media screen and (min-width: 1200px)
                         height: 500px
                    @media screen and (min-width: 1400px)
                         height: 579px
                    .boxBackground
                         height: 100%
                         position: relative
                    .boxPicture
                         padding: 1.5rem
                         height: 100%
                         .boxBackgroundImage
                              position: absolute
                              top: 0
                              left: 0
                              z-index: 1
                              width: 100%
                              height: 100%
                              object-fit: cover
                              transition: 1s ease transform
                         .linePicture
                              border: 1px solid rgba(white,.45)
                              height: 100%
                              padding: 0 .5rem 1rem
                              position: relative
                              z-index: 2
                         .boxInfo
                              width: 100%
                               
                              p
                                   @include font-libre(.7rem,.6rem,.6rem,.55rem,$Montserrat,700,black)
                              .icon-chevron
                                   color: black
                                   font-size: .85rem 
                         .boxTitle
                              padding-bottom: 2.5rem 
                              h2
                                   @include font-libre(2.125rem,2rem,1.85rem,1.65rem,$Playfair,400,$blackLight)
                                   font-style: italic
                                   text-align: left
                              h3
                                   @include font-libre(1rem,.85rem,.75rem,.7rem,$Montserrat,400,$blackLight2)
                                   line-height: 2.5rem
                                   @media screen and (min-width: 992px)
                                        line-height: 1.95rem
                                   @media screen and (min-width: 1200px)
                                        line-height: 2.25rem
                                   @media screen and (min-width: 1400px)
                                        line-height: 2.5rem
                    &:hover
                         .boxBackgroundImage
                              transform: scale(1.3)


          .boxTitle
               position: relative
               .boxSubtitle
                    position: absolute
                    top: 40%
                    width: 100%
                    @media screen and (min-width: 992px)
                         top: 35%
                    @media screen and (min-width: 1200px)
                         top: 35%
                    @media screen and (min-width: 1400px)
                         top: 35%
                    h3
                         @include font-libre(2.375rem,2.25rem,2rem,1.4rem,$Playfair,400,black)
                         font-style: italic
                         line-height: 1.5rem

                    img
                         width: 40px
                         margin: 0
               h2
                    @include font-libre(16.25rem,14.25rem,14.25rem,9rem,$Playfair,500,$brownLight)
                    line-height: .85em
                    font-style: italic
                    text-align: center

</style>