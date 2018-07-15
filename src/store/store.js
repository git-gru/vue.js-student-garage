import Vue from 'vue'
import Vuex from 'vuex'
import firebaseInfo from './firebase.js'
import firebase from 'firebase'
import helperFunctions from './helperFunctions.js'
import currentUser from './user.js'
import router from '../router'

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
    isOnboarded(state){
      return state.onboarded;
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
    studentSignUpMutation(state,payload){
      console.log(payload);
      if(payload.emailSignUp == true){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function(user){
          state.loggedIn = true;
          if(!state.onboarded){
            router.push({ name: 'StudentOnboardIntro' });
          }else{
            router.push({ name: 'ProfilePage' });
          }
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      }
      else if(payload.google == true){
        let provider = new firebase.auth.GoogleAuthProvider();
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        //provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
        //provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // find user in database -> set to current user
            state.loggedIn = true;
            if(!state.onboarded){
              router.push({ name: 'StudentOnboardIntro' });
            }else{
              router.push({ name: 'ProfilePage' });
            }
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
      else if(payload.facebook = true){
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('email');
        console.log("login to facebook");
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          state.loggedIn = true;
          if(!state.onboarded){
            router.push({ name: 'StudentOnboardIntro' });
          }else{
            router.push({ name: 'ProfilePage' });
          }
          // ...
        }).catch(function(error) {
          console.log(error.message);
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
      },
    studentLoginMutation(state,payload){
      if(payload.emailLogin == true){
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // ...
        });
      }
        else if(payload.google == true){
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
              state.loggedIn = true;
              if(!state.onboarded){
                router.push({ name: 'StudentOnboardIntro' });
              }else{
                router.push({ name: 'ProfilePage' });
              }
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
        else if(payload.facebook = true){
          let provider = new firebase.auth.FacebookAuthProvider();
          provider.addScope('email');
          firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            state.loggedIn = true;
            if(!state.onboarded){
              router.push({ name: 'StudentOnboardIntro' });
            }else{
              router.push({ name: 'ProfilePage' });
            }
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            console.log(error.message);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
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
    studentSignUp({commit},payload){
      commit('studentSignUpMutation',payload);
    },
    onboarding({commit},payload){
      commit('updateOnboardingData',payload);
    }
  }
});
