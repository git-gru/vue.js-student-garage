<template>
  <div>
      <h2 class="text-center"> <span class ="bolded">{{question.title}}</span> </h2>
      <div class="flex-row">
        <h5 class="inline"> Asked by: {{questionAsker.first_name}} {{questionAsker.last_name}}</h5>
        <img class="avatar avatar-lg left-margin-small" :src="questionAsker.profile_img_add" alt="avatar">
    </div>
      <div class="side-margin-10">
        <h4 v-if="answers.length == 1" class ="bolded"> {{ answers.length }} Answer </h4>
        <h4 v-if="answers.length != 1" class ="bolded"> {{ answers.length }} Answers </h4>

        <ul class="list-group">
          <li v-for="answer in answers"
              class="list-group-item side-margin pseudo message">
            <div class="vertical-center">
              <img class="ms-avatar-hero" v-bind:src="answer.answered_by.profile_img_add" alt="">
              <div class="name-message-container vertical-center">
                <strong>{{ answer.answered_by.first_name}} {{ answer.answered_by.last_name}}</strong>
                <div>{{ answer.content }}</div>
              </div>
            </div>
            <div class='vote-panel'>
              <button class="bordered btn btn-sm" @click="upvote(answer)" v-bind:class="{'user-upvoted': userUpvoted(answer)}">
                <i class="fa fa-thumbs-up" v-bind:class="{'user-upvoted': userUpvoted(answer)}"></i>
                <p v-if="countUpvotes(answer) >= 0"class="inline" v-bind:class="{'user-upvoted': userUpvoted(answer)}">{{countUpvotes(answer)}}</p>
              </button>

              <button  class="btn btn-sm bordered-red" @click="downvote(answer)" v-bind:class="{'user-downvoted': userDownvoted(answer)}">
                <i class="fa fa-thumbs-down" v-bind:class="{'user-downvoted': userDownvoted(answer)}"></i>
              </button>
            </div>
          </li>
        </ul>

        <div class="form-group input-group w-80">
                  <input type="text" class="form-control" placeholder="Your Answer" v-model="userAnswer">
                  <div class="input-group-append ml-4">
                    <button class="btn btn-primary" type="button" @click ="answerQuestion()">Answer</button>
                  </div>
        </div>
      </div>
  </div>
</template>


