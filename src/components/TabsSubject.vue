<template>
    <div class="tabsSubject">
        <b-card no-body>
            <b-tabs card>
                <b-tab class="test" title="TEST" v-on:click="toTest()">
                </b-tab>
                <b-tab title="SUJETO" active>
                    <div class="SecondTab">
                        <div class="cont">
                            <Container :nmbr="sizeSubject"/>
                        </div>
                        <div class="info">
                            <div class="alerta">
                                <p>Resultado:</p>
                                <h3>POSIBLE CONTAGIO DE CORONAVIRUS (COVID-19)</h3>
                                <b-button variant="success">Contestar llamada</b-button>
                               <!--  Cuando haga click, abrirá nueva ventana con timer de llamada -->
                               <!-- Luego, tendrá botones de finalizar y poner en pausa -->
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="RECURSOS">
                </b-tab>
                <b-tab title="OBSERVACIONES" v-on:click="toObservaciones()">
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import Container from "./Container"

export default {
    name: 'TabsSubject',
    components: {
        Container
    },
    data(){
        return {
            sizeSubject: 4
        };
    },
    methods: {
        toTest() {
            this.$router.push({path:'/phonecall'});
        },
        toObservaciones() {
            this.$router.push({path:'/observations'});
        }
    },
}
</script>

<style>
    .SecondTab {
        display: flex;
        flex-direction: row;
        align-items: center;

    }
    .info {
        width: 40%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cont {
        width: 60%;
        height: 100%;
    }

    .alerta {
        width: 400px;
        height: 233px;
        border-radius: 10px;
        border: 1px solid lightgray;
        padding: 20px;
    }
</style>