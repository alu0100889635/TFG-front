<template>
    <div class="tabsObervations">
        <b-card no-body>
            <b-tabs card>
                <b-tab class="test" title="TEST" v-on:click="toTest()">
                </b-tab>
                <b-tab title="SUJETO" v-on:click="toSubject()">
                </b-tab>
                <b-tab title="RECURSOS">
                </b-tab>
                <b-tab title="OBSERVACIONES" active>
                    <p>hola</p>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>

export default {
    name: 'TabsObservations',
    components: {
    },
    data(){
        return {
        };
    },
    methods: {
        toTest() {
            this.$router.push({path:'/phonecall'});
        },
        toSubject() {
            this.$router.push({path:'/subject'});
        }
    },
}
</script>

<style>
</style>