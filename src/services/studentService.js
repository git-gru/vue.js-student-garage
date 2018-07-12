//import firebase database here
import firebase from '../store/firebase.js'
const db = firebase.database;
const students = db.collection('students');
import Common from './common';

export default {

  addStudent() {
    students.add({ name: 'testStudent', school: 'testSchool' })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  },

  getStudents(cb) {
    students.get()
      .then((ref) => cb(Common.constants().SUCCESS, ref))
      .catch((err) => cb(Common.constants().ERROR, err));
  }
}
