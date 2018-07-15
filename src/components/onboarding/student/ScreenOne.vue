<template>
  <div>
    <div class="margin-20">
      <form class="input-line">
        <div class="flex-content">
          <h2>Before You Get Started </h2>
        </div>

        <div class = "flex-content">
          <div class= "">
            <img src="https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg" alt="..." class="rounded-circle img-restricted">
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

          <div class="flex-content">
          <button type="submit" class="btn btn-primary" @click="toSecondScreen()">Next</button>

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
    }
  },
  methods:{
      toSecondScreen(){
      let userData = {};
      userData.first_name = this.userFirstName;
      userData.last_name = this.userLastName;
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
