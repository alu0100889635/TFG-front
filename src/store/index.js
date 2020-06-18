import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = "http://178.62.41.123:3000";

const store = new Vuex.Store({
  state: {
    phonecall: {
      _id: "",
      recentlyTraveled: "",
      sickContact: "",
      sickCovidContact: "",
      healthOfficial: "",
      commonSymptoms: "",
      difficultyBreathing: "",
      riskyGroup: "",
      subject_id: "",
      observations: []
    },
    subject: {
      _id:"",
      fullName: "",
      dni: "",
      birthDate: "",
      address: ""
    }
  },
  mutations: {
    setValuesPhonecall (state, values){
      state.phonecall = { ...state.phonecall, ...values};
    },
    setValuesSubject (state, values){
      state.subject = { ...state.subject, ...values};
    },
    setNewObs(state, values) {
      state.phonecall.observations = {...state.phonecall.observations, values};
    }
  },
  actions: {
    async getResponses({ commit }) {
      await axios.get(URL + "/phonecalls")
      .then(function (response) {
        const resp = response.data[0];
        console.log("respuestas", resp);
        commit("setValuesPhonecall", resp);
      })
      .catch(function(error){
        console.log(error);
      });
    },

    async getSubject({commit}, id){
      let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
      await axios.get(URL + "/subjects/" + id)
      .then(response => {
        let sujeto = response.data;
        let fecha = Object.values(sujeto)[3].split("T")[0].split("-");
        fecha[1] = months[fecha[1]-1];
        sujeto.birthDate = fecha[2] + " de " + fecha[1] + " de " + fecha[0];
        commit("setValuesSubject", sujeto);
      })
      .catch(err => console.log(err));
    },

    async sendObservation({commit}, data){
      console.log("data", data.id);
      let respuesta;
      await axios.post(URL + "/phonecalls/addObservation/" + data.id, data.ob)
      .then(response => {
        respuesta = response.data;
        console.log("respuesta", respuesta);
        commit("setNewObs", respuesta.observations);
      })
      .catch(err => console.log(err));
      return {...respuesta}.observations;
    },

    async getObservations({commit}, id){
      let respuesta;
      await axios.get(URL + "/phonecalls/getObservations/" + id)
      .then(response => {
        respuesta = response.data;
        console.log("respuesta", respuesta);
      })
      .catch(err => console.log(err));
      return respuesta;
    },

    async deletePhonecall({commit}, idphone, idsub){
      console.log("en store", idphone);
      await axios.delete(URL + "/phonecalls/" + idphone)
      .then(response=> console.log(response))
      .catch(err=>console.log(err));
    },
    async deleteSubject({commit}, idsub){
      console.log("en store", idsub);
      await axios.delete(URL + "/subjects/" + idsub)
      .then(response=> console.log(response))
      .catch(err=>console.log(err));
    }
  },

  getters: {
    getAnswers(state){
      return state.phonecall;
    },
    getSubject(state){
      return state.subject;
    },
    getObservations(state){
      return state.phonecall.observations;
    },
    getId(state){
      return state.phonecall._id;
    },
    getIdSub(state){
      return state.phonecall.subject_id;
    }
  }
});

export default store;
