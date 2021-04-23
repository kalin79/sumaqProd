<template>
     <div class="headerBoxCategory">
          <header>
               <div class="container">
                    <div class="row">
                         <div class="col-4 lineSeparate">
                              <h1>Flores</h1>
                         </div>
                         <div class="col-8">
                              <div class="boxDetail">
                                   <h2>Envía Plantas de Regalo a Atizapan de Zaragoza</h2>
                                   <p>Envía Sonrisas que durarán para siempre. Las Plantas traen paz y armonía a cualquier espacio. Llena de energía y armonía natural el espacio de esa persona especial con cualquiera de estos productos. ¡Puedes enviarlas para cualquier ocasión especial!</p>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     </div>
</template>
<script>
export default {
     
}
</script>
<style lang="sass">
     .headerBoxCategory
          padding: 3.5rem 0 1.75rem
          .boxDetail
               padding-left: .5rem
          .lineSeparate
               border-right: 1px solid rgba($gray, 0.25)
          h1
               @include font-title($pink)
          h2
               @include font-subtitle($pink)
               margin-bottom: .75rem
          p
               @include font-description($grayDark, left)
               line-height: 1.5em
</style>