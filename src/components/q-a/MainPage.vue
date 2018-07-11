<template>
  <div>
    <div class="left-margin">
      <h2>Ask Student Garage </h2>
    </div>

    <div class="left-margin">
      <h6>Ask our network of student entrepreneurs, investors, and advisors. </h6>
    </div>

    <div class="flex-row top-margin">
      <div class="center-mobile" >
        <button type="button" class="btn btn-lg btn-success" data-toggle="modal" data-target="#modal-default">Ask a Question</button>
      </div>
    </div>


   <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Have a Question?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

              <div v-if="!userHasQuestion">
                <div class="modal-body">
                  <form class="input-line">
                          <div class="form-group">
                          <label>Question</label>
                          <input class="form-control" type="text" placeholder="Ask Your Question" v-model='questionAsked'>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" @click = "ask()" class="btn btn-primary">Ask</button>
                </div>
            </div>

            <div v-if="userHasQuestion">
              <div class="modal-body">
                <p> Question Asked! </p>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
          </div>

              </div>
            </div>
          </div>


    <div class="flex-row top-margin">
      <div class="form-group input-group w-80">
                <input type="text" class="form-control" placeholder="Search for questions..." v-model="questionQuery">
                <div class="input-group-append ml-4">
                  <button class="btn btn-primary" type="button" @click ="queryQuestions()">Go!</button>
                </div>
      </div>
    </div>

    <div class = "row left-margin right-margin">
      <div v-for="question in questions"  class = "col-md-6 top-margin">
        <div class="card border">
            <div class="card-body">
              <h5 class="card-title">{{question.title}}</h5>
              <button type="button" class="btn btn-md btn-primary" @click="goToQuestion(question.id)">{{question.answers.length}} Answers </button>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import QuestionService from '../../services/questionService.js'
export default {
  name: 'QAMain',
  data () {
    return {
      questionAsked: '',
      userHasQuestion: false,
      questionQuery:'',
      questions: []
    }
  },
  methods:{
    ask(){
      let question = {};
      question.content = this.questionAsked;
      console.log(question);
      this.userHasQuestion = true;
    },
    queryQuestions(){
      console.log(this.questionQuery);
    },
    goToQuestion(id){
      console.log(id);
      this.$router.push({ name: 'IndividualQuestionView', params: { id }});
    }
  },
  mounted(){
    var self = this;
    QuestionService.getQuestions().then(function(querySnapshot){
      self.questions = querySnapshot.docs.map(doc => {
        let question = doc.data();
        question.id = doc.id;
        return question;
      })
    });
  }
}
</script>
<style scoped>

.ask-color{
  background-color: #FF420E;
  color: white;
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

.img-restricted{
  height: 200px;
  width: 200px;
}

.left-margin{
  margin-left: 5%;
}
.margin-top{
  margin-top: 5%;
}
.no-left-margin{
  margin-left: 0 !important;
}

.no-left-padding{
  padding-left: 0 !important;
}

@media (max-width:400px){
  .center-mobile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.right-margin{
  margin-right: 5%;
}
.top-margin{
  margin-top: 2.5%;
}

</style>
