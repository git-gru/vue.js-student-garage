<template>
  <div>
      <div class= "margin-20">
        <div>
          <div class="">
            <h2>Your Settings </h2>
          </div>

          <form class="input-line">
            <div class="form-group ">
                  <label>Your Name</label>
                  <input  class="form-control" type="text" placeholder="Your Name" v-model="userName">
              </div>

              <fieldset disabled>
            <div class="form-group ">
                <label for="disabledTextInput">Your School</label>
                <input id="disabledTextInput" class="form-control" type="text" placeholder="Your Name" v-model="userSchool">
            </div>
          </fieldset>

            <div class="form-group ">
                <label>Current Title</label>
                <input class="form-control" type="text" placeholder="Your Name" v-model="userCurTitle">
            </div>

            <button type="submit" class="btn btn-primary" @click="updateAccount()">Update Account</button>
            </form>
          </div>
      </div>


  </div>


</template>


<script>
export default {
  name: 'AccountSettingsMain',
  data () {
    return {
      userName: 'Curtis Staples',
      userSchool: 'Stanford University',
      userCurTitle: 'Founder of Student Garage'
    }
  },
  methods:{
    updateAccount(){
      let user = {};
      user.name = this.userName;
      user.school = this.userSchool;
      user.curTitle = this.userCurTitle;
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
