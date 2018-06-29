<template>
  <div>
    <div>
        <div class= "margin-20">
          <div>
            <div class="">
              <h2>Before You Get Started </h2>
            </div>

            <form class="input-line">
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
              <hr>

              <div>
                <div>
                <h4 class="inline"> Experiences </h4>
                <span class="hand-hover"> <i class="fa fa-plus-circle"></i></span>
              </div>
                <div class="form-group ">
                    <label>Title</label>
                    <input class="form-control" type="text" placeholder="Experience Title" v-model="userExperienceTitle">
                </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" rows="4" placeholder="Experience Description" v-model="userExperienceDescription"></textarea>
                  </div>
                <div class="row">
                  <div class="form-group col-md-6">
                      <label>Year Start</label>
                      <input  class="form-control" type="text" placeholder="Start" v-model="userExperienceStart">
                    </div>
                  <div class="form-group col-md-6">
                    <label>Year End</label>
                    <input  class="form-control" type="text" placeholder="End" v-model="userExperienceEnd">
                </div>
              </div>
            </div>
            <hr>

            <div>
              <h4> Education </h4>
              <fieldset disabled>
                <div class="form-group ">
                <label for="disabledTextInput">Your School</label>
                <input id="disabledTextInput" class="form-control" type="text" placeholder="Your Name" v-model="userSchool">
              </div>
          </fieldset>
              <div class="row">
                <div class="form-group col-md-6">
                    <label>Major</label>
                    <input  class="form-control" type="text" placeholder="Major" v-model="userEducationalStudies">
                </div>
                <div class="form-group col-md-6">
                    <label>Graduation Year</label>
                    <input  class="form-control" type="text" placeholder="Graduation Year" v-model="userEducationalGraudation">
                </div>
              </div>
            </div>
            <hr>

            <div>
              <h4> Anything Cool? </h4>
              <div class="form-group ">
                  <label>Title</label>
                  <input class="form-control" type="text" placeholder="Experience Title" v-model="userExperienceTitle">
              </div>
              <div class="form-group ">
                  <label>Link</label>
                  <input class="form-control" type="text" placeholder="Experience Title" v-model="userExperienceTitle">
              </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" rows="4" placeholder="Experience Description" v-model="userExperienceDescription"></textarea>
                </div>
              <div class="row">
                <div class="form-group col-md-6">
                    <label>Year Start</label>
                    <input  class="form-control" type="text" placeholder="Start" v-model="userExperienceStart">
                  </div>
                <div class="form-group col-md-6">
                  <label>Year End</label>
                  <input  class="form-control" type="text" placeholder="End" v-model="userExperienceEnd">
              </div>
            </div>
          </div>

          <hr>
          <div>
            <div class="form-group">
              <label>How Do You Spend Your Free Time?</label>
              <textarea class="form-control" rows="4" placeholder="Tell us more" v-model="userExperienceDescription"></textarea>
            </div>

          </div>



              <button type="submit" class="btn btn-primary" @click="onboardingFinished()">Get Started</button>
              </form>
            </div>
        </div>


    </div>

  </div>


</template>


<script>
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
      userExperienceDescription:''
    }
  },
  methods:{
    onboardingFinished(){
      let user = {};
      user.firstName = this.userFirstName;
      user.lastName = this.userLastName;
      user.school = this.userSchool;
      user.headline = this.userHeadline;
      console.log(user);
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
