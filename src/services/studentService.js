//import firebase database here
import firebase from '../store/firebase.js'
const db = firebase.database;
const students = db.collection('students');

export default {
  addStudent() {
    students.add({ name: 'testStudent', school: 'testSchool' })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
}
