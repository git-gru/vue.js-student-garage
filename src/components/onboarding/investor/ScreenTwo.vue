<template>
  <div>
    <div class="margin-20">


      <form class="input-line">
        <div class="flex-content">
          <h2>Before You Get Started </h2>
        </div>

        <label> Link to AngelList Profile</label>
        <div class="flex-row">
          <div class="form-group input-group w-100">
                    <input type="text" class="form-control" placeholder="AngelList Link">
                    <div class="input-group-append ml-4">
                      <button class="btn btn-primary" type="button">Go!</button>
                    </div>
          </div>
        </div>

        <div>
          <div class="form-group">
                <label>How Do You Hope to Use Student Garage?</label>
                <select class="form-control" v-model="userReason">
                  <option v-for="(reason, key) in reasonsToUse">{{reason.title}}</option>
                </select>
              </div>
        </div>

          <div class="flex-content">
          <button type="submit" class="btn btn-primary" @click="toSecondScreen()">Finish</button>

        </div>

        </form>


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
      userHeadline: '',
      reasonsToUse: [{title:'Network With Students'},{title:'Find Talent for Existing Portfolio Companies'},
                      {title:'Improve Deal Flow'},{title: 'All of the Above'}]
    }
  },
  methods:{
      toSecondScreen(){
      let userData = {};
      userData.firstName = this.userFirstName;
      userData.lastName = this.userLastName;
      userData.headline = this.userHeadline;
      this.$store.dispatch('onboarding',userData);
      this.$router.push('/student-onboarding/2');
    },
    addExperience(){
      console.log("Add Experience!");
    },
    addEducation(){
      console.log("Add Education!");
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
