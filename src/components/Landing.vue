<template>
  <div class="entire-page">
    <!-- Header -->
    <div class="white-background">
      <div class="first-screen">
        <div class="view">
          <div class="centered-block">
            <div class="big-margin-below login-wrapper clearfix">
              <button class="btn btn-primary" @click.prevent ="goToStudentLogin()">Student Login/SignUp</button>
            </div>
            <div class= "flex-content logo-wrapper">
              <img src="../assets/img/logo/full-logo.png" class="mid-sized-img">
            </div>
          </div>
        </div>
      </div>

      <div class="left-margin">
        <div class="row">
          <p class="col-5 col-sm-3">
            <img src="https://s3.envato.com/files/138853034/_1/Rocket%20Launch%20in%20Desk%20590x590.jpg" />
          </p>
          <div class="col-7 col-sm-9">
            <h4> For Students </h4>
            <p> This is fake data that is simulating something real. Continue
              to work right now on this page until we have put real data in it
            </p>
          </div>
        </div>
      </div>

      <div class="left-margin">
        <div class="row">
          <div class="col-7 col-sm-9">
            <h4> For Investors </h4>
            <p> This is fake data that is simulating something real. Continue
              to work right now on this page until we have put real data in it
            </p>
          </div>
          <p class="col-5 col-sm-3">
            <img src="https://s3.envato.com/files/138853034/_1/Rocket%20Launch%20in%20Desk%20590x590.jpg" />
          </p>
        </div>
      </div>

      <div>

      </div>

    </div>
  </div>


</template>


<script>
import exampleMixin from './../mixins/exampleMixin'
export default {
  name: 'Landing',
  mixins: [exampleMixin],
  data () {
    return {
    }
  },
  methods: {
    login () { // handled in the success callback of index.html
      this.$store.dispatch('testLogin');
      console.log('logged in');
    },
    goToStudentLogin(){
      this.$router.push('/sign-up/student');
    }
  }
}

</script>


<style scoped>
.first-screen {
  height: 80vh;
  overflow: hidden;
}

.first-screen .view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0 0 40px;
}

.first-screen .centered-block {
  position: absolute;
  display: table;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  min-height: 0;
  margin: auto;
}

.first-screen .login-wrapper {
  position: absolute;
  bottom: 100%;
  width: 100%;
  margin: 0 0 40px;
  display: flex;
  justify-content: flex-end;
}

.entire-page{
  position: initial;
  margin-top: 0px;
  left: 0;
}
.mid-sized-img{
  height: 100%;
  width: 75vw;
}
.white-background{
  background-color: white;
}
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
  margin-top: 0px;
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
.left-margin-small{
  margin-left: 2.5%;
}
.margin-top{
  margin-top: 5%;
}

.margin-top-15{
  margin-top: 15%;
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
.small-img{
  height: 40%;
  width:25%;
}
.top-margin{
  margin-top: 2.5%;
}
</style>
