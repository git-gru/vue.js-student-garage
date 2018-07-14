import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase.js'
import helperFunctions from './helperFunctions.js'
import currentUser from './user.js'

Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state:{
    curUser: currentUser,
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
    },
    getCurrentUser(state){
      return state.curUser;
    }
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
    },
    studentSignUp(state,payload){
      if(payload.emailSignUp == true){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      }
        else if(payload.google == true){
          this.googleSignIn(payload,state);
        }
        else if(payload.facebook = true){
          facebookSignIn(payload,state);
        }
      },
    studentLogin(state,payload){
      if(payload.emailLogin == true){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // ...
        });
      }
        else if(payload.google == true){
          this.googleSignIn(payload,state);
        }
        else if(payload.facebook = true){
          facebookSignIn(payload,state);
        }
      },
    setLoggedIn(state){
      state.loggedIn = true;
    },
    updateOnboardingData(state, payload){
      state.onboardingData = helperFunctions.updateOnboardingData(state.onboardingData,payload);
    }
  },
  actions:{
    testLogin({commit}){
      commit('setLoggedIn');
    },
    onboarding({commit},payload){
      commit('updateOnboardingData',payload);
    }
  },
  methods:{
    googleSignIn(payload,state){
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
      provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // find user in database -> set to current user 
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      },
      facebookSignIn(payload,state){
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
  }
});
