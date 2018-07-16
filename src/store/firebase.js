import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
// Initialize Firebase
let config = {
  apiKey: 'AIzaSyCLK9emBDaQXX3TzTViZ-fIDNOs_orPw-k',
  authDomain: 'student-garage.firebaseapp.com',
  databaseURL: 'https://student-garage.firebaseio.com',
  projectId: 'student-garage',
  storageBucket: 'student-garage.appspot.com',
  messagingSenderId: '912596358742'
}
firebase.initializeApp(config)
// Use this line if all of your Date types are in timestamps formats
// firebase.firestore().settings({timestampsInSnapshots: true})

export default {
  database: firebase.firestore(),
  storage: firebase.storage(),
  auth: firebase.auth()
}
