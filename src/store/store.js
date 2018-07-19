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
      state.user = payload;
    },
    studentSignUpMutation(state,payload){
      if(payload.emailSignUp == true){
        helperFunctions.studentSignUpPassword(state,payload);
      }
      else if(payload.google == true){
        helperFunctions.googleSignUp(state,payload);
      }
      else if(payload.facebook = true){
        helperFunctions.facebookSignUp(state,payload);
    }
  },
    studentLoginMutation(state,payload){
      if(payload.emailLogin == true){
        helperFunctions.studentLoginPassword(state,payload);
      }
      else if(payload.google == true){
        helperFunctions.googleSignIn(state,payload);
      }
      else if(payload.facebook = true){
        helperFunctions.facebookSignIn(state,payload);
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
      helperFunctions.finalizeStudentRefOnboarding(state,payload);
      helperFunctions.finalizeUserRefOnboarding(state,payload);
    }
  },
  actions:{
    studentSignUp({commit},payload){
      commit('studentSignUpMutation',payload);
    },
    studentLogin({commit},payload){
      commit('studentLoginMutation',payload);
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
