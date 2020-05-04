import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = "http://178.62.41.123:3000";

const store = new Vuex.Store({
  state: {
    phonecall: {
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
      await axios.get(URL + "/subjects/" + id)
      .then(response => {
        const sujeto = response.data;
        console.log("sujeto traído", sujeto);
        commit("setValuesSubject", sujeto);
      })
      .catch(err => console.log(err));
    }
  },

  getters: {
    getAnswers(state){
      return state.phonecall;
    },
    getSubject(state){
      return state.subject;
    }
  }
});

export default store;
