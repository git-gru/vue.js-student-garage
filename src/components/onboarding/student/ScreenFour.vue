<template>
  <div>
    <div class="margin-20">
      <form class="input-line">
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
            <input class="form-control" type="text" placeholder="Item Link" v-model="lockerItems[key].link">
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
        <textarea class="form-control" rows="4" placeholder="Tell us more" v-model="userExperienceDescription"></textarea>
      </div>
    </div>

    <div class="form-group ">
        <label>Link To GitHub Repo</label>
        <input class="form-control" type="text" placeholder="Link" v-model="gitHubLink">
    </div>

    <div>
    <button type="submit" class="btn btn-primary" @click="onboardingFinished()">Finish</button>
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
      userSchool: 'Stanford University',
      userHeadline: '',
      userEducationalStudies: '',
      userEducationalGraduation: '',
      userExperienceTitle: '',
      userExperienceStart: '',
      userExperienceEnd: '',
      userExperienceDescription:'',
      lockerItems: [],
      gitHubLink:''
    }
  },
  computed:{
    ...mapGetters({
      onboardingSoFar: 'getOnboardingData'
      })
    },
  methods:{
    onboardingFinished(){
      let user = {};
      user.firstName = this.userFirstName;
      user.lastName = this.userLastName;
      user.school = this.userSchool;
      user.headline = this.userHeadline;
      console.log(user);
    },
    addExperience(){
      console.log("Add Experience!");
    },
    addEducation(){
      console.log("Add Education!");
    },
    addItem(){
      this.lockerItems.push({title:'',link:'',description:'',start:'', end:''});
    },
    deleteItem(index){
      this.lockerItems.splice(index,1);
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
