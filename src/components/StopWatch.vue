<template>
    <div class="stopWatch">
        <Clock div="time" ref="parar"/>
        <div class="botones">
            <div class="bt1">
                <b-button class="boton" v-on:click=" endCall()">Finalizar llamada</b-button>
            </div>
            <div class="bt2">
                <b-button id ="hola1" class="boton bt32" v-on:click="pausa()">{{ texto }}</b-button>
                <b-button id="hola2" class="boton bt33" v-on:click="reanudar()">{{ texto2 }}</b-button>
            </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Clock from '@/components/Clock.vue'

export default {
    name: 'StopWatch',
    components: {
        Clock
    },

    data(){
        return {
            id: "",
            texto: "Pausar llamada",
            texto2: "Reanudar llamada",
        }
    },
    methods:{
        async endCall(){
            this.$refs.parar.stop();
            this.$refs.parar.reset();
            const idphone = await this.$store.getters.getId;
            const idsub = await this.$store.getters.getIdSub;
            await this.$store.dispatch("deletePhonecall", idphone);
            await this.$store.dispatch("deleteSubject", idsub);
            await this.getData();
            this.$router.push({path:'/phonecall'});
        },
        pausa(){
            this.$refs.parar.stop();
            let x = document.getElementById("hola1");
            let y = document.getElementById("hola2");

            x.style.display = "none";
            y.style.display = "block";
        },

        reanudar(){
            this.$refs.parar.start();
            let x = document.getElementById("hola1");
            let y = document.getElementById("hola2");

            x.style.display = "block";
            y.style.display = "none";
        },

        async getData(){
            await this.$store.dispatch("getResponses");
            const phonecall = {...this.$store.getters.getAnswers};
            const subjectId = { ...phonecall }.subject_id;
            const suj = await this.$store.dispatch("getSubject", subjectId);
        }
    }
}
</script>

<style>

    .stopWatch {
        margin-top: 20px;
    }
    .botones {
        display: flex;
    }

    .bt1{
        margin-top: 10px;
        margin-right: 10px;
    }

    .bt2{
        margin-top: 10px;
        margin-left: 10px;
    }

    .bt33 {
        display: none;
    }

    .time {
        display: flex;
        justify-content: center;

    }
</style>