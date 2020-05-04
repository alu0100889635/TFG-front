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
      setColors(){
        const elementos = document.getElementsByClassName("grid-item");
        const array = Object.values(elementos);
        for(let i=0; i<array.length; i+=4){
          let el = Object.values(elementos)[i];
          el.style.background = 'lightgrey';
          if(i == 0){
              el.style.borderTopLeftRadius= '10px';
            }
          if(this.rowsNumber == 7){
            if(i == 12){
              el.style.borderBottomLeftRadius= '10px';
            }
          }
        };
        for(let i=1; i<array.length; i+=4){
          let el = Object.values(elementos)[i];
          el.style.background = 'lightgrey';
          if(i == 1){
              el.style.borderTopRightRadius= '10px';
          }
          if(this.rowsNumber == 7){
            if(i == 13){
              el.style.borderBottomRightRadius= '10px';
            }
          }
        };
        for(let i=2; i<array.length; i+=4){
          let el = Object.values(elementos)[i];
          el.style.background = 'whitesmoke';
          if(this.rowsNumber == 4){
            if(i == 6){
              el.style.borderBottomLeftRadius= '10px';
            }
          }
        };
        for(let i=3; i<array.length; i+=4){
          let el = Object.values(elementos)[i];
          el.style.background = 'whitesmoke';
          if(this.rowsNumber == 4){
            if(i == 7){
              el.style.borderBottomRightRadius= '10px';
            }
          }
        };
        
      },
      createGrid(rows, cols){
        let container = document.getElementById("ctr");
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        let contP1 = 0, contP2 = 0, contS1 = 0, contS2 = 0;
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
                if(Object.values(this.phonecall)[contP2]){
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
            container.appendChild(cell).className = "grid-item";
            this.setColors();
        };
      },

      async getAnswers(){
        const respuestas = this.$store.getters.getAnswers;
        this.phonecall = { ...respuestas };
        const sujeto = this.$store.getters.getSubject;
        this.subject = { ...sujeto };
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
        observations: ["este es el primer mensaje", "y este es el segundo"],
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
  display: grid;
  grid-template-rows: repeat(var(--grid-rows), 1fr);
  grid-template-columns: repeat(var(--grid-cols), 1fr);
}

.grid-item {
  padding: 1em;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
