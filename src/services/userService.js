//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
const db = firebase.database;
const students = db.collection('students');
const users = db.collection('users');

export default {
  currentUser: store.state.curUser.currentUser
}
