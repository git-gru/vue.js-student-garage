//import firebase database here
import firebase from '../store/firebase.js'
import UserService from './userService.js'
const db = firebase.database;
const questions = db.collection('questions');
export default {
  askQuestion(askerId,title){
    let question = this.createQuestion(askerId,title);
    questions.add(question).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
      console.error("Error adding document: ", error);
    });
  },
  createQuestion(askerId,title){
    return Object.assign({}, {
      asked_by: askerId,
      title: title,
      answers: [],
      createdDate: new Date().getTime(),
    });
  },
  getQuestions(){
    return questions.get();
  },
  getQuestion(id){
    console.log("in question service", id);
    return questions.doc(id).get();
  },
  postAnswer(answer,id,updateCallback){
    let answers;
    this.getQuestion(id).then(function(querySnapshot){
      console.log(querySnapshot);
      answers = querySnapshot.data().answers;
      answers.push(answer); // add the answer to the answers
      questions.doc(id).update({answers:answers}) // update answrs
      .then(function() {
        updateCallback();
      console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
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

  },
  upvoteAnswer(index,questionId,curUserId){
    return this.getQuestion(questionId).then(function(querySnapshot){
      let answers = querySnapshot.data().answers;
      let answer = answers[index];
      console.log(answer);
      answer.upvotes[curUserId] = 1;
      answers.splice(index,1,answer);
      questions.doc(questionId).update({answers:answers}) // update answrs
      .then(function() {
      console.log("Document successfully updated!");
      return 1;
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    });
  },
  downvoteAnswer(index,questionId,curUserId){
    return this.getQuestion(questionId).then(function(querySnapshot){
      let answers = querySnapshot.data().answers;
      let answer = answers[index];
      answer.upvotes[curUserId] = -1;
      answers.splice(index,1,answer);
      questions.doc(questionId).update({answers:answers}) // update answrs
      .then(function() {
      console.log("Document successfully updated!");
      return 1;
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    });
  }
}
