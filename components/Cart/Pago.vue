<template>
     <div class="boxCartPago">
          <ValidationObserver v-slot="{ handleSubmit }" ref="form" >
               <b-form @submit.prevent="handleSubmit(onSubmit)">
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
                                                                                <div class="col-12 col-lg-6">
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
                                                                                <div class="col-12 col-lg-6">
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
                                                                                     <ValidationProvider tag="div" vid="departamento" rules="required" name="departamento" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectDepartamento" :options="departamentos">
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
                                                                                               v-model="selectProvincia" :options="provincias">
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
                                                                                               v-model="selectDistrito" :options="distritos">
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="direccion" rules="required" name="direccion" v-slot="{ errors, validated }" >
                                                                                          <b-form-input
                                                                                               v-model="form.direccion"
                                                                                               autocomplete="off"
                                                                                               type="text"
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               placeholder="Dirección"
                                                                                          ></b-form-input>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
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
                                                                      </b-card-body>
                                                                 </b-collapse>
                                                            </b-card>
                                                            <b-card no-body class="">
                                                                 <b-card-header header-tag="header" class="p-2" role="tab">
                                                                      <b-button block v-b-toggle.accordion-2 variant="info">Dedicatoria</b-button>
                                                                 </b-card-header>
                                                                 <b-collapse id="accordion-2"  accordion="my-accordion2" role="tabpanel">
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
                                                                                               v-model="selectMensajePredeterminado" :options="mensajesPredeterminados">
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
                                                                                                    v-model="form.mensaje"
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
                                                                 <b-collapse id="accordion-3" accordion="my-accordion3" role="tabpanel">
                                                                      <b-card-body>
                                                                           <div class="row mb-3 mt-3">
                                                                                <div class="col">
                                                                                     <ValidationProvider tag="div" vid="tipoComprobante" rules="required" name="tipoComprobante" v-slot="{ errors, validated }" >
                                                                                          <b-form-select 
                                                                                               :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                               v-model="selectTipoComprobante" :options="tiposComprobantes" :onChange="cambioTipoComprobante">
                                                                                          </b-form-select>
                                                                                          <div class="error-input">{{ errors[0] }}</div>
                                                                                     </ValidationProvider>
                                                                                </div>
                                                                           </div>
                                                                           <div class="boxDatosComprobant" v-if="selectTipoComprobante === false">
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <ValidationProvider tag="div" vid="dniComprobante" rules="required" name="DNI" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.dniComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    placeholder="DNI"
                                                                                               ></b-form-input>
                                                                                               <div class="error-input">{{ errors[0] }}</div>
                                                                                          </ValidationProvider>
                                                                                     </div>
                                                                                </div>
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col-12 col-lg-6">
                                                                                          <ValidationProvider tag="div" vid="nombreComprobante" rules="required" name="Nombres" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.nombreComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    placeholder="Nombres"
                                                                                               ></b-form-input>
                                                                                               <div class="error-input">{{ errors[0] }}</div>
                                                                                          </ValidationProvider>
                                                                                     </div>
                                                                                     <div class="col-12 col-lg-6">
                                                                                          <ValidationProvider tag="div" vid="apellidosComprobante" rules="required" name="Apellidos" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.apellidosComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    placeholder="Apellidos"
                                                                                               ></b-form-input>
                                                                                               <div class="error-input">{{ errors[0] }}</div>
                                                                                          </ValidationProvider>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div class="boxDatosComprobant" v-else>
                                                                                <div class="row mb-3 mt-3">
                                                                                     <div class="col">
                                                                                          <ValidationProvider tag="div" vid="rucComprobante" rules="required" name="RUC" v-slot="{ errors, validated }" >
                                                                                               <b-form-input
                                                                                                    v-model="form.rucComprobante"
                                                                                                    autocomplete="off"
                                                                                                    type="text"
                                                                                                    :state= "((errors.length == 0) && (validated === false)) ? null : ( ( errors.length === 0  ) ? true : false)"
                                                                                                    placeholder="RUC"
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
                                                                                                    placeholder="Razón Social"
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
                                   
                              </div>
                              
                         </div>
                    </div>
                    
               </b-form>
          </ValidationObserver>
          <div>
               <input class="input" ref="searchTextField" type="text">
          </div>
     </div>
</template>
<script>
const apiKey = 'AIzaSyCEaGvnx5jch4RwsxwZn9D0CWUssPEyaMg'
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
     head() {
          return {
               script: [
                    {
                         hid: 'maps-googleapis',
                         src: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`,
                         defer: true,
                         callback: this.googleAutocompleteInit,
                    }
               ]
          };
     },
     data(){
          const now = new Date()
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          let todayPicker = new Date(today)
          // console.log(todayPicker.getMonth())
          todayPicker.setMonth(todayPicker.getMonth())
          return {
               form: {},
               selectedDeliveryTime: null,
               CalendarValue: null,
               CalendarOnContext: null,
               minDate: today,
               selectActiveMensaje: false,
               selectActiveFirma: false,
               selectMensajePredeterminado: null,
               mensajesPredeterminados: [
                    {value: null, text: 'Selecciona'},
                    {value: 'Mensaje 1', text: 'Mensaje 1', contentext: 'Hola Mensaje 1'},
                    {value: 'Mensaje 2', text: 'Mensaje 2', contentext: 'Hola Mensaje 2'},
                    {value: 'Mensaje 3', text: 'Mensaje 3', contentext: 'Hola Mensaje 3'},
                    {value: 'Mensaje 4', text: 'Mensaje 4', contentext: 'Hola Mensaje 4'},
               ],
               selectTipoComprobante: false,
               tiposComprobantes: [
                    { value: false, text: 'Boleta' },
                    { value: true, text: 'Factura' },
               ],
               selectDepartamento: 'Lima',
               departamentos: [
                    { value: null, text: 'Selecciona' },
                    { value: 'Lima', text: 'Lima' },
                    { value: 'Arequipa', text: 'Arequipa' },
                    { value: 'Junin', text: 'Junin' },
                    { value: 'Cuzco', text: 'Cuzco' },
               ],
               selectProvincia: 'Lima',
               provincias: [
                  { value: null, text: 'Selecciona' },  
                  { value: 'Lima', text: 'Lima' },  
                  { value: 'Huaral',text: 'Huaral' },  
                  { value: 'Barranca',text: 'Barranca' },  
                  { value: 'Cajatambo', text: 'Cajatambo' },  
               ],
               selectDistrito: null,
               distritos: [
                  { value: null, text: 'Selecciona' },  
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
     
     mounted(){
          var input = this.$refs.searchTextField; //.getElementById('searchTextField');
          new google.maps.places.Autocomplete(input);
     },
     computed: {
          // ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          // ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          // ...mapGetters('shopping/cart/', ['getExchangeRate']),
          // ...mapState(
          //      { dataCart: state => state.shopping.cart.dataCart},
          // ),
     },
     methods: {
          async onSubmit() {

          },
          cambioTipoComprobante(){
               if (this.selectTipoComprobante){
                    this.selectTipoComprobante = false 
               }else{
                    this.selectTipoComprobante = true
               }
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
                    .boxSwitch
                         @include boxSwicth()
                         p
                              @include font-libre(0.75rem,0.75rem, 0.75rem,0.75rem,$Montserrat,500,$grayDark18)
          .boxDatosPago
               border: 1px solid blue 
               .boxContent
                    border: 1px solid black
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