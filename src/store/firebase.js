import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
  let config = {
    apiKey: "AIzaSyCLK9emBDaQXX3TzTViZ-fIDNOs_orPw-k",
    authDomain: "student-garage.firebaseapp.com",
    databaseURL: "https://student-garage.firebaseio.com",
    projectId: "student-garage",
    storageBucket: "student-garage.appspot.com",
    messagingSenderId: "912596358742"
  };
firebase.initializeApp(config);

export default{
  database: firebase.firestore()
}
