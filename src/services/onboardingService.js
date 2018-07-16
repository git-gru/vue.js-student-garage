//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
let linkedinOnboarding = {};
export default {
  updateLinkedinOnboarding(data){
    linkedinOnboarding = data;
  },
  getLinkedinOnboardingData(){
    return linkedinOnboarding;
  }
}
