<template>
     <div class="boxAccordion">
          <div class="accordion" role="tablist">
               <!-- <b-card no-body class="">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                         <b-button block v-b-toggle.accordion-1 variant="info">
                              Información acerca de puntos acumulables
                         </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                         <b-card-body>
                              <h2>3000 Puntos = $200 MXN</h2>
                              <ul>
                                   <li>
                                        Por cada peso mexicano que hayas pagado (sin incluir el envío o alguna promoción especial), se acumula 1 punto en tu cuenta EnviaFlores.
                                   </li>
                                   <li>
                                        Al llegar a 3,000 puntos, se te otorgará un bono de $200 MXN cuyo código será enviado al correo electrónico con el que estás registrado en EnviaFlores.com. En la sección “Mis Puntos” de tu cuenta, podrás encontrar el registro de tus puntos y los códigos que tienes disponibles y los que has utilizado.
                                   </li>
                                   <li>
                                        Si iniciaste sesión antes de empezar el proceso de compra y cuentas con un bono de $200 MXN, aparecerá un botón en el carrito de compras con la leyenda “Cupón Disponible ($200.00)”.
                                   </li>
                              </ul>
                              <h2>¿Cuánta vigencia tienen mis puntos?</h2>
                              <ul>
                                   <li>
                                        La caducidad de los puntos que vas acumulando en las compras es de 12 meses y una vez que tienes disponible el Bono de Cliente Frecuente, este tiene una caducidad de 6 meses.
                                   </li>
                              </ul>
                         </b-card-body>
                    </b-collapse>
               </b-card> -->

               <b-card no-body class="">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                         <b-button block v-b-toggle.accordion-1 variant="info">Información acerca de la garantía de sumaq.pe</b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                         <b-card-body>
                              <ul>
                                   <li>
                                        Sabemos lo importante que es esta fecha, es por esto que nos comprometemos a entregar en el día y horario seleccionado.
                                   </li>
                                   <li>
                                        Si no se encuentra el destinatario, intentaremos comunicarnos para resolver la situación.
                                   </li>
                                   <li>
                                        En caso de no tener respuesta, entregaremos tu pedido con alguien cercano: vecino, compañero de trabajo o recepción.
                                   </li>
                                   <li>
                                        Si nadie puede recibir el arreglo, se te notificará para reprogramar el envío.
                                   </li>
                              </ul>
                              <p class="bold">Recuerda: todas las notificaciones de tu pedido llegarán a tu correo electrónico registrado.</p>
                         </b-card-body>
                    </b-collapse>
               </b-card>
          </div>
     </div>
</template>
<style lang="sass">
     .boxAccordion
          @include accordion($blancoHuno, $blancoHuno2, $grayDark18)
          
</style>