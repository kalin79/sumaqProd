<template>
     <div class="homeCategory">
          <div class="container-fluid container-fluid-xxl">
               <div class="boxVector pos1">
                    <img src="@/assets/images/vect1.png" alt="Flor"/>
               </div>
               <div class="boxVector pos2">
                    <img src="@/assets/images/vect2.png" alt=""/>
               </div>
               <div class="boxVector pos3">
                    <img src="@/assets/images/vect6.png" alt=""/>
               </div>
               <div class="boxVector pos4">
                    <img src="@/assets/images/vect4.png" alt=""/>
               </div>
               <div class="boxTitle">
                    <figure>
                         <img src="@/assets/images/flor.png" alt="Flor"/>
                    </figure>
                    <h2>Tiendas por categoría</h2>
                    <p>Encuentra ese detalle para toda ocasión, desde unos <br>tulipanes.</p>
               </div>
               <div class="boxListCategories">
                    
                    <div class="row">
                         <div class="col-6 col-xl-6">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat1.jpg" alt="Flores">
                                        </picture>
                                        <div class="boxContent">
                                             <h3>Flores</h3>
                                             <p>Anturios, Girasoles, Lirios, Margaritas</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                         <div class="col-3 col-xl-3">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat2.jpg" alt="Postres">
                                        </picture>
                                        <div class="boxContent type-1">
                                             <h3>Postres</h3>
                                             <p>Brownies, Tortas, Helados, Chocolates</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                         <div class="col-3 col-xl-3">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat3.jpg" alt="Regalos">
                                        </picture>
                                        <div class="boxContent type-1">
                                             <h3>Regalos</h3>
                                             <p>Peluches, Cerámiscas, Globos, Joyas</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                    </div>
                    <div class="separate"></div>
                    <div class="row">
                         <div class="col-3 col-xl-3">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat4.jpg" alt="Eventos Florales">
                                        </picture>
                                        <div class="boxContent type-1">
                                             <h3>Eventos Florales</h3>
                                             <p>Novios, Corporativos, Quinceañeros</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                         <div class="col-3 col-xl-3">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat5.jpg" alt="Plantas">
                                        </picture>
                                        <div class="boxContent type-1">
                                             <h3>Plantas</h3>
                                             <p>Anturios, Kokedamas, Orquídeas</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                         <div class="col-6 col-xl-6">
                              <NuxtLink to="/">
                                   <div class="boxCategory">
                                        <picture>
                                             <img src="@/assets/images/cat6.jpg" alt="Ocasiones">
                                        </picture>
                                        <div class="boxContent ">
                                             <h3>Ocasiones</h3>
                                             <p>Cumpleaños, Nacimiento, Gracias, Amor</p>
                                        </div>
                                   </div>
                              </NuxtLink>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     
}
</script>
<style lang="sass">
     .homeCategory
          padding: 1.25rem 0 2.5rem
          .boxListCategories
               padding: 3.85rem 0 
               position: relative
               z-index: 40
               @media screen and (min-width: 992px)
                    padding: 3rem 0
               @media screen and (min-width: 1200px)
                    padding: 3.45rem 0
               @media screen and (min-width: 1400px)
                    padding: 3.85rem 0
               .separate
                    width: 100%
                    height: 30px
               a
                    display: inline-block
                    height: 100%
                    &:focus,
                    &:active
                         outline: none
                         box-shadow: none
                    &:hover
                         .boxCategory
                              .boxContent
                                   transform: translate(-50%,-50%) scale(0)     
                    .boxCategory
                         position: relative
                         height: 100%
                         border-radius: 10px
                         overflow: hidden
                         .boxContent
                              position: absolute
                              background: rgba(white,.85)
                              top: 50%
                              left: 50%
                              transform: translate(-50%,-50%) scale(1)
                              padding: 2.45rem 1rem
                              width: 55%
                              text-align: center
                              transition: .35s ease-out transform
                              &.type-1
                                   width: 80%
                              h3
                                   @include font-libre(1.75rem,1.65rem, 1.35rem,.95rem,$Playfair,500,$black)
                                   font-style: italic
                                   margin-bottom: .25rem
                              p
                                   @include font-libre(0.875rem,.82rem, .7rem,.6rem,$Montserrat,500,$grayDark6)
                                   line-height: 1.5em
                         picture
                              img
                                   width: 100%
                                   object-fit: cover
                                   height: 100% 
                    
          .container-fluid
               position: relative
               padding-bottom: .75rem
               .boxVector
                    position: absolute
                    top: 0
                    z-index: 20
                    &.pos4
                         bottom: 0
                         top: auto
                         left: 0rem
                         @media screen and (min-width: 992px)
                              bottom: -16.35rem
                              left: 0rem
                         @media screen and (min-width: 1200px)
                              bottom: -18.65rem
                              left: 0rem
                         @media screen and (min-width: 1400px)
                              bottom: -20.5rem
                              left: 0rem
                         img
                              width: 389px
                              opacity: .5
                              @media screen and (min-width: 992px)
                                   width: 300px
                              @media screen and (min-width: 1200px)
                                   width: 350px
                              @media screen and (min-width: 1400px)
                                   width: 389px
                    &.pos3
                         top: 0
                         right: 0rem
                         left: auto
                         @media screen and (min-width: 992px)
                              top: 5.15rem
                              right: -4.5rem
                              left: auto
                         @media screen and (min-width: 1200px)
                              top: 5.9rem
                              right: -4.5rem
                              left: auto
                         @media screen and (min-width: 1400px)
                              top: 5.75rem
                              right: -6.5rem
                              left: auto
                         img
                              width: 421px
                              opacity: .5
                              @media screen and (min-width: 992px)
                                   width: 340px
                              @media screen and (min-width: 1200px)
                                   width: 350px
                              @media screen and (min-width: 1400px)
                                   width: 421px
                    &.pos2
                         top: 50%
                         left: 50%
                         transform: translate(-65%,-40%)
                         @media screen and (min-width: 992px)
                              transform: translate(-65%,-44%)
                         @media screen and (min-width: 1200px)
                              transform: translate(-65%,-50%)
                         @media screen and (min-width: 1400px)
                              transform: translate(-65%,-44%)
                         img
                              width: 556px
                              @media screen and (min-width: 992px)
                                   width: 460px
                              @media screen and (min-width: 1200px)
                                   width: 450px
                              @media screen and (min-width: 1400px)
                                   width: 542px
                    &.pos1
                         top: -12rem
                         left: -18rem
                         @media screen and (min-width: 992px)
                              top: -11.65rem
                              left: -14.85rem
                         @media screen and (min-width: 1200px)
                              top: -11.5rem
                              left: -14.5rem
                         @media screen and (min-width: 1400px)
                              top: -12rem
                              left: -18rem
                         img
                              width: 556px
                              @media screen and (min-width: 992px)
                                   width: 490px
                              @media screen and (min-width: 1200px)
                                   width: 500px
                              @media screen and (min-width: 1400px)
                                   width: 556px
          .boxTitle
               text-align: center
               figure
                    margin: 0
               h2
                    @include font-libre(2.375rem,2rem, 1.75rem,.95rem,$Playfair,500,$black)
                    font-style: italic
                    line-height: 1em
                    margin-bottom: .5rem
               p
                    @include font-libre(1rem,.85rem, .75rem,.6rem,$Montserrat,500,$grayDark6)
                    line-height: 1.75em

</style>