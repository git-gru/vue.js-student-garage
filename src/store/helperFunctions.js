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
        if(!state.curUser.onboarded){
          self.routerPushStudentNotOnboarded(); // student hasn't been onboarded yet
        }else{
          self.routerPushStudentOnboarded();
        }
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        payload.emailAssociated();
        // ...
      });
    },
    studentLoginPassword: function(state,payload){
      let self = this;
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(function(user){
        let curUserId = firebase.auth().currentUser.uid;
         students.where("userId", "==", curUserId).limit(1).get().then(function(snapshot){
          snapshot.docs.forEach(function(doc){ // should only be one user
            state.curUser = doc.data(); // set the current state user to this student
            UserService.setCurrentUser(state.curUser);
            if(!state.curUser.onboarded){
              self.routerPushStudentNotOnboarded(); // student hasn't been onboarded yet
            }else{
              self.routerPushStudentOnboarded();
            }
          });
        });
      });
    },
    googleSignIn: function(state,payload){
      let self = this;
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(user){
        self.studentCheckStatus(state,payload);
      });
    },
    facebookSignIn: function(state,payload){
      let self = this;
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      console.log("login to facebook");
      firebase.auth().signInWithPopup(provider).then(function(user){
        self.studentCheckStatus(state,payload);
      });
    },
    googleSignUp: function(state,payload){
      let self = this;
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // try to see if there's already a user with this info
          self.studentCheckStatus(state,payload);
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
    facebookSignUp: function(state,payload){
      let self = this;
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // try to see if there's already a user with this info
          self.studentCheckStatus(state,payload);
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
    studentLogin: function(state,payload){
      let self = this;
      let curUserId = firebase.auth().currentUser.uid;
       students.where("userId", "==", curUserId).limit(1).get().then(function(snapshot){
        snapshot.docs.forEach(function(doc){ // should only be one user
          state.curUser = doc.data(); // set the current state user to this student
          UserService.setCurrentUser(state.curUser);
          if(!state.curUser.onboarded){
            self.routerPushStudentNotOnboarded(); // student hasn't been onboarded yet
          }else{
            self.routerPushStudentOnboarded();
          }
        });
      });
    },
    studentSignUp: function(state,payload){
      let self = this;
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
            state.loggedIn = true;
            if(!state.curUser.onboarded){
              router.push({ name: 'StudentOnboardIntro' });
            }else{
              router.push({ name: 'ProfilePage' });
            }
          });
        }).catch(function(error) {
          console.error("Error adding document: ", error);
        });
        console.log("User written with ID: ", docRef.id, "user", docRef); // referring to the user collection
        }).catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    studentCheckStatus: function(state,payload){
      let self = this;
      users.where("userId", "==", firebase.auth().currentUser.uid).limit(1).get().then(function(snapshot){
        if(snapshot.docs.length == 0){
          self.studentSignUp(state,payload);
        } else{
          self.studentLogin(state,payload)
        }
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
