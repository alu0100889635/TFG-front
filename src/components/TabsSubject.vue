<template>
    <div class="tabsSubject">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="TEST" :title-link-class="'tab-title-class'" v-on:click="toTest()">
                </b-tab>
                <b-tab title="SUJETO" :title-link-class="'tab-title-class-active'" active>
                        <Container :nmbr="sizeSubject"/>
                        <div class="info2">
                            <div id="alert" class="alerta">
                                <p>POSIBLE CONTAGIO DE CORONAVIRUS</p> <img class="icono" src="../assets/alert-icon.png" widht="30px" height="30px">
                            </div>
                            <div id="llamada">
                                <b-button class="boton" v-on:click="goTo()">Contestar llamada   <i class="fa fa-phone" style="font-size:24px"></i></b-button>
                            </div>

                            <div id="hola">
                                <StopWatch/>
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
import StopWatch from "./StopWatch"

export default {
    name: 'TabsSubject',
    components: {
        Container,
        StopWatch
    },
    data(){
        return {
            sizeSubject: 4,
            disp: false
        };
    },
    mounted(){
        this.display();
    },
    methods: {
        toTest() {
            this.$router.push({path:'/phonecall'});
        },
        toObservaciones() {
            this.$router.push({path:'/observations'});
        },
        goTo(){
            let x = document.getElementById("hola");
            let y = document.getElementById("llamada");
            let z = document.getElementById("alert");

            y.style.display = "none";
            x.style.display = "block";
            z.style.display = "none";

            this.disp = true;
        },

        display(){
            if(this.disp == true){
                let y = document.getElementById("hola");
                y.style.display = "block";
                let x = document.getElementById("llamada");
                x.style.display = "none";
            }
            else{
                let y = document.getElementById("llamada");
                y.style.display = "block";
            }
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

    #hola {
        display: none;
    }

    #llamada {
        display: none;
    }
</style>