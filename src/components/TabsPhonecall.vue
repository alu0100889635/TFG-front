<template>
    <div class="tabsPhonecall">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="TEST" active>
                    <div class="firstTab">
                        <div class="cont">
                            <Container :nmbr="sizeTest"/>
                        </div>
                        <div class="info">
                            <div class="alerta">
                                <p>Resultado:</p>
                                <h3>POSIBLE CONTAGIO DE CORONAVIRUS (COVID-19)</h3>
                                <!-- <b-button variant="success">Contestar llamada</b-button> -->
                               <!--  Cuando haga click, abrirá nueva ventana con timer de llamada -->
                               <!-- Luego, tendrá botones de finalizar y poner en pausa -->
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="SUJETO" v-on:click="toSubject()">
                </b-tab>
                <b-tab title="RECURSOS">
                </b-tab>
                <b-tab title="OBSERVACIONES" v-on:click="toObservations()">
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import Container from "./Container"
export default {
    name: 'TabsPhonecall',
    components: {
        Container
    },
    data(){
        return {
            sizeTest: 7,
        };
    },
    methods: {
        toSubject() {
            this.$router.push({path:'/subject'});
        },
        toObservations() {
            this.$router.push({path:'/observations'});
        }
    }
}
</script>

<style>
    .firstTab {
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
        height: 250px;
        border-radius: 10px;
        border: 1px solid lightgray;
        padding: 20px;
    }
</style>