import firebaseInfo from './firebase.js'
import firebase from 'firebase'
import OnboardingService from '../services/onboardingService.js'
import UserService from '../services/userService.js'
import router from '../router'
const db = firebaseInfo.database;
const students = db.collection('students');
const users = db.collection('users');
export default {
  updateOnboardingData: function(curData,tobeAdded){
    let result = Object.assign(curData,tobeAdded);
    return result;
  },
  studentSignUpPassword: function(state,payload){
    let self = this;
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(function(user){
      let profile = {};
      profile.userId = firebase.auth().currentUser.uid;
      profile.isStudent = true;
      profile.isInvestor = false;
      profile.onboarded = false;
      users.add(profile).then(function(docRef){ // add to users collection
        students.add(profile).then(function(docRef) { // add this user to students
          docRef.get().then(function(doc) {
            state.curUser = doc.data(); // set the current state user to this student
            UserService.setCurrentUser(state.curUser);
            console.log("state", state.curUser);
          });
        }).catch(function(error) {
          console.error("Error adding document: ", error);
        });
        console.log("User written with ID: ", docRef.id, "user", docRef); // referring to the user collection
        }).catch(function(error) {
          console.error("Error adding document: ", error);
        });
        state.loggedIn = true;
        if(!state.onboarded){
          self.routerPushStudentNotOnboarded(); // student hasn't been onboarded yet
        }else{
          self.routerPushStudentOnboarded();
        }
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    studentLoginPassword: function(state,payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
    },
    googleSignIn: function(state,payload){
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
    },
    facebookSignIn: function(state,payload){
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
    },
    routerPushStudentNotOnboarded: function(){
      router.push({ name: 'StudentOnboardIntro' });
    },
    routerPushStudentOnboarded: function(){
      router.push({ name: 'ProfilePage' });
    },
    finalizeStudentRefOnboarding: function(state,payload){
      state.onboardingData.garageInfo = this.updateOnboardingData(state.onboardingData.garageInfo,payload);
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
    },
    finalizeUserRefOnboarding: function(state,payload){
      let userRef = users.where("userId", "==", state.curUser.userId).limit(1);
      userRef.get().then(function(snapshot){
        snapshot.docs.forEach(function(doc){ // should only be one user
          let user = doc.data(); // user doc
          let onboardedObj = {onboarded:true};
          users.doc(doc.id).update(onboardedObj);
        });
      });
    }

}
