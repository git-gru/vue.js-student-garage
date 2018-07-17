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
  getCurrentUserProfile(){
    if(currentUser.isStudent = true){
      return getCurrentUserIsStudent();
    } else if(currentUser.isInvestor = true){
      return getCurrentUserIsInvestor();
    }
  },
  getCurrentUserIsStudent(){
    return students.where("userId", "==", currentUser.userId).limit(1).get().then(function(snapshot){
      snapshot.docs.forEach(function(doc){ // should only be one user
        let user = doc.data(); // user doc
        return user;
      });
    });
  },
  getCurrentUserIsInvestor(){
    return investors.where("userId", "==", currentUser.userId).limit(1).get().then(function(snapshot){
      snapshot.docs.forEach(function(doc){ // should only be one user
        let user = doc.data(); // user doc
        return user;
      });
    });
  }
}
