import Vue from 'vue'
import Vuex from 'vuex'
import firebaseInfo from './firebase.js'
import firebase from 'firebase'
import helperFunctions from './helperFunctions.js'
import OnboardingService from '../services/onboardingService.js'
import UserService from '../services/userService.js'
import router from '../router'
const db = firebaseInfo.database;
const students = db.collection('students');
const users = db.collection('users');
Vue.use(Vuex);
Vue.use(firebase);

export const store = new Vuex.Store({
  state:{
    curUser: {},
    loggedIn: null,
    onboarded: null,
    onboardingData : {
      linkedinInfo: {},
      garageInfo:{}
    }
  },
  getters: {
    loggedIn(state){
      return state.loggedIn;
    },
    isOnboarded(state){
      return state.curUser.onboarded;
    },
    getOnboardingData(state){
      return state.onboardingData.garageInfo;
    },
    getLinkedinInfo(state){
      return state.onboardingData.linkedinInfo;
    },
    getCurrentUser(state){
      return state.curUser;
    }
  },
  mutations: {
    setUser(state,payload){
      state.curUser = payload;
    },
    studentSignUpMutation(state,payload){
      console.log(payload);
      if(payload.emailSignUp == true){
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function(user){
          let profile = {};
          profile.userId = firebase.auth().currentUser.uid;
          profile.isStudent = true;
          profile.isInvestor = false;
          profile.onboarded = false;
          users.add(profile).then(function(docRef){ // add to users collection
            students.add(profile).then(function(docRef) { // add this user to students
              docRef.get().then(function(doc) {
                state.curUser = doc.data(); // set the current user to this student
                UserService.setCurrentUser(state.curUser);
                console.log("state", state.curUser);
              });
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
            console.log("User written with ID: ", docRef.id, "user", docRef); // referring to the user collection
          }).catch(function(error) {
              console.error("Error adding document: ", error);
          });
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
      state.onboardingData.garageInfo = helperFunctions.updateOnboardingData(state.onboardingData.garageInfo,payload);
    },
    insertLinkedinInfo(state,payload){
      state.onboardingData.linkedinInfo = helperFunctions.updateOnboardingData(state.onboardingData.linkedinInfo,payload);
      OnboardingService.updateLinkedinOnboarding(state.onboardingData.linkedinInfo);
    },
    studentOnboardingFinished(state,payload){
      state.onboardingData.garageInfo = helperFunctions.updateOnboardingData(state.onboardingData.garageInfo,payload);
      let studentRef = students.where("userId", "==", state.curUser.userId).limit(1);
      studentRef.get().then(function(snapshot){
        snapshot.docs.forEach(function(doc){ // should only be one user
          students.doc(doc.id).update(state.onboardingData.garageInfo).then(function(){
            studentRef.get().then(function(snapshot){
              snapshot.docs.forEach(function(doc){
                console.log("Document successfully updated!");
                state.curUser = doc.data();
                console.log(state.curUser);
              })
            })
          })
          .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
        });
      });
      let userRef = users.where("userId", "==", state.curUser.userId).limit(1);
      userRef.get().then(function(snapshot){
        snapshot.docs.forEach(function(doc){ // should only be one user
          let user = doc.data(); // user doc
          let onboardedObj = {onboarded:true};
          users.doc(doc.id).update(onboardedObj);
        });
      });
    }
  },
  actions:{
    studentSignUp({commit},payload){
      commit('studentSignUpMutation',payload);
    },
    onboarding({commit},payload){
      commit('updateOnboardingData',payload);
    },
    linkedinInfo({commit},payload){
      commit('insertLinkedinInfo',payload);
    },
    finishStudentOnboarding({commit},payload){
      commit('studentOnboardingFinished',payload);
    }
  }
});
