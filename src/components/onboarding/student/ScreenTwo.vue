<template>
  <div>
    <div class="margin-20">
      <form class="input-line">
        <div>
        <h4 class="inline"> Experiences </h4>
      </div>

      <div v-for="(experience, key) in experiences">
        <hr>
        <div>
          <h5 class="inline"> Experience  {{key + 1}} </h5>
          <span class="hand-hover" title="Delete This Experience" @click="deleteExperience(key)"> <i class="fa fa-minus-circle fa-2x icon-minus-color"></i></span>
        </div>
        <div class="form-group ">
            <label>Title</label>
            <input class="form-control" type="text" placeholder="Experience Title" v-model="experiences[key].title">
        </div>
        <div class="form-group ">
            <label>Company</label>
            <input class="form-control" type="text" placeholder="Company Name" v-model="experiences[key].company">
        </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="4" placeholder="Experience Description" v-model="experiences[key].description"></textarea>
          </div>
        <div class="row">
          <div class="form-group col-md-6">
              <label>Year Start</label>
              <input  class="form-control" type="text" placeholder="Start" v-model="experiences[key].start">
            </div>
          <div class="form-group col-md-6">
            <label>Year End</label>
            <input  class="form-control" type="text" placeholder="End" v-model="experiences[key].end">
        </div>
      </div>
    </div>
    <div class="flex-content">
      <button v-if="experiences.length == 0" class="btn btn-success" @click="addExperience()"> Add An Experience </button>
      <button v-if="experiences.length != 0" class="btn btn-success" @click="addExperience()"> Add Another Experience </button>
    </div>


      <div>
      <button  class="btn btn-primary float-l" @click.prevent="toFirstScreen()">Previous</button>
      <button  class="btn btn-primary float-r" @click.prevent="toThirdScreen()">Next</button>
    </div>
  </form>
    </div>

  </div>


</template>


<script>
import { mapGetters } from 'vuex'
import OnboardingService from '../../../services/onboardingService.js'
export default {
  name: 'StudentMainOnboarding',
  props: ['userData'],
  data () {
    return {
      experiences: [],
    }
  },
  computed:{
    ...mapGetters({
      onboardingSoFar: 'getOnboardingData'
      })
    },
    mounted(){
      let linkedinData = OnboardingService.getLinkedinOnboardingData();
      this.inputExperiences(linkedinData.positions.values);
    },
  methods:{
    toFirstScreen(){
      //this.$router.push('/student-onboarding/1')
      console.log(this.onboardingSoFar);
    },
    toThirdScreen(){
      let userData = {};
      userData.experiences = this.experiences;
      this.$store.dispatch('onboarding',userData);
      this.$router.push('/student-onboarding/3')
    },
    addExperience(){
      this.experiences.push({title:'',company:'', description:'', start:'', end:''});
    },
    deleteExperience(index){
        this.experiences.splice(index,1);
      },
    inputExperiences(experiences){
        for(let i = 0; i < experiences.length; i++){
          let experience = experiences[i];
          let obj = {};
          obj.title = this.checkForNull(experience.title);
          obj.company = this.checkForNull(experience.company.name);
          obj.start = this.checkForNull(experience.startDate.year);
          obj.end = 'Present';
          obj.description = this.checkForNull(experience.summary);
          this.experiences.push(obj);
        }
      },
      checkForNull(field){
        if(!field) return '';
        else return field;
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
