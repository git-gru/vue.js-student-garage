<template>
  <div>
    <div>
      Before We Get Started .... Need Some Information About You. Do you want us to fetch some ...
      from LinkedIn?
    </div>

    <div ref="Linkedin"/>
    <div>
      <button class="btn btn-primary" @click="clickScript()"> Fetch My LinkedIn Information </button>
    </div>
  </div>

</template>


<script>

export default {
  name: 'StudentIntroOnboarding',
  data () {
    return {
    }
  },
  mounted(){
    window.linkedInAuth = this;
    let linkedinScriptPartOne = document.createElement('script');
    linkedinScriptPartOne.setAttribute('src', '//platform.linkedin.com/in.js');
    let text = `api_key: 86wtjssgyprmd1
      onLoad:    onLinkedinLoad
      authorize: true
      lang: en_US`;
    let appInfo = document.createTextNode(text);
      linkedinScriptPartOne.appendChild(appInfo);
      this.$refs.Linkedin.insertAdjacentElement('afterend', linkedinScriptPartOne);
  },
  methods: {
    linkedinInfo(data) {
      console.log("user",data);
      this.$store.dispatch('linkedinInfo',data.values[0]); // the user
      this.$router.push('/student-onboarding/1');
    },
    clickScript(){
      IN.User.authorize(function(){
     });
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
span.IN-widget{
  height:200px !important;
  width: 50px !important;
}
.top-margin{
  margin-top: 2.5%;
}

#li_ui_li_gen_1531690151598_0-link{
  width: 200px !important;
  height: 50px !important;
}

</style>