<script>
import QuestionService from '../../services/questionService.js';
import UserService from '../../services/userService.js';
export default {
  name: 'IndividualQuestionView',
  data () {
    return {
      userAnswer:'',
      question: {},
      questionAsker: {},
      answers:[]
    }
  },
  mounted(){
    this.update()
  },
  computed: {

  },
  methods: {
    update() {
      let self = this;
      QuestionService.getQuestion(this.$route.params.id) // re-render the question so user sees their answer
        .then(function(snapshot){
          let question = snapshot.data();
          question.id = snapshot.id;
          self.question = {
            ...question,
            content: question.text,
            answers: question.answers.map(answer => ({ ...answer, content: answer.text }))
          };
          self.mapUsersToAnswers(question.answers);
          console.log("asked by",question.asked_by);
          UserService.getUserProfileStatus(question.asked_by).then(function(user){
            if(user.isStudent){
              UserService.getUserIsStudent(question.asked_by).then(function(student){
                self.questionAsker= student;
              });
            } else if(user.isInvestor){
              UserService.getUserIsStudent(question.asked_by).then(function(investor){
                self.questionAsker= investor;
                });
              }
          })
        })
    },
    downvote(answer) {
      let curUserId = UserService.getCurrentUserId();
      let self = this;
      let index = this.question.answers.findIndex(function(element){
        return element.createdDate == answer.createdDate && element.answererId == answer.answererId;
      });
      QuestionService.downvoteAnswer(index,this.question.id,curUserId).then(function(message){
        console.log(message)
        self.update();
      });
    },
    upvote(answer) {
      let curUserId = UserService.getCurrentUserId();
      let self = this;
      let index = this.question.answers.findIndex(function(element){
        return element.createdDate == answer.createdDate && element.answererId == answer.answererId;
      });
      QuestionService.upvoteAnswer(index,this.question.id,curUserId).then(function(message){
        console.log(message);
        self.update();
      });
    },
    getReaction(answer) {
      let curUserId = UserService.getCurrentUserId();
      let reaction = answer.reactions().get(curUserId);
      return reaction;
    },
    countUpvotes(answer) {
      let score = 0;
      for(let reaction in answer.upvotes){
        score += parseInt(answer.upvotes[reaction]);
      }
      return score;
    },
    mapUsersToAnswers(answers){
      this.answers = answers;
      this.answers.forEach(function(answer){
      UserService.getUserProfileStatus(answer.answererId).then(function(user){
        if(user.isStudent){
          console.log("user is student");
          UserService.getUserIsStudent(answer.answererId).then(function(student){
            answer.answered_by = student;
            console.log("answered by", answer.answered_by);
          });
        } else if(user.isInvestor){
          UserService.getUserIsStudent(answer.answererId).then(function(investor){
            answer.answered_by = investor;
          });
          }
        })
      });
      console.log("this.answers",this.answers)
    },
    sendSystemMessage: function(phoneNumber){
      TwilioService.questionAnswered(phoneNumber);
    },
    answerQuestion(){
      let curUserId = UserService.getCurrentUserId();
      let answer = {};
      answer.answererId = curUserId;
      answer.content = this.userAnswer;
      answer.createdDate = new Date().getTime();
      answer.upvotes = {};
      QuestionService.postAnswer(answer,this.question.id, this.update);
      this.userAnswer = "";
    },
    userUpvoted(answer){
      let curUserId = UserService.getCurrentUserId();
      let upvotes = answer.upvotes;
      if(upvotes.hasOwnProperty(curUserId)){
        if(upvotes[curUserId] == 1) return true
      }
      return false;
    },
    userDownvoted(answer){
      let curUserId = UserService.getCurrentUserId();
      let upvotes = answer.upvotes;
      if(upvotes.hasOwnProperty(curUserId)){
        if(upvotes[curUserId] == -1) return true
      }
      return false;
    }
  }
}
</script>

<style scoped>
.side-margin-10{
    margin-left: 10%;
    margin-right: 10%;
}
.answer{
  border-top-style: solid !important;
   border-right-style: solid !important;
   border-bottom-style: solid !important;
   border-left-style: solid !important;
   border-color: #25ddec;
}
.ms-avatar-hero {
  width: 50px;
  height: 50px;
}
.flex-content{
  display: flex;
  justify-content: center;
}

.flex-row{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.upper-margin {
  margin-top: 2.5%;
}
.bolded {
  font-weight: bold;
}
.name-message-container {
  display: inline-block;
}
.vertical-center {
  display: inline-block;
  vertical-align: middle;
}
.pseudo:before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
.left-margin-small{
  margin-left: .5%;
}
.light-blue {
  background-color: #25ddec;
  color: white;
}
.light-orange {
  background-color: #ff9190;
  color: white;
}
.message {
  width: 75%;
  margin-bottom: 1.5%;
}
.float-right {
  margin-left: auto;
  margin-right: 0;
}
.comment {
  width: 80%;
}
.send-button {
  margin: 0;
}
.centered{
  text-align: center;
}
.chat-title{
  margin:auto;
}
.lower-margin{
  margin-bottom: 2.5%;
}
@media screen and (max-width: 500px) {
  .ms-avatar-hero {
    width: 40px;
    height: 40px;
  }

}
@media screen and (max-width: 500px) {
  .comment {
    width: 70%;
  }
  .send-button {
    width: 25%;
  }
}
.date-user {
  float: left;
}
.date-user-match {
  float: right;
}
.inline{
  display: inline;
}
.is-typing-area {
  height: 2em;
}
.vote-panel {
  margin-top: 15px;
}
.btn-primary {
  font-weight: bold;
}
button.btn.bordered:not(.btn-raised) {
  border: 1px solid;
  color: #039be0;
}
button.bordered.btn-raised {
  border: 1px solid transparent;
}
button.btn {
  color: white;
}
button.bordered-red {
  border: 1px solid;
  color: red;
}
.user-upvoted{
  background-color: #50a1ff;
  color: white;
}

.user-downvoted{
  background-color: red;
  color:white;
}
</style>
