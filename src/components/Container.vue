<template>
  <div class="container">
    <div id="ctr"></div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: ['nmbr'],
  methods: {
      centerAnswersBorders(rows){
        const elementos = document.getElementsByClassName("grid-item");
        const array = Object.values(elementos);
        for(let i=0; i<array.length; i++){
          let el = Object.values(elementos)[i];
          if((i%2 == 0)){
            el.style.borderBottom = '1px solid rgb(224, 224, 224)';
          }
          else{
            if(rows == 7){
              el.style.justifyContent = 'center';
            }
            else{
              el.style.justifyContent = 'flex-start';
              el.style.marginLeft = '80px';
            }
          }
        }
      },
      createGrid(rows, cols){
        let container = document.getElementById("ctr");
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let contP1 = 0, contP2 = 1, contS1 = 0, contS2 = 1;
        for (let c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            if((c%2) == 0){
              if(rows == 7){
                cell.innerText = Object.values(this.phonecallText)[contP1];
                contP1++;
              }
              else{
                cell.innerText = Object.values(this.subjectText)[contS1];
                contS1++;
              }
            }
            else{
              if(rows == 7){
                console.log(Object.values(this.phonecall)[contP2]);
                if(Object.values(this.phonecall)[contP2] == true){
                  cell.innerText = "Sí";
                  contP2++;
                }
                else{
                  cell.innerText = "No";
                  contP2++;
                }
              }
              else{
                cell.innerText = Object.values(this.subject)[contS2]
                contS2++;
              }
            }
            container.appendChild(cell).className = "grid-item contenedor";
            this.centerAnswersBorders(rows);
        };
      },

      async getAnswers(){
        await this.$store.dispatch("getResponses");
        this.phonecall = {...this.$store.getters.getAnswers};
        const subjectId = { ...this.phonecall }.subject_id;
        const suj = await this.$store.dispatch("getSubject", subjectId);
        this.subject = {...this.$store.getters.getSubject};

        let add = this.subject.address.split(" ");
        this.subject.address = "";
        for(let i= 1; i < add.length; i++){
          add[i] = add[i].charAt(0).toUpperCase() + add[i].slice(1);
          console.log(add[i]);
          this.subject.address = this.subject.address + " " + add[i];
        }
      },
  },

  async mounted(){
    await this.getAnswers();
    this.createGrid(this.rowsNumber, 2);
  },
  data() {
    return {
      rowsNumber: this.nmbr,
      phonecall: {
        recentlyTraveled: "",
        sickContact: "",
        sickCovidContact: "",
        healthOfficial: "",
        commonSymptoms: "",
        difficultyBreathing: "",
        riskyGroup: "",
        subject_id: "",
        observations: [],
      },
      subject: {
        fullName: "",
        dni: "",
        birthDate: "",
        address: ""
      },
      phonecallText: {
        text1: "Viaje a alguno de los países o lugares de riesgo",
        text2: "Contacto con alguien que haya viajado y esté enfermo",
        text3: "Contacto con alguien que padezca coronavirus (COVID-19)",
        text4: "Manifestación de profesional sanitario de posibilidad de contagio",
        text5: "Síntomas",
        text6: "Dificultad respiratoria",
        text7: "Pertenece a grupo de riesgo"
      },
      subjectText: {
        text1: "Nombre completo",
        text2: "DNI",
        text3: "Fecha de nacimiento",
        text4: "Dirección"
      }
    };
  }
}
</script>
<style>
  :root {
    --grid-cols: 1;
    --grid-rows: 1;
  }

  #ctr {
    margin-top: 30px;
    display: grid;
    grid-template-rows: repeat(var(--grid-rows), 1fr);
    grid-template-columns: repeat(var(--grid-cols), 1fr);
  }

  .contenedor {
    padding: 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
