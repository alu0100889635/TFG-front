<template>
    <div class="tabsSubject">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="TEST" :title-link-class="'tab-title-class'" v-on:click="toTest()">
                </b-tab>
                <b-tab title="SUJETO" :title-link-class="'tab-title-class-active'" active>
                        <Container :nmbr="sizeSubject"/>
                        <div class="info2">
                            <div class="alerta">
                                <p>POSIBLE CONTAGIO DE CORONAVIRUS</p>
                            </div>
                            <div>
                                <b-button class="boton" v-on:click="goTo()">Contestar llamada   <i class="fa fa-phone" style="font-size:24px"></i></b-button>
                            </div>
                        </div>
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="RECURSOS" >
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="OBSERVACIONES" v-on:click="toObservaciones()">
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

    .tab-title-class {
        color:grey;
    }

    .tab-title-class-active {
        color:grey;
        font-weight: bold;
    }
</style>