//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
const db = firebase.database;
const users = db.collection('users');
const students = db.collection('students');
const projects = db.collection('garage-projects');
const questions = db.collection('questions');
let currentUser = null;
export default {
  setCurrentUser(user){
    currentUser = user;
  },
  getCurrentUserId(){
    return currentUser.userId;
  },
  addGarageProjectToUser(projectId){
    let self = this;
    projects.doc(projectId).get().then(function(querySnapshot){
      let project = querySnapshot.data();
      students.where("userId", "==", currentUser.userId).limit(1).get().then(function(snapshot){
        snapshot.docs.forEach(function(doc){ // should only be one user
          let user = doc.data(); // user doc
          let garageProjects = user.garage_projects;
          garageProjects.push(project);
          users.doc(doc.id).update({garage_projects:garageProjects});
        });
      });
    });
  },
  getCurrentUserProjects(){
    return students.where("userId", "==", currentUser.userId).limit(1).get().then(function(snapshot){
      snapshot.docs.forEach(function(doc){ // should only be one user
        let user = doc.data(); // user doc
        let garageProjects = user.garage_projects;
        return garageProjects;
      });
    });
  },
  getCurrentUserQuestions(){
    return questions.where("asked_by.userId", "==", currentUser.userId).get().then(function(snapshot){
      return snapshot.docs;
    });
  },
  getUserProfileStatus(id){
    let self = this;
     return users.where("userId", "==", id).limit(1).get().then(function(snapshot){
      let user = snapshot.docs[0].data();
      return user;
    });
  },
  getCurrentCurrentUserProfile(){
    if(currentUser.isStudent = true){
      return this.getUserIsStudent(currentUser.userId);
    } else if(currentUser.isInvestor = true){
      return this.getUserIsInvestor(currentUser.userId);
    }
  },
  getUserIsStudent(userId){
      return students.where("userId", "==", userId).limit(1).get().then(function(snapshot){
      let user = snapshot.docs[0].data();
      console.log("user service", user);
        return user;
    });
  },
  getUserIsInvestor(userId){
    return investors.where("userId", "==", userId).limit(1).get().then(function(snapshot){
      snapshot.docs.forEach(function(doc){ // should only be one user
        let user = doc.data(); // user doc
        return user;
      });
    });
  }
}
