<template>
    <div class="observation">
        <div id="obs">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Observation',
    props: ['ck', 'idn'],
    data(){
        return {
            message: "",
            operator_id: "",
            timeStamp: "",
            size: "",
            observations: [],
            id: "" 
        };
    },
    async mounted(){
        await this.getData();
    },
    methods: {
        async getData(){
            this.id = await this.$store.getters.getId; 
            this.observations = await this.$store.dispatch("getObservations", this.id);
            this.size = this.observations.length;
            console.log(this.id);
            this.createGrid(this.size, 1);
        },
        addInfo(rows, cols){
            let first = document.getElementsByClassName("grid-item");
            const size = Object.values(first).length;
            for(let i = size-1; i >= 0; i--){    
                Object.values(first)[i].style.setProperty('--grid-rows', rows);
                Object.values(first)[i].style.setProperty('--grid-cols', cols);
                let prueba = document.createElement("div");
                prueba.innerText = this.observations[i].operator_id;
                prueba.style.width= '33.33%';
                Object.values(first)[i].appendChild(prueba).className = "operator";

                let prueba2 = document.createElement("div");
                prueba2.innerText = this.observations[i].message;
                Object.values(first)[i].appendChild(prueba2).className = "msg";

                let prueba3 = document.createElement("div");
                const hora = this.observations[i].createdAt.split("T");
                const horaFinal = hora[1].split("Z");
                const Hora = horaFinal[0].split(".");
                prueba3.innerText = Hora[0];
                Object.values(first)[i].appendChild(prueba3).className = "time";
                    
            }
            
        },
        createGrid(rows, cols){
            let container = document.getElementById("obs");
            container.style.setProperty('--grid-rows', rows);
            container.style.setProperty('--grid-cols', cols);
            for (let c = 0; c < (rows * cols); c++) {
                let cell = document.createElement("div");
                cell.style.border = '1px solid rgb(224, 224, 224)';
                cell.style.justifyContent = 'center';
                cell.style.marginBottom = '10px';
                container.appendChild(cell).className = "grid-item observacion";
            };
            this.addInfo(1, 3);
            
        },
    },
    watch:{
        ck: async function(){
            let first = document.getElementsByClassName("grid-item");
            const size = Object.values(first).length;
            console.log("prueba", size);
            if(size != 0){
                Object.values(first).map(n => n && n.remove());
            }
            await this.getData();
        }
    }
}
</script>

<style>
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
        font-size: 15px;
    }

    .time {
        width: 5%;
        display: flex;
        justify-content: flex-end;
    }
</style>