<template>
  <div>
    <div class="margin-20">


      <form class="input-line">
        <div class="flex-content">
          <h2>Sign Up</h2>
        </div>

        <div>
          <div class="form-group">
                <label>Name of Firm</label>
                <select class="form-control" v-model="firmName" v-on:blur="getFirmIndex()">
                  <option v-for="(firm, key) in firms">{{firm.name}}</option>
                </select>
              </div>
        </div>

          <div class="">
            <div class="form-group">
                <label>Email</label>
                <input  class="form-control" type="text" placeholder="Email" v-model="userEmail" v-on:focus="toggleMessageIfTrue()">
            </div>
            <div v-if="emailIsIssue">
              <p class="text-danger"> Email Doesn't Match That Associated With {{firmName}} </p>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input  class="form-control" type="password" placeholder="Password" v-model="userPassword">
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


          <div class="flex-content">
          <button type="submit" class="btn btn-primary" @click="toSecondScreen()">Next</button>

        </div>

        </form>


    </div>

  </div>


</template>


<script>
import sha256 from 'sha256';
let systemFirms = [{name:'Founders Fund', emailSuffix:'@foundersfund.com'},{name:'A16Z', emailSuffix:'@a16z.com'},
{name:'Greylock', emailSuffix:'@greylock.com'},{name:'Lightspeed', emailSuffix:'@lsvp.com'}];
export default {
  name: 'StudentMainOnboarding',
  data () {
    return {
      userEmail:'',
      userPassword:'',
      verifyPassword: '',
      firms: systemFirms,
      firmName: systemFirms[0].name,
      firmIndex: 0,
      emailIsIssue:false
    }
  },
  computed:{
  },
  methods:{
      toSecondScreen(){
        console.log(sha256(this.userPassword));
        console.log(this.firmName);
        console.log(this.firmIndex);
        this.emailSuffixIssue();
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
    emailSuffixIssue(){
      let correctSuffix = this.firms[this.firmIndex].emailSuffix;
      let userSuffix = this.userEmail.substring((this.userEmail.length - correctSuffix.length),this.userEmail.length);
      if(!(correctSuffix == userSuffix)) this.emailIsIssue = true;
    },
    toggleMessageIfTrue(){
      if(this.emailIsIssue == true) this.emailIsIssue = false;
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
