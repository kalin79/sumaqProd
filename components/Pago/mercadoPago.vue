<template>
     <div class="boxPagoOnline">
          <div class="container">
               <div class="boxTitle">
                    <!-- {{ getForm }} -->
                    <h1>Pago con Tarjeta de Crédito</h1>
                    <p>Para garantizar su seguridad todas nuestras transacciones son encriptadas.</p>
               </div>
               <div class="boxForm">
                    <form id="paymentForm" @submit.prevent="generateCardToken">
                         <h3>Detalles del comprador</h3> 
                              <div>
                                   <div class="mb-3" v-if="getForm">
                                        <label for="email">E-mail</label>
                                        <input id="email" class="form-control" name="email" type="text" placeholder="Escriba su correo"/>
                                   </div>
                                   <div class="row ">
                                        <div class="col-12 col-md-6 mb-3">
                                             <div class="">
                                                  <label for="docType">Tipo de documento</label>
                                                  <select id="docType" class="custom-select" name="docType" data-checkout="docType" type="text"></select>
                                             </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                             <div class="">
                                                  <label for="docNumber">Número de documento</label>
                                                  <input id="docNumber" class="form-control" name="docNumber" data-checkout="docNumber" type="text"/>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         <h3>Detalles de la tarjeta</h3>
                              <div>
                                   <div class="row">
                                        <div class="mb-3 col-12 col-md-6" v-if="getForm">
                                             <label for="cardholderName">Titular de la tarjeta</label>
                                             <input id="cardholderName" name="cardholderName" class="form-control" data-checkout="cardholderName" type="text" placeholder="Escriba el nombre como aparece en su tarjeta">
                                        </div>
                                        <div class="mb-3 col-12 col-md-6">
                                             <label for="cardNumber">Número de la tarjeta</label>
                                             <input type="text" id="cardNumber" name="cardNumber" class="form-control" data-checkout="cardNumber"
                                                  onselectstart="return false" onpaste="return false"
                                                  oncopy="return false" oncut="return false"
                                                  ondrag="return false" ondrop="return false" autocomplete=off>
                                        </div>
                                   </div>
                                   
                                   <div class="">
                                        <div class="row">
                                             <div class="col-12 col-md-6 mb-3">
                                                  <div class="row">
                                                       <div class="col-6 col-md-6">
                                                            <label for="">Mes que expira</label>
                                                            <input type="text" class="form-control" placeholder="MM" id="cardExpirationMonth" name="cardExpirationMonth" data-checkout="cardExpirationMonth"
                                                            onselectstart="return false" onpaste="return false"
                                                            oncopy="return false" oncut="return false"
                                                            ondrag="return false" ondrop="return false" autocomplete=off>
                                                       </div>
                                                       <div class="col-6 col-md-6">
                                                            <label for="">Año que expira</label>
                                                            <input type="text" placeholder="YY" class="form-control" id="cardExpirationYear" name="cardExpirationYear" data-checkout="cardExpirationYear"
                                                            onselectstart="return false" onpaste="return false"
                                                            oncopy="return false" oncut="return false"
                                                            ondrag="return false" ondrop="return false" autocomplete=off>
                                                       </div>
                                                  </div>
                                             </div>     
                                             
                                             <div class="col-12 col-md-6 mb-3">
                                                  <label for="securityCode">Código de seguridad</label>
                                                  <input id="securityCode" name="securityCode" class="form-control" data-checkout="securityCode" type="text"
                                                       onselectstart="return false" onpaste="return false"
                                                       oncopy="return false" oncut="return false"
                                                       ondrag="return false" ondrop="return false" autocomplete=off>
                                             </div>
                                        </div>
                                   </div>
                              
                              
                              <div class="row">

                                   <div id="issuerInput" class="mb-3 col-12 col-md-6">
                                        <label for="issuer">Banco emisor</label>
                                        <select id="issuer" name="issuer"  class="custom-select" data-checkout="issuer"></select>
                                   </div>
                                   <div class="mb-3 col-12 col-md-6">
                                        <label for="installments">Cuotas</label>
                                        <select type="text" id="installments" class="custom-select" name="installments"></select>
                                   </div>
                              </div>
                              
                              <div class="mb-3">
                                   <input type="text" name="transactionAmount" class="form-control" id="transactionAmount" v-model="getMontoTotal" />
                                   <input type="hidden" name="paymentMethodId" class="form-control" id="paymentMethodId" />
                                   <input type="hidden" name="description" class="form-control" id="description" value="Compra de productos de SUMAQ" />
                                   <input type="text" name="codigoProducto" class="form-control" id="codigoProducto" v-model="getDataBuy.idSalesCode" />
                                  
                                   <div class="boxButtom">
                                        <button type="submit"><p>Pagar</p></button>
                                   </div>
                              </div>
                         </div>
                         </form>
               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
     data() {
          return {
               doSubmit : false,
               keyMercadopago : 'TEST-3caf4e17-77e3-49d9-88d3-cd8c33c5d19a'
          }
     },
     computed: {
          ...mapGetters('shopping/cart/', ['getMontoTotal']),
          ...mapGetters('shopping/user/', ['getForm']),
          ...mapGetters('shopping/cart/', ['getCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getTypeCurrencySymbol']),
          ...mapGetters('shopping/cart/', ['getExchangeRate']),
          ...mapGetters('shopping/buy/', ['getDataBuy']),
          
          ...mapState(
               { dataCart: state => state.shopping.cart.dataCart},
          ),
     },
     mounted() {
          window.Mercadopago.setPublishableKey(this.keyMercadopago)
          window.Mercadopago.getIdentificationTypes()
          document.getElementById('cardNumber').addEventListener('change', this.guessPaymentMethod)
          // document.getElementById('paymentForm').addEventListener('submit', this.getCardToken)
     },
     methods: {
          async generateCardToken(){
               console.log(11)
               this.getCardToken()
          },
          async getCardToken(){
               // event.preventDefault();
               if(!this.doSubmit){
                    let $form = document.getElementById('paymentForm');
                    window.Mercadopago.createToken($form, this.setCardTokenAndPay);
                    return false;
               }
          },
          async setCardTokenAndPay(status, response) {
               let _this = this
               if (status == 200 || status == 201) {
                    let form = document.getElementById('paymentForm');
                    let card = document.createElement('input');
                    card.setAttribute('name', 'token');
                    card.setAttribute('type', 'hidden');
                    card.setAttribute('value', response.id);
                    form.appendChild(card);
                    let dataSolicitud = {
                         'email' : $('#email').val(),
                         'docType' : $('#docType').val(),
                         'docNumber' : $('#docNumber').val(),
                         'cardholderName' : $('#cardholderName').val(),
                         'cardNumber' : $('#cardNumber').val(),
                         'cardExpirationMonth' : $('#cardExpirationMonth').val(),
                         'cardExpirationYear' : $('#cardExpirationYear').val(),
                         'securityCode' : $('#securityCode').val(),
                         'issuer' : $('#issuer').val(),
                         'installments' : $('#installments').val(),
                         'transactionAmount' : $('#transactionAmount').val(),
                         'description' : $('#description').val(),
                         'codigoProducto' : $('#codigoProducto').val(),
                         'paymentMethodId' : $('#paymentMethodId').val(),
                         'token' : response.id,
                    }
                    this.doSubmit=true;
                    console.log(dataSolicitud)
                    try{
                         let sendContact = await _this.$axios.$post(`process_payment/${_this.getIdSalesCode}`,dataSolicitud)
                         console.log(sendContact)
                    }catch (error) {
                         console.log(error)
                    } finally {
                         console.log('final')
                    }
                    // form.submit();
               } else {
                    alert("Verify filled data!\n"+JSON.stringify(response, null, 4));
               }
          },
          async setInstallments(status, response){
               if (status == 200) {
                    document.getElementById('installments').options.length = 0;
                    response[0].payer_costs.forEach( payerCost => {
                         let opt = document.createElement('option');
                         opt.text = payerCost.recommended_message;
                         opt.value = payerCost.installments;
                         document.getElementById('installments').appendChild(opt);
                    });
               } else {
                    alert(`installments method info error: ${response}`);
               }
          },
          async getInstallments(paymentMethodId, transactionAmount, issuerId){
               let _this = this
               window.Mercadopago.getInstallments({
                    "payment_method_id": paymentMethodId,
                    "amount": parseFloat(transactionAmount),
                    "issuer_id": parseInt(issuerId)
               }, _this.setInstallments);
          },
          async setIssuers(status, response) {
               if (status == 200) {
                    let issuerSelect = document.getElementById('issuer');
                    response.forEach( issuer => {
                         let opt = document.createElement('option');
                         opt.text = issuer.name;
                         opt.value = issuer.id;
                         issuerSelect.appendChild(opt);
                    });

                    this.getInstallments(
                         document.getElementById('paymentMethodId').value,
                         document.getElementById('transactionAmount').value,
                         issuerSelect.value
                    );
               } else {
                    alert(`issuers method info error: ${response}`);
               }
          },
          async getIssuers(paymentMethodId) {
               let _this = this
               window.Mercadopago.getIssuers(
                    paymentMethodId,
                    _this.setIssuers
               );
          },
          async setPaymentMethod(status, response) {
               if (status == 200) {
                    let paymentMethod = response[0];
                    document.getElementById('paymentMethodId').value = paymentMethod.id;

                    this.getIssuers(paymentMethod.id);
               } else {
                    alert(`payment method info error: ${response}`);
               }
          },
          async guessPaymentMethod (event) {
               let cardnumber = document.getElementById("cardNumber").value
               let _this = this
               if (cardnumber.length >= 6) {
                    let bin = cardnumber.substring(0,6)
                    window.Mercadopago.getPaymentMethod({
                         "bin": bin
                    }, _this.setPaymentMethod)
               }
          },
     }

}
</script>
<style lang="sass">
     .boxPagoOnline
          padding: 3rem 0 2rem
          .boxForm
               @include inputFormPago()
               .boxButtom
                    padding: 1.35rem 1rem 2rem
                    margin: auto
                    text-align: center
                    button
                         border: 1px solid $greenLight3
                         padding: 0rem 1.95rem
                         height: 50px
                         background: $greenLight3
                         border-radius: 30px
                         text-decoration: none
                         width: 300px
                         p
                              @include font-libre(1rem,1rem,1rem,1rem,$Montserrat,600,white)
               h3
                    @include font-libre(1.25rem,1.25rem, 1.25rem,1.25rem,$Montserrat,500,$grayDark18)
                    margin: 2.5rem 0 1rem
               label
                    @include font-libre(.85rem,.85rem, .85rem,.85rem,$Montserrat,400,$grayDark18)
                    line-height: 2em
          .boxTitle
               margin-bottom: 1rem
               h1
                    @include font-libre(1.75rem,1.75rem, 1.75rem,1.75rem,$Montserrat,600,$grayDark18)
                    text-align: center
                    line-height: 2em
               p
                    @include font-libre(1rem,1rem, 1rem,1rem,$Montserrat,400,$grayDark18)
                    text-align: center
                    line-height: 1em
</style>