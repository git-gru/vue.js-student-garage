//import firebase database here
import firebase from '../store/firebase.js'
const db = firebase.database;
const questions = db.collection('questions');
export default {
  getCurrentUserQuestions(){
    return questions.where("asked_by.id", "==", currentUser.id).get(); // need to finish this
  },
  getQuestions(){
    return questions.get();
  },
  getQuestion(id){
    console.log("in question service", id);
    return questions.doc(id).get()
  },
  postAnswer(answer,id){
    let answers;
    this.getQuestion(id).then(function(querySnapshot){
      answers = querySnapshot.data().answers;
    });
    answers.push(answer); // add the answer to the answers
    questions.doc(id).update({answers:answers}) // update answrs
    .then(function() {
    console.log("Document successfully updated!");
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
  },
  postQuestion(question){
    questions.add(question)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  },
  queryQuestions(query){
    
  }
}
