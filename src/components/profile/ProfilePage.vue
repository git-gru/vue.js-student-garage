<template>
  <div>
    <!-- Profile Image -->
    <div class="">
    <div class = "row align-items-center justify-content-center">
      <div class = "">
        <div>
          <img src="https://pbs.twimg.com/profile_images/833767319973212161/Ft904pMk_400x400.jpg" alt="..." class="rounded-circle img-restricted">
        </div>
      </div>

      <!-- Bio-->
      <div class= "left-margin">
        <div class= "">
          <h2>Goku</h2>
        </div>

        <div class= "">
          <h5> Studying Human-Computer Interaction </h5>
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
          <button type="button" class="btn btn-xl btn-primary" @click="addStudent()">Message Goku</button>
        </div>
      </div>
    </div>
  </div>

      <div>
            <div class="col-md-12 mx-auto no-left-margin no-right-margin no-right-padding no-left-padding margin-top center-mobile">

              <div class="accordion" id="accordion-1">
                <div class="card no-padding">
                  <h5 class="card-title">
                    <a data-toggle="collapse" href="#collapse-1-1">Experiences</a>
                  </h5>

                  <div id="collapse-1-1" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-2">Education</a>
                  </h5>

                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-3">Interesting Tidbits</a>
                  </h5>

                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="margin-top-small">
            <h4> My Locker </h4>
            <p> Cool things I want you to see </p>
            <carousel-3d :controlsVisible = "true">
              <slide class="black-background" :index="0">
                Slide 1 Content
              </slide>
              <slide class="black-background" :index="1">
                Slide 2 Content
              </slide>
              <slide class="black-background" :index="2">
                <h1>Slide 3 Content</h1>
                  <p> This is something cool I built </p>
              </slide>
              <slide class="black-background" :index="3">
                Slide 4 Content
              </slide>
            </carousel-3d>
          </div>
      </div>

  </div>

</template>

<script>
import StudentService from '../../services/studentService.js';
export default {
  name: 'StudentProfile',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing'
    }
  },
  methods:{
    addStudent(){ // just wanted to test the firestore database
      StudentService.addStudent();
    }
  }
}
</script>

<style scoped>
.black-background{
  background-color: black;
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

@media (max-width:400px){
  .center-mobile{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
