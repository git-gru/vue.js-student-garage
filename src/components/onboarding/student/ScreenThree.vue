<template>
  <div>
    <div class="margin-20">
      <form class="input-line">
      <div>
        <div>
        <h4 class="inline"> Education </h4>
      </div>
        <fieldset disabled>
          <div class="form-group ">
          <label for="disabledTextInput">Your School</label>
          <input id="disabledTextInput" class="form-control" type="text" v-model="stanfordEducation">
        </div>
    </fieldset>
        <div class="row">
          <div class="form-group col-md-6">
              <label>Major</label>
              <input  class="form-control" type="text" placeholder="Major" v-model="stanfordMajor">
          </div>
          <div class="form-group col-md-6">
              <label>Graduation Year (or expected)</label>
              <input  class="form-control" type="text" placeholder="Graduation Year" v-model="stanfordGraduation">
          </div>
        </div>
      </div>
      <div v-for="(education, key) in educationData">
        <hr>
        <div>
          <h5 class="inline"> Education  {{key + 2}} </h5>
          <span class="hand-hover" title="Delete This Education" @click="deleteEducation(key)"> <i class="fa fa-minus-circle fa-2x icon-minus-color"></i></span>
        </div>
        <fieldset>
          <div class="form-group ">
          <label>Your School</label>
          <input class="form-control" type="text" placeholder="School" v-model="educationData[key].school">
        </div>
    </fieldset>
        <div class="row">
          <div class="form-group col-md-6">
              <label>Major</label>
              <input  class="form-control" type="text" placeholder="Major" v-model="educationData[key].major">
          </div>
          <div class="form-group col-md-6">
              <label>Graduation Year (or expected)</label>
              <input  class="form-control" type="text" placeholder="Graduation Year" v-model="educationData[key].gradYear">
          </div>
        </div>
      </div>
      <div class="flex-content">
        <button class="btn btn-success" @click="addEducation()"> Add More Education </button>
      </div>
      <hr>
      <div>
        <div>
        <h4 class="inline"> Test Scores </h4>
      </div>

      <div v-for="(test, key) in testData">
        <hr v-if="testData.length >1">
        <div>
        <h5 class="inline"> Test  {{key + 1}} </h5>
        <span class="hand-hover" title="Delete This Test" @click="deleteTestData(key)"> <i class="fa fa-minus-circle fa-2x icon-minus-color"></i></span>
      </div>
        <div class="row">
          <div class="form-group col-md-6">
              <label>Test</label>
              <input  class="form-control" type="text" placeholder="Test" v-model="testData[key].test">
          </div>
          <div class="form-group col-md-6">
              <label>Score</label>
              <input  class="form-control" type="text" placeholder="Score" v-model="testData[key].score">
          </div>
        </div>
      </div>
      <div class="flex-content">
        <button v-if="educationData.length == 0" class="btn btn-success" @click="addTestData()"> Add A Test</button>
        <button v-if="educationData.length != 0" class="btn btn-success" @click="addTestData()"> Add More Scores </button>
      </div>


      </div>
      <div>
      <button type="submit" class="btn btn-primary float-l" @click="toSecondScreen()">Previous</button>
      <button type="submit" class="btn btn-primary float-r" @click="toFourthScreen()">Next</button>
    </div>
</form>


    </div>

  </div>


</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: 'StudentMainOnboarding',
  data () {
    return {
      userFirstName: '',
      userLastName: '',
      userHeadline: '',
      stanfordEducation: 'Stanford University',
      stanfordGraduation: '',
      stanfordMajor: '',
      userExperienceStart: '',
      userExperienceEnd: '',
      userExperienceDescription:'',
      educationData: [],
      testData: []
    }
  },
  computed:{
    ...mapGetters({
    onboardingSoFar: 'getOnboardingData'
      })
    },
  methods:{
    toSecondScreen(){
      this.$router.push('/student-onboarding/2')
    },
    toFourthScreen(){
      //this.$store.dispatch('onboarding',userData);
      this.$router.push('/student-onboarding/4')
    },
    addExperience(){
      console.log("Add Experience!");
    },
    addEducation(){
      this.educationData.push({school:'',major:'', gradYear:''})
    },
    addTestData(){
      this.testData.push({test:'',score:''})
    },
    deleteTestData(index){
      this.testData.splice(index,1);
    },
    deleteEducation(index){
      this.educationData.splice(index,1);
    },
    addSomethingCool(){
      console.log("Add Something Cool!");
    }
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
.float-l{
  float: left;
  margin-left: 0px;
}
.float-r{
  float: right;
  margin-right: 0px;
}
.float-right{
  float:right;
}
.hand-hover:hover{
  cursor: pointer;
}
hr{
height: 1px;
color: #123455;
background-color: #123455;
border: none;

}
.icon-minus-color{
  color: red;
}
.icon-plus-color{
  color: green;
}
.img-restricted{
  height: 200px;
  width: 200px;
}
.inline{
  display: inline;
}
.left-margin{
  margin-left: 5%;
}
.margin-top{
  margin-top: 5%;
}
.margin-top-small{
  margin-top: 2.5%;
}

.margin-20{
  margin-left:20%;
  margin-right: 20%;
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
