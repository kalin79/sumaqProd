<template>
     <div>
          <div class="boxCartCuenta">
               <div class="borderCartCuenta">
                    <div class="boxRow">
                         <label class="title">Código de promoción</label>
                         <div class="boxRowForm">
                              <div class="d-flex boxFormAction">
                                   <input type="text" class="form-control" placeholder="Código">
                                   <button type="button" class="btn-form">APLICAR</button>
                              </div>
                         </div>
                    </div>
                    <div class="boxRow">
                         <label class="title">Seleciona fecha y horario de entrega:</label>
                         <div class="boxHorario">
                              <div class="selectHorario">
                                   <div class="cbxHorario d-flex justify-content-start align-items-center" v-on:click="timeDelivery">
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
               <div class="boxResumen">
                    <div>
                         <div class="d-flex">
                              <div class="colflex">
                                   <h3>Resumen del pedido</h3>
                              </div>
                              <div class="colflex">
                                   <h3>SUBTOTAL</h3>
                              </div>
                         </div>
                         <div class="boxDescription">
                              <div class="d-flex">
                                   <div class="colflex">
                                        <h2>Productos:</h2>
                                        <p>Impuesto incluido. Los gastos de envío se calculan en la pantalla de pagos.</p>
                                   </div>
                                   <div class="colflex">
                                        <h2>{{ getCurrencySymbol }} {{ dameSubMontoTotal }}</h2>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="boxButton">
                    <div class="d-flex justify-content-center flex-column align-items-center">
                         <button type="button">
                              <p>FINALIZAR PEDIDO</p>
                         </button>
                         <button type="button">
                              <p>SEGUIR COMPRANDO</p>
                         </button>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
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
     data(){
          const now = new Date()
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
          let todayPicker = new Date(today)
          // console.log(todayPicker.getMonth())
          todayPicker.setMonth(todayPicker.getMonth())
          return {
               selectedDeliveryTime: null,
               CalendarValue: null,
               CalendarOnContext: null,
               minDate: today,
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
     computed: {
          ...mapGetters('shopping/cart/', ['subMontoTotal']),
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          dameSubMontoTotal(){
               if (this.getTypeCurrencySymbol === 1)
                    return this.subMontoTotal.toFixed(2)
               else
                    return (this.subMontoTotal * this.getExchangeRate).toFixed(2)
          },
     },
     methods : {
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
.boxCartCuenta
     border-radius: 10px
     background: $blancoHuno
     border: 1px solid $blancoHuno2
     margin-top: .95rem
     @media screen and (min-width: 992px)
          margin-top: .95rem
     @media screen and (min-width: 1200px)
          margin-top: 1.5rem
     @media screen and (min-width: 1400px)
          margin-top: 1.72rem

     .boxButton
          padding: 0 0 1.5rem
          button
               border: 1px solid $greenLight3
               padding: 0rem 1.95rem
               height: 60px
               background: white
               border-radius: 30px
               text-decoration: none
               width: 90%
               &:first-child
                    background: $greenLight3
                    margin-bottom: 1rem
               &:last-child
                    p
                         color: $greenLight3
               p
                    @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,600,white)
     .borderCartCuenta
          padding: 0 1.75rem 1.25rem 1rem
     .boxResumen
          border-top: 1px solid $blancoHuno2
          padding: 1.5rem 1.75rem 2.5rem 1rem
          .boxDescription
               padding-top: .75rem 
          .colflex
               &:first-child
                    width: 70%
                    padding-right: 1rem 
          h3,
          h2,
          p
               @include font-libre(0.875rem,0.875rem,0.875rem,.875rem,$Montserrat,700,$grayDark18)
               text-transform: uppercase
          h2 
               font-weight: 500
               text-transform: none
               line-height: 2.5rem
          p
               font-size: 0.75rem
               font-weight: 400
               text-transform: none
               
     .boxRow
          padding: .55rem 0
          .title
               @include font-libre(0.875rem,0.875rem,0.875rem,.875rem,$Montserrat,700,$brown)
          .boxRowForm
               padding: .35rem 0 
               .boxFormAction
                    position: relative
                    input[type="text"]
                         border: 1px solid $grayDark13
                         border-radius: 30px 0px 0px 30px
                         border-right: 0
                         height: 45px
                         width: 90%
                         box-sizing: border-box
                         &:focus,
                         &:active,
                         &:hover
                              outline: none
                              box-shadow: none
                    button
                         position: absolute
                         right: 0
                         top: 0
                         height: 45px
                         box-sizing: border-box
                         border-radius: 30px
                         background: $greenLight3
                         border: 0
                         border-right: 1px solid $grayDark13
                         width: 120px
                         @include font-libre(0.75rem,0.75rem,0.75rem,.75rem,$Montserrat,700,white)
     .boxHorario
          // width: $anchoContent
          padding: .35rem 0 0
          @include cbxDateHora()
</style>