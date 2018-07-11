<template>
  <div>
      <h2 class="text-center"> <span class ="bolded">{{question.title}}</span> </h2>
      <div class="flex-row">
        <h5 class="inline"> Asked by: {{question.asked_by.first_name}} {{question.asked_by.last_name}}</h5>
        <img class="avatar avatar-lg left-margin-small" :src="question.asked_by.profile_img_add" alt="avatar">
    </div>
      <div class="side-margin-10">
        <h4 v-if="question.answers.length == 1" class ="bolded"> {{ question.answers.length }} Answer </h4>
        <h4 v-if="question.answers.length != 1" class ="bolded"> {{ question.answers.length }} Answers </h4>

        <ul class="list-group">
          <li v-for="answer in question.answers"
              class="list-group-item side-margin pseudo message">
            <div class="vertical-center">
              <img class="ms-avatar-hero" v-bind:src="answer.answered_by.profile_img_add" alt="">
              <div class="name-message-container vertical-center">
                <strong>{{ answer.answered_by.first_name}} {{ answer.answered_by.last_name}}</strong>
                <div>{{ answer.content }}</div>
              </div>
            </div>
            <div class='vote-panel'>
              <button class="bordered btn btn-sm">
                <i class="fa fa-thumbs-up"></i>
                <p v-if="countUpvotes(answer) >= 0"class="inline">{{countUpvotes(answer)}}</p>
              </button>

              <button  class="btn btn-sm bordered-red">
                <i class="fa fa-thumbs-down"></i>
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
export default {
  name: 'IndividualQuestionView',
  data () {
    return {
      userAnswer:'',
      question: {}
    }
  },
  mounted(){
    this.update()
  },
  computed: {
    answersTitle() {
      //return (this.question.answers.length === 1) ? 'Answer' : 'Answers'
    }
  },
  methods: {
    update() {
      let self = this;
      QuestionService.getQuestion(this.$route.params.id).then(function(querySnapshot){
        self.question = querySnapshot.data();
      });
    },
    downvote(answer) {
      const reaction = this.getReaction(answer)
      answerService.reactToAnswer(answer.id, reaction.value === -1 ? 'neutral' : 'downvote')
        .then(() => {
          this.update()
        })
    },
    upvote(answer) {
      const reaction = this.getReaction(answer)
      answerService.reactToAnswer(answer.id, reaction.value === 1 ? 'neutral' : 'upvote')
        .then(() => {
          this.update()
        })
    },
    getReaction(answer) {
      return answer.reactions.find(answer => answer.userId === userService.currentUser.id) || {}
    },
    countUpvotes(answer) {
      let score = 0;
      for(let reaction in answer.reactions){
        score += parseInt(answer.reactions[reaction]);
      }
      return score;
    },
    postComment(questionId) {
      questionService.answerQuestion(questionId, this.answer);
      if(this.question.user.phoneNum !== ""){
        this.sendSystemMessage(this.question.user.phoneNum);
      }
      this.answer = "";
      questionService.getQuestion(this.$route.params.id) // re-render the question so user sees their answer
        .then((question) => {
          this.question = {
            ...question,
            content: question.text,
            answers: question.answers.map(answer => ({ ...answer, content: answer.text }))
          }
        })
    },
    sendSystemMessage: function(phoneNumber){
      TwilioService.questionAnswered(phoneNumber);
    },
    answerQuestion(){
      console.log("Answer the Question");
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
</style>
