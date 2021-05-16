<template>
     <div class="boxCartPago">
          <ValidationObserver v-slot="{ validate }" ref="observer" >
               <b-form @submit.prevent="validate().then(onSubmit)">
                    <div class="container-fluid container-fluid-xxl ">
                         <div class="row">
                              <div class="col-12 col-lg-6">
                                   <div class="boxDatosPago">
                                        <div class="boxContent">
                                             <div class="row">
                                                  <div class="col-6">
                                                       <div class="boxTitle">
                                                            <h2>Información de contacto:</h2>
                                                       </div>
                                                  </div>
                                                  <div class="col-6">
                                                       <div class="boxTitleLogin">
                                                            <p>¿Tienes una cuenta? <nuxt-link to="/">Iniciar sesión</nuxt-link></p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="row mb-3 mt-3">
                                                  <div class="col">
                                                       <ValidationProvider tag="div" vid="email" rules="required|email" name="correo electrónico" v-slot="{ errors, validated }" >
                                                            <b-form-input
                                                                 v-model="form.email"
                                                                 autocomplete="off"
                                                                 type="text"
                                                                 :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                 placeholder="Correo Electrónico"
                                                            ></b-form-input>
                                                            <div class="error-input">{{ errors[0] }}</div>
                                                       </ValidationProvider>
                                                  </div>
                                             </div>
                                             <div class="row mb-3 mt-3">
                                                  <div class="col">
                                                       <ValidationProvider tag="div" vid="celular" rules="required" name="celular" v-slot="{ errors, validated }" >
                                                            <b-form-input
                                                                 v-model="form.celular"
                                                                 autocomplete="off"
                                                                 type="text"
                                                                 :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                 placeholder="celular"
                                                            ></b-form-input>
                                                            <div class="error-input">{{ errors[0] }}</div>
                                                       </ValidationProvider>
                                                  </div>
                                             </div>
                                             <div class="row mb-3 mt-3">
                                                  <div class="col">
                                                       <div class="boxTitle">
                                                            <h2>Fecha y hora de envío:</h2>
                                                       </div>
                                                       <div class="boxHorario mt-3">
                                                            <div class="selectHorario">
                                                                 <div class="cbxHorario d-flex justify-content-center align-items-center" v-on:click="timeDelivery">
                                                                      <div class="d-flex justify-content-start align-items-center">
                                                                           <img src="@/assets/images/horario.png" class="imgIcon" />
                                                                           <span v-if="CalendarValue!=null">{{ CalendarValue }}</span>
                                                                           <span v-else>Fecha</span>
                                                                      </div>
                                                                      <div class="lineSeparate"></div>
                                                                      <div class="d-flex justify-content-start align-items-center">
                                                                           <img src="@/assets/images/hora.png" class="imgIcon"/>
                                                                           <span v-if="selectedDeliveryTime!=null">{{ selectedDeliveryTime }}</span>
                                                                           <span v-else>Hora</span>
                                                                      </div>
                                                                      <img src="@/assets/images/arrowCbx2.png" class="arrowIcon">
                                                                      <img src="@/assets/images/arrowCbx2-active.png" class="arrowIcon arrowIcon-active">
                                                                 </div>
                                                            </div>
                                                            <div class="tabHorarios">
                                                                 <div class="tabs">
                                                                      <!-- tab-title -->
                                                                      <div class="tabHeader">
                                                                           <div class="d-flex justify-content-center align-items-center">
                                                                                <div class="d-flex justify-content-center align-items-center active" v-on:click="viewDeliveryTab(1)" id="tabDelivery-1">
                                                                                     <img src="@/assets/images/horario.png" class="" />
                                                                                     <span>Fecha</span>
                                                                                </div>
                                                                                <div class="d-flex justify-content-center align-items-center" v-on:click="viewDeliveryTab(2)" id="tabDelivery-2">
                                                                                     <img src="@/assets/images/hora.png" class="" />
                                                                                     <span>Horarios</span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <!-- tab-content -->
                                                                      <div class="tab-content d-flex justify-content-center">
                                                                           <section id="tab-item-1" class="active">
                                                                                <!-- <client-side> -->
                                                                                <b-calendar v-model="CalendarValue" :min="minDate.toISOString()" :date-disabled-fn="dateDisabled" locale="es-Es"></b-calendar>
                                                                                <!-- </client-side> -->
                                                                           </section>
                                                                           <section id="tab-item-2" >
                                                                                <div class="contentItem">
                                                                                     <div class="form-check" v-for="(item, index) in DeliveryTimes" :key="index" v-bind:class="{'disabled' : item.notEnabled === 'disabled'}">
                                                                                          <b-form-radio v-model="selectedDeliveryTime" :value="item.value" :disabled="item.notEnabled">{{ item.value }}</b-form-radio>
                                                                                     </div>
                                                                                </div>
                                                                           </section>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="mb-3 mt-3">
                                                  <div class="boxCarForm">
                                                       <div class="accordion" role="tablist">
                                                            <b-card no-body class="">
                                                                 <b-card-header header-tag="header" class="p-2" role="tab">
                                                                      <b-button block v-b-toggle.accordion-1 variant="info">Información de envío</b-button>
                                                                 </b-card-header>
                                                                 <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                                                      <b-card-body>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col-12 col-lg-6">
                                                                                     <ValidationProvider tag="div" vid="nombre" rules="required" name="nombre" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               v-model="form.nombres"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Nombres"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                                <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                                                                     <ValidationProvider tag="div" vid="apellidos" rules="required" name="apellidos" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               v-model="form.apellidos"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Apellidos"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col-12 col-lg-6">
                                                                                     <b-form-input
                                                                                          v-model="form.dni"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          placeholder="DNI (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                                <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                                                                                     <ValidationProvider tag="div" vid="celularEnvio" rules="required" name="celular" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               v-model="form.celularEnvio"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Celular"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="direccion" rules="required" name="direccion" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               id= "location"
                                                                                               v-model="form.direccion"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Escribe tu direccion"
                                                                                               @input="autoComplete()"
                                                                                               v-on:keyup.enter="onKeyUpEnterCompleteSearch()" 
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                     <!-- <div>
                                                                                          <input id= "location" type= "text" class="form-control" placeholder= "Escribe tu direccion" v-model="city" @input="autoComplete()" v-on:keyup.enter="onKeyUpEnterCompleteSearch()"  />
                                                                                     </div> -->
                                                                                </div>
                                                                           </div>
                                                                           <!-- <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     
                                                                                     <ValidationProvider tag="div" vid="direccion" rules="required" name="direccion" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Dirección"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div> -->
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <b-form-input
                                                                                          v-model="form.referencia"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          placeholder="Referencia (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                           </div>

                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <b-form-input
                                                                                          v-model="form.postalCodeMaps"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          placeholder="Codido Postal (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                           </div>

                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="departamento" rules="required" name="departamento" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectDepartamento" :options="departamentos"
                                                                                               class="is-valid"
                                                                                          >
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="provincia" rules="required" name="provincia" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectProvincia" :options="provincias"
                                                                                               class="is-valid"
                                                                                          >
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="distrito" rules="required" name="distrito" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectDistrito" :options="distritos" @change="costoDelivery">
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           
                                                                      </b-card-body>
                                                                 </b-collapse>
                                                            </b-card>
                                                            <b-card no-body class="">
                                                                 <b-card-header header-tag="header" class="p-2" role="tab">
                                                                      <b-button block v-b-toggle.accordion-2 variant="info">Dedicatoria</b-button>
                                                                 </b-card-header>
                                                                 <b-collapse id="accordion-2"  accordion="my-accordion" role="tabpanel">
                                                                      <b-card-body>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <div class="boxSwitch d-flex flex-row align-items-center justify-content-start">
                                                                                          <!-- <p>Sin Mensaje</p> -->
                                                                                          <div class="switch">
                                                                                               <input id="switch" class="switch__input" name="switch" type="checkbox" @click="changeMensaje">
                                                                                               <label class="switch__label" for="switch"></label>
                                                                                          </div>
                                                                                          <p>Mensaje</p>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div class="boxMensajes" v-if="selectActiveMensaje">
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <b-form-select
                                                                                               v-model="selectMensajePredeterminado" 
                                                                                               :options="mensajesPredeterminados"
                                                                                               @change="mostrarDedicatoria()"
                                                                                          >
                                                                                          </b-form-select>
                                                                                     </div>
                                                                                </div>
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <div class="boxTitle">
                                                                                               <h2>Escribe tu mensaje:</h2>
                                                                                          </div>
                                                                                          <div class="boxTextarea mt-2">
                                                                                               <b-form-textarea
                                                                                                    id="textarea"
                                                                                                    v-model="selectContentextPredeterminado"
                                                                                                    placeholder="Escriba su mensaje..."
                                                                                                    rows="8"
                                                                                                    max-rows="12"
                                                                                               ></b-form-textarea>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>

                                                                           </div>
                                                                           <div v-else>
                                                                                <div class="boxNotificacionVacio">
                                                                                     <p>No hay mensaje predeterminado seleccionado</p>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <div class="boxSwitch d-flex flex-row align-items-center justify-content-start">
                                                                                          <!-- <p>Anónimo</p> -->
                                                                                          <div class="switch">
                                                                                               <input id="switch" class="switch__input" name="switch" type="checkbox" @click="changeFirma">
                                                                                               <label class="switch__label" for="switch"></label>
                                                                                          </div>
                                                                                          <p>Con Firma</p>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3" v-if="selectActiveFirma"> 
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="firma" rules="required" name="firma" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               v-model="form.firma"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Firma"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div v-else>
                                                                                <div class="boxNotificacionVacio">
                                                                                     <p>Este presente no tiene Firma</p>
                                                                                </div>
                                                                           </div>
                                                                      </b-card-body>
                                                                 </b-collapse>
                                                            </b-card>
                                                            <b-card no-body class="">
                                                                 <b-card-header header-tag="header" class="p-2" role="tab">
                                                                      <b-button block v-b-toggle.accordion-3 variant="info">Comprobante de pago</b-button>
                                                                 </b-card-header>
                                                                 <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                                                      <b-card-body>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="tipoComprobante" rules="required" name="tipoComprobante" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectTipoComprobante" :options="tiposComprobantes">
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="boxDatosComprobant">
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <ValidationProvider tag="div" vid="rucComprobante" rules="required" name="RUC" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.rucComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    :placeholder="dameTipoComprobante"
                                                                                               ></b-form-input>
                                                                                               <div class="error-input">{{ errors[0] }}</div>
                                                                                          </ValidationProvider>
                                                                                     </div>
                                                                                </div>
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <ValidationProvider tag="div" vid="razonSocialComprobante" rules="required" name="Nombres" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.razonSocialComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    :placeholder="dameNombreComprobante"
                                                                                               ></b-form-input>
                                                                                               <div class="error-input">{{ errors[0] }}</div>
                                                                                          </ValidationProvider>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <b-form-input
                                                                                          v-model="form.emailComprobante"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          placeholder="Correo Electrónico (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <b-form-input
                                                                                          v-model="form.telefonoComprobante"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          placeholder="Teléfono (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <b-form-input
                                                                                          v-model="form.direccionComprobante"
                                                                                          autocomplete="off"
                                                                                          type="text"
                                                                                          
                                                                                          placeholder="Dirección (opcional)"
                                                                                     ></b-form-input>
                                                                                </div>
                                                                           </div>                                                                   
                                                                      </b-card-body>
                                                                 </b-collapse>
                                                            </b-card>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-12 col-lg-6">
                                   <div class="boxResult">
                                        <div class="boxListProduct">
                                             <div class="boxCard mb-3 d-flex justify-content-between align-items-start" v-for="(item, index) in dataCart.order" :key="index">
                                                  <div class="d-flex justify-content-start align-items-start">
                                                       <div class="boxPicture">
                                                            <picture>
                                                                 <img :src="require(`@/assets/images/${item.photo}`)" alt="ocacion">
                                                            </picture>
                                                            <div class="boxCantidad">
                                                                 <p>{{ item.cantidad }}</p>
                                                            </div>
                                                       </div>
                                                       <div class="boxDetail">
                                                            <h2>{{ item.name }}</h2>
                                                            <p> {{ item.description }}</p>
                                                       </div>
                                                  </div>
                                                  <div class="boxPrice">
                                                       <p>{{ getCurrencySymbol }} {{ getPrice(item.precio) }}</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxCostos">
                                             <div class="rowCosto">
                                                  <div class="mb-2 d-flex justify-content-between align-items-start">
                                                       <h3>Subtotal</h3>
                                                       <h3>{{ getCurrencySymbol }} {{ dameSubMontoTotal }}</h3>
                                                  </div>
                                                  <div class="pb-4 d-flex justify-content-between align-items-start">
                                                       <h3>Costo por Delivery</h3>
                                                       <h3 v-if="priceDelivery === 0 ">Indique el distrito</h3>
                                                       <h3 v-else>{{ getCurrencySymbol }} {{ damePriceDelivery }}</h3>
                                                  </div>
                                             </div>
                                             <div class="rowCosto mt-3">
                                                  <div class="d-flex justify-content-between align-items-start">
                                                       <div>
                                                            <h3>Total</h3>
                                                            <p>Incluye impuestos</p>
                                                       </div>
                                                       
                                                       <h3 class="boldPrice">{{ getCurrencySymbol }} {{ dameTotal }}</h3>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxPagos ">
                                             <div class="rowCard mt-3">
                                                  <div class="d-flex">
                                                       <div>
                                                            <b-form-radio v-model="paymentType" name="some-radios" value="1"></b-form-radio>
                                                       </div>
                                                       <div>
                                                            <h3>Transferencia bancaria</h3>
                                                            <p>
                                                                 Al hacer click en el boton “VALIDAR TU PEDIDO” serás direccionado a la página de agradecimiento en la cual apareceran nuestros numeros cuenta en BCP, BBVA y Scotiabank para que puedas realizar tu pago.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="rowCard mt-3">
                                                  <div class="d-flex">
                                                       <div>
                                                            <b-form-radio v-model="paymentType" name="some-radios" value="2"></b-form-radio>
                                                       </div>
                                                       <div>
                                                            <h3>Pagar con tarjeta de crédito o débito</h3>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxLegales">
                                             <div class="rowCard mt-3">
                                                  <div class="boxContent">
                                                       <p>
                                                            Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web y 
                                                            otros propósitos descritos en nuestra <a href="" target="_blank">política de privacidad.</a>
                                                       </p>
                                                  </div>
                                                  <div class="boxContent">
                                                       <div class="d-flex align-items-center justify-content-start">
                                                            <div class="boxSwitch">
                                                                 <!-- <p>Anónimo</p> -->
                                                                 <div class="switch">
                                                                      <input id="switch" class="switch__input" name="switch" type="checkbox" v-model="boolTerminos" value="true" unchecked-value="false" >
                                                                      <label class="switch__label" for="switch"></label>
                                                                 </div>
                                                            </div>
                                                            <p>
                                                                 He leído y acepto los <a href="" target="_blank">términos y condiciones </a>de SUMAQ.pe
                                                            </p>
                                                       </div>
                                                       
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="boxButtom">
                                             <b-button type="submit" class="btn-submit"><p>REALIZAR PEDIDO</p></b-button>
                                        </div>
                                        <div class="boxAlerts">
                                             <div class="alert alert-danger" role="alert">
                                                  <client-only>
                                                       <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                                                  </client-only>
                                                  Asegurese de aceptar los Términos y Condiciones
                                             </div>
                                             <div class="alert alert-danger" role="alert">
                                                  <client-only>
                                                       <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                                                  </client-only>
                                                  Verifique su Metodo de Pago
                                             </div>
                                             <div class="alert alert-danger" role="alert">
                                                  <client-only>
                                                       <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                                                  </client-only>
                                                  Verifique su Informacion de Contacto
                                             </div>
                                             <div class="alert alert-danger" role="alert">
                                                  <client-only>
                                                       <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                                                  </client-only>
                                                  Verifique Información de envío
                                             </div>
                                             <div class="alert alert-danger" role="alert">
                                                  <client-only>
                                                       <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                                                  </client-only>
                                                  Verifique Comprobante de pago
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              
                         </div>
                    </div>
                    
               </b-form>
          </ValidationObserver>
          
          
         
          
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
// import CartCuenta from '@/components/Cart/Cuenta'
/*
    Traemos la libreria de manera local en donde lo vamos a trabajar
*/
import {gsap} from "gsap/dist/gsap"
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import CSSRulePlugin from "gsap/dist/CSSRulePlugin";
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin)
gsap.core.globals("ScrollTrigger", ScrollTrigger)
export default {
     components: {
          // CartCuenta,
     },
     data(){
          const now = new Date()
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          let todayPicker = new Date(today)
          // console.log(todayPicker.getMonth())
          todayPicker.setMonth(todayPicker.getMonth())
          return {
               city: null,
               form: {},
               selectedDeliveryTime: null,
               CalendarValue: null,
               CalendarOnContext: null,
               minDate: today,
               selectActiveMensaje: false,
               selectActiveFirma: false,
               paymentType: null,
               boolTerminos: false,
               selectContentextPredeterminado: '',
               selectMensajePredeterminado: null,
               mensajesPredeterminados: [
                    {value: null, text: 'Selecciona'},
                    {value: 'Mensaje 1', text: 'Mensaje 1', contentext: 'Hola Mensaje 1'},
                    {value: 'Mensaje 2', text: 'Mensaje 2', contentext: 'Hola Mensaje 2'},
                    {value: 'Mensaje 31', text: 'Mensaje 3', contentext: 'Hola Mensaje 3'},
                    {value: 'Mensaje 4', text: 'Mensaje 4', contentext: 'Hola Mensaje 4'},
               ],
               selectTipoComprobante: false,
               tiposComprobantes: [
                    { value: false, text: 'Boleta' },
                    { value: true, text: 'Factura' },
               ],
               selectDepartamento: 'Lima',
               departamentos: [
                    { value: null, text: 'Selecciona Departamento' },
                    { value: 'Lima', text: 'Lima' },
                    { value: 'Arequipa', text: 'Arequipa' },
                    { value: 'Junin', text: 'Junin' },
                    { value: 'Cuzco', text: 'Cuzco' },
               ],
               selectProvincia: 'Lima',
               provincias: [
                  { value: null, text: 'Selecciona Provincia' },  
                  { value: 'Lima', text: 'Lima' },  
                  { value: 'Huaral',text: 'Huaral' },  
                  { value: 'Barranca',text: 'Barranca' },  
                  { value: 'Cajatambo', text: 'Cajatambo' },  
               ],
               selectDistrito: null,
               priceDelivery: 0,
               distritos: [
                  { value: null, text: 'Selecciona Distrito', precio: 0  },  
                  { value: 'Cercado de Lima', precio: 10.00 ,text: 'Cercado de Lima' },  
                  { value: 'Barranco', precio: 15.34, text: 'Barranco' },  
                  { value: 'Breña', precio: 20.99, text: 'Breña' },  
                  { value: 'Jesús María', precio: 10.99, text: 'Jesús María' },  
                  { value: 'Lince', precio: 12.99, text: 'Lince' },  
                  { value: 'Magdalena del Mar', precio: 30.99, text: 'Magdalena del Mar' },  
                  { value: 'San Miguel', precio: 50.99, text: 'San Miguel' },  
               ],
               DeliveryTimes: [
                    {
                         id: '1',
                         value: '09:00 am - 12:00 pm',
                         notEnabled: 'disabled'
                    },
                    {
                         id: '2',
                         value: '13:00 am - 15:00 pm' 
                    },
                    {
                         id: '3',
                         value: '18:00 am - 21:00 pm'
                         
                    }
               ],
          }
     },
     updated(){
          // this.autoComplete();
     },
     mounted(){
     },
     computed: {
          ...mapGetters('shopping/cart/', ['subMontoTotal']),
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          ...mapState(
               { dataCart: state => state.shopping.cart.dataCart},
          ),
          dameTipoComprobante(){
               if (this.selectTipoComprobante)
                    return 'R.U.C.'
               else
                    return 'D.N.I'
          },
          dameNombreComprobante(){
               if (this.selectTipoComprobante)
                    return 'Razón Social'
               else
                    return 'Nombre completo'
          },
          dameTotal(){
               let igv = 0.18
               let total = this.subMontoTotal + this.subMontoTotal*igv + this.priceDelivery
               if (this.getTypeCurrencySymbol === 1)
                    return total.toFixed(2)
               else
                    return (total * this.getExchangeRate).toFixed(2)
          },
          damePriceDelivery(){
               if (this.getTypeCurrencySymbol === 1)
                    return this.priceDelivery.toFixed(2)
               else
                    return (this.priceDelivery * this.getExchangeRate).toFixed(2)
          },
          dameSubMontoTotal(){
               if (this.getTypeCurrencySymbol === 1)
                    return this.subMontoTotal.toFixed(2)
               else
                    return (this.subMontoTotal * this.getExchangeRate).toFixed(2)
          },
     },
     methods: {
          costoDelivery(){
               let _value = this.selectDistrito
               let _this = this
               this.distritos.every(function(data, index){
                    // console.log(data.value)
                    // console.log(_value)
                    if (data.value === _value){
                         _this.priceDelivery = data.precio
                         return false
                    }else{
                         return true
                    }
               })
          },
          getPrice(price){
               if (this.getTypeCurrencySymbol === 1)
                    return price.toFixed(2)
               else 
                    return (price*this.getExchangeRate).toFixed(2)
          },
          async onSubmit() {
               const isValid = await this.$refs.observer.validate();
               // console.log(isValid)
               if (!isValid) {
                    $('.boxAlerts').addClass('active')
               }else{
                    console.log('pasa')
               }
          },
          async mostrarDedicatoria(){
               let _value = this.selectMensajePredeterminado
               let _this = this 
               // console.log(this.mensajesPredeterminados)
               this.mensajesPredeterminados.every(function(data, index){
                    // console.log(data.value)
                    // console.log(_value)
                    if (data.value === _value){
                         _this.selectContentextPredeterminado = data.contentext
                         return false
                    }else{
                         return true
                    }
               })
          },
          //load AutoComplete
          async autoComplete() {
               // console.log(0)
               let _street_number = ''
               let _direccion = ''
               let _distrito = ''
               let _codePostal = ''
               if (this.autocomplete != null || this.$google == null) return;

               //LOAD API GOOGLE AND USE
               this.autocomplete = new this.$google.maps.places.Autocomplete(
                    document.getElementById("location"),{
                         types: ['geocode'],
                         componentRestrictions: { country: "pe" }
                    }
               );

               // EVENT LISTENER AUTO COMPLETE
               this.$google.maps.event.addListener(this.autocomplete, "place_changed", () => {
                         let place = this.autocomplete.getPlace(); //get place choosed when clicked
                         let ac = place.address_components; //return details of place 
                         // console.log("ac", ac)
                         if (ac == undefined) {
                              this.form.postalCodeMaps = ''
                              return
                         };
                         
                         //loop for find informations specific
                         for (let i = 0; i < ac.length; i++) {
                              if (ac[i].types.includes("street_number")) {
                                   _street_number = ac[i].long_name 
                                   // return;
                              }
                              if (ac[i].types.includes("route")) {
                                   _direccion = ac[i].long_name
                                   // return;
                              }
                              if (ac[i].types.includes("locality")) {
                                   _distrito = ac[i].long_name;
                                   // return;
                              }
                              if (ac[i].types.includes("administrative_area_level_2")) {
                                   this.form.provinciaMaps = ac[i].long_name;
                                   // return;
                              }
                              if (ac[i].types.includes("postal_code")) {
                                   _codePostal = ac[i].long_name
                                   
                                   // return;
                              }
                         }
                         this.form.direccion = `${_direccion} ${_street_number}, ${_distrito}`
                         this.form.postalCodeMaps = _codePostal
                         // console.log(_codePostal)
                    }
               );
          },
          //Event Listener key up enter
          onKeyUpEnterCompleteSearch(){
               // console.log(1)
               let _street_number = ''
               let _direccion = ''
               let _distrito = ''
               let _codePostal = ''
               let options = {
                    input: this.city,
                    componentRestrictions: {
                         country: 'pe'
                    },
                    types: ['geocode']
               };
               //created a service to search same results from autocomplete when pressioned enter key.
               let complete = new this.$google.maps.places.AutocompleteService(); 
               //created a geocoder to search details more specific of places.
               let geocoder = new this.$google.maps.Geocoder();
               complete.getPlacePredictions(options, (place, status) => {
                    if(status == this.$google.maps.places.PlacesServiceStatus.OK){
                         //show all results from auto complete
                         // console.log(place[0]);

                         geocoder.geocode({placeId: place[0].place_id}, (placeDetails, stat) => {
                              if(stat == this.$google.maps.GeocoderStatus.OK){
                                   //show detail first result from auto complete
                                   // console.log(placeDetails);
                                   let arr = placeDetails[0].address_components;
                                   // for (let i = 0; i < arr.length; i++) {
                                   //      if (arr[i].types.includes("administrative_area_level_2")) {
                                   //           this.form.direccion = arr[i].long_name; 
                                   //           return;
                                   //      }
                                   // }
                                   for (let i = 0; i < arr.length; i++) {
                                        if (arr[i].types.includes("street_number")) {
                                             _street_number = arr[i].long_name 
                                             // return;
                                        }
                                        if (arr[i].types.includes("route")) {
                                             _direccion = arr[i].long_name
                                             // return;
                                        }
                                        if (arr[i].types.includes("locality")) {
                                             _distrito = arr[i].long_name;
                                             // return;
                                        }
                                        if (arr[i].types.includes("administrative_area_level_2")) {
                                             this.form.provinciaMaps = arr[i].long_name;
                                             // return;
                                        }
                                        if (arr[i].types.includes("postal_code")) {
                                             _codePostal = arr[i].long_name
                                             // return;
                                        }
                                   }
                                   this.form.direccion = `${_direccion} ${_street_number}, ${_distrito}`
                                   this.form.postalCodeMaps = _codePostal
                              }
                         })
                    }    
               });
          },
          changeFirma(){
               if (this.selectActiveFirma){
                    this.selectActiveFirma = false 
               }else{
                    this.selectActiveFirma = true
               }
          },
          changeMensaje(){
               if (this.selectActiveMensaje){
                    this.selectActiveMensaje = false 
               }else{
                    this.selectActiveMensaje = true
               }
          },
          viewDeliveryTab(id){
               const tabDelivery = $(`#tabDelivery-${id}`) 
               // console.log(`#tabDelivery-${id}`)
               const tabItem = $(`#tab-item-${id}`)
               const allHeader = $(".tabHeader > div div")
               const allTabContent = $(".tab-content section")
               allHeader.removeClass('active')
               allTabContent.removeClass('active')
               setTimeout(function(){
                    tabDelivery.addClass('active')
                    tabItem.addClass('active')
               },100)
               
          },
          setActiveSection(cbxHorario){
               cbxHorario.removeClass('active')
          },
          timeDelivery(event){
               const cbxHorario = $('.cbxHorario')
               const tabHorarios = $('.tabHorarios')
               let tlDeliveryOpen = gsap.timeline()
               let tlDeliveryClose = gsap.timeline({ onComplete: this.setActiveSection,  onCompleteParams: [cbxHorario] })
               if (!cbxHorario.hasClass( "active")){
                    cbxHorario.addClass('active')
                    tlDeliveryOpen
                         .set(tabHorarios,{css : {height: 0}})
                         .to(tabHorarios, {duration: .5, css: {height: 'auto'}})

               }else{
                    tlDeliveryClose
                         .to(tabHorarios, {duration: .5, css: {height: 0}})
               }
          },
          dateDisabled(ymd, date) {
               // Disable weekends (Sunday = `0`, Saturday = `6`) and
               // disable days that fall on the 13th of the month
               const weekday = date.getDay()
               const day = date.getDate()
               // Return `true` if the date should be disabled
               // return weekday === 0 || weekday === 6 || day === 13
               return weekday === 0
          },
          reverseFunction: function(){
               $('.cardHorario ul').removeClass('active')
          },
          viewHorarios: function(event) {
               const boxUl = $(event.target.parentElement).siblings()
               if (!boxUl.hasClass('active')){
                    $('.cardHorario ul').removeClass('active')
                    boxUl.addClass('active')
                    this.tl = gsap.timeline({
                              onReverseComplete: this.reverseFunction,
                              paused: false
                    })
                    this.tl
                         .fromTo(
                              boxUl.find('li'),{
                                   opacity: 0,
                                   y: -20,
                              },
                              {
                                   opacity: 1,
                                   stagger: .25,
                                   y: 0,
                                   duration: .25,
                                   ease: 'power1.out',
                              }
                         )
               }else{
                    this.tl.reverse()
               }
          }
     }
}
</script>
<style lang="sass">
     $anchoContent2: 100% 
     .boxCartPago
          border: 0px solid red
          padding: 0rem 0 3rem
          
          .boxSwitch
               @include boxSwicth()
               p
                    @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
          .custom-control-input
               &:focus 
                    ~ .custom-control-label
                         &::before
                              box-shadow: none
               &:checked 
                    ~ .custom-control-label
                         &::before
                              border-color: $greenLight3
                              background-color: $greenLight3
                  
          .boxResult
               padding: 3rem 0 0
               .boxAlerts
                    background: $blancoHuno
                    padding: 0rem 0rem 2rem
                    display: none
                    &.active
                         display: block
               .boxButtom
                    background: $blancoHuno
                    padding: 1.35rem 0rem 2rem
                    button
                         border: 1px solid $greenLight3
                         padding: 0rem 1.95rem
                         height: 60px
                         background: $greenLight3
                         border-radius: 30px
                         text-decoration: none
                         width: 100%
                         p
                              @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,600,white)
               .boxLegales
                    .rowCard
                         .boxContent
                              border-top: 1px solid $blancoHuno2
                              border-bottom: 1px solid $blancoHuno2
                              background: $blancoHuno
                              padding: 1.35rem 1.75rem
                              p, 
                              a
                                   @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                              a
                                   font-weight: 600
                                   text-decoration: underline

                              &:last-child
                                   border: 0
               .boxPagos
                    .rowCard    
                         border-radius: 20px
                         border: 1px solid $blancoHuno2
                         background: $blancoHuno
                         overflow: hidden
                         padding: 1.35rem 1.75rem
                         h3
                              @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                              padding: .25rem 0 .35rem
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                              line-height: 1.5em
               .boxCostos
                    border-radius: 20px
                    border: 1px solid $blancoHuno2
                    background: $blancoHuno
                    overflow: hidden
                    padding: 1.35rem 1.75rem
                    .rowCosto
                         &:first-child
                              border-bottom: 1px solid $blancoHuno2
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                         h3
                              @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                              &.boldPrice
                                   @include font-libre(1.375rem,1.375rem, 1.375rem,1.15rem,$Montserrat,600,$grayDark18)
               .boxListProduct
                    .boxCard
                         border-radius: 20px
                         border: 1px solid $blancoHuno2
                         background: $blancoHuno
                         overflow: hidden
                         padding: 1.35rem 1.75rem
                         .boxPrice
                              p
                                   @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                         .boxDetail
                              padding: 0 0 0 1.5rem
                              h2
                                   @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,600,$grayDark18)
                              p
                                   @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,600,$grayDark18)
                         .boxPicture
                              position: relative
                              width: 111px
                              height: 136px
                              .boxCantidad
                                   position: absolute
                                   width: 21px
                                   height: 21px
                                   border-radius: 50%
                                   background: $greenLight3
                                   border: 1px solid $greenLight5
                                   top: -0.5rem
                                   right: -0.5rem
                                   p
                                        @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,600,white)
                                        text-align: center
                              picture
                                   width: 100%
                                   height: 100%
                                   overflow: hidden
                                   border-radius: 10px
                                   display: block
                                   border: 2px solid $brown
                                   img
                                        width: 100%
                                        height: 100%
                                        object-fit: cover
          form
               @include inputFormPago()
               .boxHorario
                    @include cbxDateHora()
               .boxCarForm
                    @include accordion($greenLight3,$grayDark20, white)
                    .boxNotificacionVacio
                         border: 1px solid $grayDark20
                         background: $grayDark19
                         padding: 2rem 0
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                              text-align: center
                    
          .boxDatosPago 
               .boxContent
                    padding: 3rem 0rem 0
                    .boxTitleLogin
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
                              text-align: right
                              a
                                   font-weight: 600
                                   text-decoration: none
                                   transition: .5s ease color
                                   color: $grayDark18
                                   &:focus,
                                   &:hover
                                        outline: none
                                        box-shadow: none
                                   &:hover
                                        color: $pink
                    .boxTitle
                         h2
                              @include font-libre(0.875rem,0.875rem, 0.875rem,0.875rem,$Montserrat,700,$grayDark18)
          .boxDetalle
               margin-bottom: .35rem
               @include tableDivCart()
               
</style>