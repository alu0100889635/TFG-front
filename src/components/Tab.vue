<template>
    <div class="tab">
        <!-- <div class="cont"> --><Container :nmbr="4"/><!-- </div> -->
        <!-- <div class="info"><div class="alerta"><p>Resultado:</p><h3>POSIBLE CONTAGIO DE CORONAVIRUS (COVID-19)</h3><p> &#9888;</p></div></div> -->
    </div>
</template>

<script>
import Container from "./Container"

export default {
    name: 'Tab',
    components: {
        Container
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    
</style>
