import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase.js'
import helperFunctions from './helperFunctions.js'

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state:{
    curUser: null,
    loggedIn: null,
    onboarded: null,
    onboardingData : {}
  },
  getters: {
    loggedIn(state){
      return state.loggedIn;
    },
    getOnboardingData(state){
      return state.onboardingData;
    }
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
    },
    setLoggedIn(state){
      state.loggedIn = true;
    },
    updateOnboardingData(state, payload){
      state.onboardingData = helperFunctions.updateOnboardingData(state.onboardingData,payload);
    }
  },
  actions:{
    signUserUp({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
      .then(
        user => {
          commit('setUser',user);
        }
      ).catch(
        error => {
          console.log(error)
        }
      )
    },
    testLogin({commit}){
      commit('setLoggedIn');
    },
    onboarding({commit},payload){
      commit('updateOnboardingData',payload);
    }
  }
});
