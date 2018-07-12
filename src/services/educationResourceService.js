//import firebase database here
import firebase from '../store/firebase.js'
const db = firebase.database;
const resources = db.collection('education-resources');
export default {
  getResources() {
    return resources.get();
  }
}
