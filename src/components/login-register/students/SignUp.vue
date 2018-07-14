<template>
  <div>
    <div class="flex-content">
      <h2>Sign Up</h2>
    </div>
    <div class="flex-content">
      <p> Already have an account? <a class=""> <router-link :to="{ name: 'StudentLogin' }">Login Here</router-link></a> </p>
    </div>
    <div class="margin-20 row bordered-div">
      <div class = "col-md-6 bordered-right">
      <form class="input-line">
          <div class="">
            <div class="form-group">
                <label>Email</label>
                <input  class="form-control" type="text" placeholder="Email" v-model="userEmail">
            </div>
            <div v-if="passwordIsIssue">
              <p class="text-danger"> Passwords Don't Match </p>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input  class="form-control" type="password" placeholder="Password" v-model="userPassword" v-on:focus="toggleMessageIfTrue()">
            </div>
            <div v-if="invalidPasswordTyping()">
              <p class="text-danger"> Password must be at least 8 characters long </p>
            </div>
            <div class="form-group">
                <label>Re-Type Password</label>
                <input  class="form-control" type="password" placeholder="Verify Password" v-model="verifyPassword">
            </div>
            <div v-if="passwordsDontMatchTyping()">
              <p class="text-danger"> Passwords Must Match </p>
            </div>
          </div>


          <div class="flex-content margin-bottom">
          <button type="submit" class="btn btn-primary" @click="toSecondScreen()">Sign Up</button>

        </div>

        </form>
      </div>

        <div class="col-md-6">
          <div> <img src="https://i.stack.imgur.com/xAiqi.png"> </div>
        </div>


    </div>

  </div>


</template>


<script>
import sha256 from 'sha256';
export default {
  name: 'StudentMainOnboarding',
  data () {
    return {
      userEmail:'',
      userPassword:'',
      verifyPassword: '',
      passwordIsIssue:false
    }
  },
  computed:{
  },
  methods:{
      toSecondScreen(){
        console.log(sha256(this.userPassword));
        console.log(this.firmName);
        console.log(this.firmIndex);
        this.passwordIssue();
        /*
      let userData = {};
      userData.firstName = this.userFirstName;
      userData.lastName = this.userLastName;
      userData.headline = this.userHeadline;
      this.$store.dispatch('onboarding',userData);
      this.$router.push('/investor-onboarding/2');*/
    },
    addExperience(){
      console.log("Add Experience!");
    },
    addEducation(){
      console.log("Add Education!");
    },
    addSomethingCool(){
      console.log("Add Something Cool!");
    },
    getFirmIndex(){
      this.firmIndex = this.firms.findIndex(firm => firm.name == this.firmName);
    },
    invalidPasswordTyping(){
      if(this.userPassword.length > 0 && (this.userPassword.length < 8 || this.userPassword.trim().length == 0 )) return true;
      return false;
    },
    passwordsDontMatchTyping(){
      if(this.verifyPassword.length > 0){
        return !(this.userPassword === this.verifyPassword);
      }
    },
    passwordIssue(){
      this.passwordIsIssue = (!(this.userPassword === this.verifyPassword));
    },
    toggleMessageIfTrue(){
      if(this.passwordIsIssue == true) this.passwordIsIssue = false;
    }
  }
}

</script>


<style scoped>
.ask-color{
  background-color: #FF420E;
  color: white;
}

.bordered-div{
  border-style: solid;
  border: 1px 1px 1px 1px;
  border-color: #C8C8C8;
}

.bordered-right{
  border-style:solid;
  border-left:0px;
  border-bottom:0px;
  border-top:0px;
  border-color: #C8C8C8;
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
.left-margin-shrunk{
  margin-left: 1%;
}
.margin-top{
  margin-top: 5%;
}
.margin-bottom{
  margin-bottom: 5%;
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
