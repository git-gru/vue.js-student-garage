//import firebase database here
import {store} from '../store/store.js'
import firebase from '../store/firebase.js'
const db = firebase.database;
const users = db.collection('users');
let currentUser = null;
export default {
  setCurrentUser(user){
    currentUser = user;
  }
  getCurrentUserId(){
    return currentUser.userId;
  }

}
