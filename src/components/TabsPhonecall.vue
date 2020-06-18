<template>
    <div class="tabsPhonecall">
        <b-card no-body>
            <b-tabs card>
                <b-tab :title-link-class="'tab-title-class-active'" title="TEST" active>
                    <Container :nmbr="sizeTest"/>
                    <div class="info">
                        <div class="alerta">
                            <p>POSIBLE CONTAGIO DE CORONAVIRUS</p><img class="icono" src="../assets/alert-icon.png" widht="30px" height="30px">
                        </div>
                    </div>
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="SUJETO" v-on:click="toSubject()">
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="RECURSOS">
                </b-tab>
                <b-tab :title-link-class="'tab-title-class'" title="OBSERVACIONES" v-on:click="toObservations()">
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
    .info {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    

    .alerta {
        margin-top: 50px;
        width: 90%;
        height: 80px;
        border-radius: 3px;
        border: none;
        padding: 20px;
        background: rgb(76, 236, 227, 0.5);
        font-size: 20px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        display: flex;
        justify-content: center;
        align-content: center;
        margin-bottom: 40px;
    }

    .tab-title-class {
        color:grey;
    }

    .tab-title-class-active {
        color:black;
        font-weight: bold;
    }
    
    .icono {
        margin-left: 10px;
    }

</style>