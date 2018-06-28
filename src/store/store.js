import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase.js'

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state:{
    curUser: null,
    loggedIn: null
  },
  getters: {
    loggedIn(state){
      return state.loggedIn;
    }
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
    },
    setLoggedIn(state){
      state.loggedIn = true;
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
    }
  }
});
