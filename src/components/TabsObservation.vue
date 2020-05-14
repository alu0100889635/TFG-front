<template>
    <div class="tabsObervations">
        <b-card no-body>
            <b-tabs card>
                <b-tab :title-link-class="'tab-title-class'" title="TEST" v-on:click="toTest()">
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="SUJETO" v-on:click="toSubject()">
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="RECURSOS">
                </b-tab>
                <b-tab :title-link-class="'tab-title-class-active'" title="OBSERVACIONES" active>
                        <Observation :ck="componentKey" :idn="datos.id"/>
                            <b-form-textarea
                        id="textarea"
                        v-model="datos.ob.message"
                        placeholder="Introduzca observación..."
                        rows="8"
                        ></b-form-textarea>
                        <div class="but">
                            <b-button id="cambioColor" class="boton2" v-on:click="sendObs()">AÑADIR</b-button> <!-- v-on:click="sendObs()" -->
                        </div>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import Observation from './Observation'
export default {
    name: 'TabsObservations',
    components: {
        Observation
    },
    data(){
        return {
            datos: {
                id: "",
                ob: {
                    operator_id: "alu0100",
                    message: ""
                },
            timeStamp: "",
            },
            componentKey: 0
        };
    },
    async mounted(){
        await this.getId();
    },
    methods: {
        toTest() {
            this.$router.push({path:'/phonecall'});
        },
        toSubject() {
            this.$router.push({path:'/subject'});
        },
        async sendObs(){
            await this.$store.dispatch("sendObservation", {...this.datos});
            this.datos.ob.message = "";
            this.componentKey += 1;
            let but = document.getElementById("cambioColor");
            but.style.background = '#4cece3';
            but.style.color = 'black';
        },
        async getId() {
            this.datos.id = await this.$store.getters.getId; 
            console.log(this.datos.id);
        },
    },
}
</script>

<style>
    .but{
        margin-top: 30px;
    }

    .boton2 {
        background: #4cece3;
        color: black;
        border-color: transparent;
        border-radius: 5px;
        height: 60px;
        width: 300px;
        font-size: 30px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
    }

    #textarea{
        margin-top: -70px;
        width: 99%;
    }

    :root {
        --grid-cols: 1;
        --grid-rows: 1;
    }

    #obs {
        margin-top: -60px;
        display: grid;
        grid-template-rows: repeat(var(--grid-rows), 1fr);
        grid-template-columns: repeat(var(--grid-cols), 1fr);
    }


    .observacion {
        padding: 1em;
        width: 95%;
        height: 52px;
        display: flex;
    }

    .operator {
        width: 5%;
        display: flex;
        justify-content: flex-start;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        margin-left: 20px;
    }

    .msg {
        width: 90%;
        display: flex;
        justify-content: flex-start;
        font-style: normal;
        font-weight: 300;
        line-height: 30px;
        font-size: 18px;
    }

    .time {
        width: 5%;
        display: flex;
        justify-content: flex-end;
    }

    .tab-title-class {
        color:grey;
    }

    .tab-title-class-active {
        color:grey;
        font-weight: bold;
    }

</style>