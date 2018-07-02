<template>
  <div class="entire-page">
    <!-- Header -->
    <div class="white-background">
      <div class="big-margin-below">
        <button @click="login()" class="btn btn-primary float-right right-margin"> Sign Up/Login </button>
      </div>
      <div class= "flex-content">
        <img src="../assets/img/logo/full-logo.png" class="mid-sized-img">
      </div>

      <div class="left-margin">
        <div class="row">
        <img src="https://s3.envato.com/files/138853034/_1/Rocket%20Launch%20in%20Desk%20590x590.jpg"
        class="small-img left-margin-small">
        <div class="left-margin-small">
          <h4> For Students </h4>
          <p> This is fake data that is simulating something real. Continue
            to work right now on this page until we have put real data in it
          </p>
        </div>

      </div>

      </div>

      <div class="left-margin">
        <div class="row">
        <div class="left-margin-small">
          <h4> For Investors </h4>
          <p> This is fake data that is simulating something real. Continue
            to work right now on this page until we have put real data in it
          </p>
        </div>
        <img src="https://s3.envato.com/files/138853034/_1/Rocket%20Launch%20in%20Desk%20590x590.jpg"
        class="small-img left-margin-small">
      </div>

      </div>

      <div>

      </div>

    </div>
  </div>


</template>



<script>
export default {
  name: 'Landing',
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$store.dispatch('testLogin');
      console.log('logged in');
    }
  }
}

</script>


<style scoped>
.big-margin-below{
  margin-bottom: 15%;
}
.entire-page{
  height: 100vh;
  position: initial;
  margin-top: 0px;
  left: 0;
}
.mid-sized-img{
  height: 25vh;
  width:75vw;
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
