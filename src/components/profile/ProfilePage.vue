<template>
  <div>
    <!-- Profile Image -->
    <div class="">
    <div class = "row align-items-center justify-content-center student-profile">
      <div class = "">
        <div>
          <img :src="student.profile_img_add" alt="..." class="rounded-circle img-restricted">
        </div>
      </div>

      <!-- Bio-->
      <div class= "left-margin student-bio">
        <div class= "">
          <h2>{{student.first_name}} {{student.last_name}}</h2>
        </div>

        <div class= "">
          <h5> {{student.headline}} </h5>
        </div>

        <div class= "">
          <span> <i class="fa fa-map-pin"></i></span>
          <span> Somewhere </span>

        </div>

        <div class="social negative-left-margin">
          <a class="social-facebook" href="https://www.facebook.com/thethemeio"><i class="fa fa-facebook"></i></a>
          <a class="social-twitter" href="https://twitter.com/thethemeio"><i class="fa fa-twitter"></i></a>
          <a class="social-linkedin" href="https://www.linkedin.com/thethemeio/"><i class="fa fa-linkedin"></i></a>
          <a class="social-dribbble" href="https://dribbble.com/thethemeio"><i class="fa fa-dribbble"></i></a>
        </div>

        <div class="" >
          <button type="button" class="btn btn-xl btn-primary" @click="addStudent()">Message {{student.first_name}}</button>
        </div>
      </div>
    </div>
  </div>

      <div>
            <div class="col-md-12 mx-auto no-left-margin no-right-margin no-right-padding no-left-padding margin-top center-mobile">

              <div class="accordion w-100" id="accordion-1">
                <div class="card no-padding">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-1">Experiences</a>
                  </h5>

                  <div id="collapse-1-1" class="collapse" data-parent="#accordion-1">
                    <div class="card-body" v-for="(experience, key) in student.experiences">
                      <h4>{{experience.title}} </h4>
                      <h5>{{experience.company}} </h5>
                      <h6> <span> {{experience.start}} - </span>
                      <span> {{experience.end}} </span> </h6>
                      <p>{{experience.description}} </p>
                      <hr v-if="key < student.experiences.length -1">
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-2">Education</a>
                  </h5>

                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      <h4>{{student.stanford_education.school}} </h4>
                      <h5>{{student.stanford_education.description}} </h5>
                      <p> Graduation Year (or expected): {{student.stanford_education.gradYear}} </p>
                    </div>
                    <hr v-if="student.education.length > 0">
                    <div class="card-body" v-for="(education, key) in student.education">
                      <h4>{{education.school}} </h4>
                      <h5>{{education.description}} </h5>
                      <p> Graduation Year (or expected): {{education.gradYear}} </p>
                      <hr v-if="key < student.education.length -1">
                    </div>
                    <div class="card-body">
                      <h4 class="theme-bold"> GPA: {{student.gpa}} </h4>
                    </div>
                    <div class="card-body" v-if="student.tests.length > 0">
                      <h4 class="theme-bold"> Test Scores </h4>
                      <div class="" v-for="(test, key) in student.tests">
                        <h4>{{test.title}} </h4>
                        <h5>{{test.score}} </h5>
                        <hr v-if="key < student.tests.length -1">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-3">Interesting Tidbits</a>
                  </h5>

                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      <h4> How I Spend My Free Time </h4>
                      <p>{{student.free_time}} </p>
                      <h4> Other Cool Things About Me </h4>
                      <p>{{student.other_cool_things}} </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="margin-top-small">
            <h4> My Locker </h4>
            <p> Cool things I want you to see </p>
              <carousel-3d :controlsVisible = "true">
                <slide v-for="(item, key) in student.locker" class="black-background" v-bind:key="item.title" :index="key">
                  <a v-bind:href="item.link" target="_blank">
                  <h1 class="text-white">{{item.title}}</h1>
                  <p v-if="!emptyString(item.link)"> (Click Here to Learn More) </p>
                  </a>
                  <h6 class="text-white"> <span> {{item.start}} - </span>
                  <span> {{item.end}} </span> </h6>
                  <p> {{item.description}} </p>
                </slide>
              </carousel-3d>
          </div>
      </div>

  </div>

</template>

<script>
import StudentService from '../../services/studentService.js';
import UserService from '../../services/userService.js';
export default {
  name: 'StudentProfile',
  data () {
    return {
      student: {}
    }
  },
  mounted(){
    const curUserId = UserService.getCurrentUserId();
    let self = this;
    UserService.getUserIsStudent(curUserId).then(function(student){
      self.student = student;
      console.log("profile mounted",this.student);
    });
  },
  methods:{
    addStudent(){ // just wanted to test the firestore database
      //StudentService.addStudent();
      console.log("this was just testing");
    },
    emptyString(str){
      return str.replace(/^\s+|\s+$/g, '').length == 0;
    }
  }
}
</script>

<style scoped>
.black-background{
  background-color: black;
  color: white;
}
.date{
  display: inline;
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
hr{
height: 1px;
color: black;
background-color: black;
border: none;
}
.img-restricted{
  height: 200px;
  width: 200px;
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
.margin-top-small{
  margin-top: 2.5%;
}
.negative-left-margin{
  margin-left: -3%;
}
.no-left-margin{
  margin-left: 0 !important;
}
.no-left-padding{
  padding-left: 0 !important;
}
.no-right-margin{
  margin-right: 0 !important;
}
.no-right-padding{
  padding-right: 0 !important;
}
.theme-bold{
  font-weight: bold;
}
.theme-blue{
  color: #50a1ff !important;
}
@media (max-width:400px){
  .center-mobile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 575px) {
  .student-profile {
    flex-direction: column;
  }

  .student-bio {
    text-align: center;
    margin-left: 0;
    margin-top: 20px;
  }
}

</style>
