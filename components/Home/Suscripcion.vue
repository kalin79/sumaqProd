<template>
     <div class="suscriptionHome">
          <div class="container-fluid container-fluid-xxl">
               <div class="boxFlor pos1">
                    <picture>
                         <img src="@/assets/images/vect1.png" />
                    </picture>
               </div> 
               <div class="boxFlor pos2">
                    <picture>
                         <img src="@/assets/images/vect6.png" />
                    </picture>
               </div>
               <div class="boxSuscriptionM boxSuscription">
                    <div class="row">
                         <div class="col-12">
                              <div class="boxInfo">
                                   <div class="boxInfoTop">
                                        <div class="boxIcon">
                                             <img src="@/assets/images/new.png" />
                                        </div>
                                        <div class="boxDetail">
                                             <h2>Newsletter</h2>
                                             <p>No te pierdas de las promociones y descuentos <br>en nuestra tienda.</p>
                                        </div>
                                        <div class="boxForm">
                                             <input type="email" class="form-control" placeholder="tucorreo@correo.com">
                                             <div class="boxButtonTienda d-flex justify-content-center align-items-center">
                                                  <button>SUSCRIBIRME</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="col-12">
                              <div class="boxInfo">
                                   <div class="boxInfoTop">
                                        <div class="boxIcon">
                                             <img src="@/assets/images/aten.png" />
                                        </div>
                                        <div class="boxDetail">
                                             <h2>Atención al cliente</h2>
                                             <p>Atendemos vía WhatsApp , Chat y Llamada: <br>Lunes a Sábado: 7:00 am - 5:00 pm</p>
                                        </div>
                                        <div class="boxComunicate">
                                             <div class="boxComunication d-flex justify-content-between align-items-center">
                                                  <a href="https://wa.link/7rz9o8" target="_blank">
                                                       <div class="d-flex justify-content-start align-items-center">
                                                            <img src="@/assets/images/wha.png" />
                                                            <p>(+51) 985 757 450</p>
                                                       </div>
                                                  </a>
                                                  <a href="mailto:hola@sumaq.pe?subject=Atención%20al%20cliente" target="_blank">
                                                       <div class="d-flex justify-content-start align-items-center">
                                                            <img src="@/assets/images/email.png" />
                                                            <p>hola@sumaq.pe</p>
                                                       </div>
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="boxSuscription">
                    <div class="boxNewsletter">
                         <div class="boxInfo">
                              <div class="boxInfoTop d-flex justify-content-start align-items-start">
                                   <div class="boxIcon">
                                        <img src="@/assets/images/new.png" />
                                   </div>
                                   <div class="boxDetail">
                                        <h2>Newsletter</h2>
                                        <p>No te pierdas de las promociones y descuentos <br>en nuestra tienda.</p>
                                   </div>
                              </div>
                              <div class="d-flex justify-content-start align-items-start boxForm">
                                   <input type="email" class="form-control" placeholder="tucorreo@correo.com">
                                   <div class="boxButtonTienda d-flex justify-content-center align-items-center">
                                        <button>SUSCRIBIRME</button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="boxLine d-flex justify-content-center align-items-center">
                         <div class="line"></div>
                    </div>
                    <div class="boxClient">
                         <div class="boxInfo">
                              <div class="boxInfoTop d-flex justify-content-start align-items-start">
                                   <div class="boxIcon">
                                        <img src="@/assets/images/aten.png" />
                                   </div>
                                   <div class="boxDetail">
                                        <h2>Atención al cliente</h2>
                                        <p>Atendemos vía WhatsApp , Chat y Llamada: <br>Lunes a Sábado: 7:00 am - 5:00 pm</p>
                                        <div class="boxComunication d-flex justify-content-between align-items-center">
                                             <a href="https://wa.link/i7kwid" target="_blank">
                                                  <div class="d-flex justify-content-start align-items-center">
                                                       <img src="@/assets/images/wha.png" />
                                                       <p>(+51) 985 757 450</p>
                                                  </div>
                                             </a>
                                             <a href="mailto:hola@sumaq.pe?subject=Atención%20al%20cliente" target="_blank">
                                                  <div class="d-flex justify-content-start align-items-center">
                                                       <img src="@/assets/images/email.png" />
                                                       <p>hola@sumaq.pe</p>
                                                  </div>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<style lang="sass">
     .suscriptionHome
          border-top: 0px solid $grayDark4
          position: relative
          z-index: 90
          @media screen and (min-width: 992px)
               border-top: 1px solid $grayDark4
          .container-fluid
               position: relative
               .boxFlor
                    position: absolute
                    
                    &.pos2
                         bottom: 8rem
                         right: 0
                         @media screen and (min-width: 992px)
                              bottom: -23.15rem
                              right: -16rem
                         @media screen and (min-width: 1200px) 
                              bottom: -24.55rem
                              right: -13rem
                         @media screen and (min-width: 1400px) 
                              bottom: -25.85rem
                              right: -15rem
                         picture
                              opacity: .5
                              img
                                   width: 180px
                                   @media screen and (min-width: 992px)
                                        width: 380px
                                   @media screen and (min-width: 1200px) 
                                        width: 400px
                                   @media screen and (min-width: 1400px) 
                                        width: 421px
                    &.pos1 
                         top: -8rem
                         left: -5rem
                         @media screen and (min-width: 992px)
                              top: -5.85rem
                              left: -15rem
                         @media screen and (min-width: 1200px) 
                              top: -6.5rem
                              left: -15rem
                         @media screen and (min-width: 1400px) 
                              top: -6.5rem
                              left: -15rem
                         picture
                              img
                                   width: 250px
                                   @media screen and (min-width: 992px)
                                        width: 460px
                                   @media screen and (min-width: 1200px) 
                                        width: 500px
                                   @media screen and (min-width: 1400px) 
                                        width: 550px
          .boxSuscription
               display: none
               @media screen and (min-width: 992px)
                    display: flex
                    flex-direction: row
               .boxInfo
                    position: relative
                    z-index: 3
                    @media screen and (min-width: 992px)
                         padding: 4rem 0 4.35rem 
                    @media screen and (min-width: 1200px) 
                         padding: 4.5rem 0 4.75rem
                    @media screen and (min-width: 1400px) 
                         padding: 6.5rem 0 5.35rem
                    .boxInfoTop
                         padding: 0 0 2rem 0rem
                         .boxComunicate
                              p
                                   @include font-libre(.875rem,0.875rem,0.875rem,.8rem,$Montserrat,500,black)
                                   text-align: left
                                   margin-top: .5rem
                                   padding: 0 .25rem
                                   @media screen and (min-width: 992px)
                                        text-align: left
                                        margin: 0
                                        padding: 0
                         .boxDetail
                              margin-left: 0rem
                              padding-top: 1rem
                              @media screen and (min-width: 992px)
                                   margin-left: .75rem
                                   padding-top: 1.35rem
                              h2
                                   @include font-libre(1rem,1rem,1rem,1.75rem,$Montserrat,800,black)
                                   line-height: 1.5em
                                   text-align: center
                                   @media screen and (min-width: 992px)
                                        text-align: left
                              p
                                   @include font-libre(.875rem,0.875rem,0.875rem,.8rem,$Montserrat,500,black)
                                   text-align: center
                                   margin-top: .5rem
                                   padding: 0 1rem
                                   @media screen and (min-width: 992px)
                                        text-align: left
                                        margin: 0
                                        padding: 0
                         .boxIcon
                              margin: auto
                              text-align: center
                              @media screen and (min-width: 992px)
                                  margin: 0 .85rem 0 0 
                                  text-align: left
                              img
                                   width: 58px 
                    .boxForm
                         width: 90%
                         margin: auto
                         @media screen and (min-width: 992px)
                               width: 28.5rem
                               margin: 0
                         @media screen and (min-width: 1200px)
                               width: 33.5rem
                         @media screen and (min-width: 1400px)
                               width: 36.688rem
                         input[type="email"]
                              line-height: 3em
                              height: auto
                              border-radius: 30px
                              background: $grayLight5
                              border: 1px solid $grayDark4
                              @include font-libre(.875rem,0.875rem,0.875rem,0.875rem,$Montserrat,500,$blue)
                              padding-left: 1rem
                              padding-right: .5rem
                              margin: 1rem 1.5rem 1rem 0
                              @media screen and (min-width: 992px)
                                   line-height: 3em
                                   margin: 0rem 1.5rem 0 0
                              @media screen and (min-width: 1200px)
                                   line-height: 3.75em
                              @media screen and (min-width: 1400px)
                                   line-height: 3.95em
                              &:focus,
                              &:hover
                                   outline: none
                                   box-shadow: none
                                   border: 1px solid $grayDark4
                              &::placeholder
                                   color: $blue
                         .boxButtonTienda
                              padding: 0rem
                              margin-bottom: 2rem
                              @media screen and (min-width: 992px)
                                   margin-bottom: 0
                              button
                                   background: $greenLight3
                                   transition: .5s ease-in background
                                   @include font-libre(.813rem,.75rem,.75rem,.7rem,$Montserrat,600,white)
                                   border: 0
                                   line-height: 3em
                                   padding: 0 3rem
                                   border-radius: 30px
                                   @media screen and (min-width: 992px)
                                        line-height: 3.7em
                                        padding: 0 1.75rem
                                   @media screen and (min-width: 1200px)
                                        line-height: 4.5em
                                        padding: 0 3.25rem
                                   @media screen and (min-width: 1400px)
                                        line-height: 4.45em
                                   &:hover
                                        background: $pinkLight
                    .boxComunication
                         padding-top: 1rem
                         a
                              text-decoration: none
                              p
                                   transition: .5s ease color
                                   margin-bottom: 0
                              &:hover
                                   &:first-child
                                        p 
                                             color: $greenLight3
                                   &:last-child
                                        p
                                             color: $pinkLight
                              &:first-child
                                   margin-right: .75rem
                                   @media screen and (min-width: 992px) 
                                        margin-right: 1.75rem
                                   @media screen and (min-width: 1200px)
                                        margin-right: 2.5rem
                              img
                                   margin-right: .75rem 
               .boxNewsletter
                    // flex-grow: 1
                    width: 49%
               .boxClient
                    // flex-grow: 1
                    width: 49%
                    .boxInfo
                         padding-left: 6rem
                         @media screen and (min-width: 992px)
                              padding-left: 1.5rem
                         @media screen and (min-width: 1200px)
                              padding-left: 6rem

               .boxLine
                    // flex-grow: 0
                    width: 2%
                    .line
                         width: 1px
                         height: 100%
                         background: $grayDark4
          .boxSuscriptionM
               display: block
               @media screen and (min-width: 992px)
                    display: none
          .boxFlor
               position: absolute
               z-index: 1
               display: none
               &.flor2
                    top: 5px
                    right: 10px
                    @media screen and (min-width: 992px)
                         top: -50px
                         right: -60px
                    @media screen and (min-width: 1200px)
                         top: -50px
                         right: -60px
                    @media screen and (min-width: 1400px)
                         top: -50px
                         right: -60px
                    
                    img
                         width: 140px
                         @media screen and (min-width: 992px)
                              width: 166px
                         @media screen and (min-width: 1200px)
                              width: 186px
               &.flor1
                    top: 5px
                    left: 10px
                    @media screen and (min-width: 992px)
                         top: -40px
                         left: -80px
                    @media screen and (min-width: 1200px)
                         top: -50px
                         left: -140px
                    @media screen and (min-width: 1400px)
                         top: 20px
                         left: 20px
                    
                    img
                         width: 140px
                         @media screen and (min-width: 992px)
                              width: 200px
                         @media screen and (min-width: 1200px)
                              width: 220px
          
</style>