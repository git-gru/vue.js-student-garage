<template>
  <div>
    <div class="margin-20">
      <form class="input-line">
        <div class="flex-content">
          <h2>Account Information </h2>
        </div>

        <div class = "flex-content">
          <div class= "">
            <img :src="userProfileImgSrc" alt="..." class="rounded-circle img-restricted">
          </div>
        </div>

          <div class="row">
            <div class="form-group col-md-6">
                <label>First Name</label>
                <input  class="form-control" type="text" placeholder="First Name" v-model="userFirstName">
            </div>
            <div class="form-group col-md-6">
                <label>Last Name</label>
                <input  class="form-control" type="text" placeholder="Last Name" v-model="userLastName">
            </div>
          </div>

          <div class="form-group ">
              <label>Headline</label>
              <input class="form-control" type="text" placeholder="Headline" v-model="userHeadline">
          </div>

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
              <label>Major/Program</label>
              <input  class="form-control" type="text" placeholder="Major" v-model="stanfordDescription">
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
              <label>Major/Program</label>
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

      <div>
        <div>
        <h4 class="inline"> Anything Cool? </h4>
      </div>

      <div v-for="(items, key) in lockerItems">
        <hr>
        <div>
          <h5 class="inline"> Item {{key + 1}} </h5>
          <span class="hand-hover" title="Delete This Item" @click="deleteItem(key)"> <i class="fa fa-minus-circle fa-2x icon-minus-color"></i></span>
        </div>
        <div class="form-group ">
            <label>Title</label>
            <input class="form-control" type="text" placeholder="Item Title" v-model="lockerItems[key].title">
        </div>
        <div class="form-group ">
            <label>Link</label>
            <div v-if="invalidLink(lockerItems[key].link)">
              <p class="text-danger"> Link must begin with http:// or https://</p>
            </div>
            <input class="form-control inline" type="text" placeholder="Item Link" v-model="lockerItems[key].link">
        </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="4" placeholder="Item Description" v-model="lockerItems[key].description"></textarea>
          </div>
        <div class="row">
          <div class="form-group col-md-6">
              <label>Year Start</label>
              <input  class="form-control" type="text" placeholder="Start" v-model="lockerItems[key].start">
            </div>
          <div class="form-group col-md-6">
            <label>Year End</label>
            <input  class="form-control" type="text" placeholder="End" v-model="lockerItems[key].end">
        </div>
      </div>
      </div>
      <div class="flex-content">
        <button v-if="lockerItems.length == 0" class="btn btn-success" @click="addItem()"> Add An Item </button>
        <button v-if="lockerItems.length != 0" class="btn btn-success" @click="addItem()"> Add Another Item </button>
      </div>
    </div>

    <hr>
    <div>
      <div class="form-group">
        <label>How Do You Spend Your Free Time?</label>
        <textarea class="form-control" rows="4" placeholder="Tell us more" v-model="userFreeTime"></textarea>
      </div>
    </div>

    <div class="form-group ">
        <label>Link To GitHub Repo</label>
        <input class="form-control" type="text" placeholder="Link" v-model="gitHubLink">
    </div>


      </div>

          <div class="flex-content">
          <button class="btn btn-primary" @click.prevent="updateAccount()">Update Profile</button>

        </div>

        </form>


    </div>


  </div>


</template>


<script>
import User from '../../../store/user.js';
export default {
  name: 'AccountSettingsMain',
  data () {
    return {
      curUser: {},
      userFirstName:'',
      userLastName: '',
      userProfileImgSrc:'',
      userHeadline:'',
      experiences:[],
      educationData:[],
      testData:[],
      lockerItems:[],
      userFreeTime:'',
      gitHubLink:'',
      stanfordEducation:'',
      stanfordDescription:'',
      stanfordGraduation:''
    }
  },
  methods:{
    updateAccount(){
      console.log(user);
    },
    addExperience(){
      this.experiences.push({title:'',company:'', description:'', start:'', end:''});
    },
    deleteExperience(index){
      this.experiences.splice(index,1);
    },
    deleteEducation(index){
      this.educationData.splice(index,1);
    },
    addEducation(){
      this.educationData.push({school:'',major:'', gradYear:''})
    },
    deleteTestData(index){
      this.testData.splice(index,1);
    },
    addTestData(){
      this.testData.push({test:'',score:''})
    },
    deleteItem(index){
      this.lockerItems.splice(index,1);
    },
    invalidLink(link){
      if(link == '') return false;
      let checkHttp = link.substring(0,7);
      console.log("http",link.substring(0,7));
      if(checkHttp == 'http://') return false;
      let checkHttps = link.substring(0,8);
      if(checkHttps == 'https://') return false;
      console.log("https",link.substring(0,8));
      return true;
    },
    addItem(){
      this.lockerItems.push({title:'',link:'',description:'',start:'', end:''});
    }
  },
  mounted(){
    this.curUser = User.currentUser;
    this.userFirstName = this.curUser.first_name;
    this.userLastName = this.curUser.last_name;
    this.userProfileImgSrc = this.curUser.profile_img_add;
    this.userHeadline = this.curUser.headline;
    this.experiences = this.curUser.experiences;
    this.educationData = this.curUser.education;
    this.testData = this.curUser.tests;
    this.lockerItems = this.curUser.locker;
    this.userFreeTime = this.curUser.free_time;
    this.gitHubLink = '';
    this.stanfordEducation = this.curUser.stanford_education.school;
    this.stanfordDescription = this.curUser.stanford_education.description;
    this.stanfordGraduation = this.curUser.stanford_education.gradYear;
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
.float-right{
  float:right;
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
