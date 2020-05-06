<template>
    <div class="tabsSubject">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="TEST" v-on:click="toTest()">
                </b-tab>
                <b-tab title="SUJETO" active>
                        <Container :nmbr="sizeSubject"/>
                        <div class="info2">
                            <div class="alerta">
                                <p>POSIBLE CONTAGIO DE CORONAVIRUS</p>
                               <!--  Cuando haga click, abrirá nueva ventana con timer de llamada -->
                               <!-- Luego, tendrá botones de finalizar y poner en pausa -->
                            </div>
                            <div>
                                <b-button class="boton" v-on:click="goTo()">Contestar llamada   <i class="fa fa-phone" style="font-size:24px"></i></b-button>
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
        },
        goTo(){
            //let routeData = this.$router.resolve({name: '/subject'});
            window.open(this.$router.resolve({path:'/observations'}), '_blank', "width=400,height=300");
            //window.open("", "", "width=400,height=300");
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    .info2 {
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .boton {
        background: #4cece3;
        color: black;
        border-color: transparent;
        border-radius: 5px;
        height: 60px;
        width: 300px;
        font-size: 20px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
    }
</style>