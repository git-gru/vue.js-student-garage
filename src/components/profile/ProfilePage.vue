<template>
  <div>
    <!-- Profile Image -->
    <div class = "row">
      <div class = "col-md-4 flex-content">
        <div>
          <img src="https://symsys.stanford.edu/static/filedocument/2017/11/13/CurtisStaples-public.jpg" alt="..." class="rounded-circle img-restricted">
        </div>
      </div>

      <!-- Bio-->
      <div class= "col-md-6">
        <div class= "center-mobile">
          <h2>Curtis Staples</h2>
        </div>

        <div class= "center-mobile">
          <h5> Studying Human-Computer Interaction @ Stanford </h5>
        </div>

        <div class= "center-mobile">
          <span> <i class="fa fa-map-pin"></i></span>
          <span> Stanford University </span>

        </div>

        <div class="social center-mobile no-left-margin">
          <a class="social-facebook" href="https://www.facebook.com/thethemeio"><i class="fa fa-facebook"></i></a>
          <a class="social-twitter" href="https://twitter.com/thethemeio"><i class="fa fa-twitter"></i></a>
          <a class="social-linkedin" href="https://www.linkedin.com/thethemeio/"><i class="fa fa-linkedin"></i></a>
          <a class="social-dribbble" href="https://dribbble.com/thethemeio"><i class="fa fa-dribbble"></i></a>
        </div>

        <div class="center-mobile" >
          <button type="button" class="btn btn-xl btn-primary">Message Curtis</button>
        </div>
            <div class="col-md-8 mx-auto no-left-margin no-left-padding margin-top">

              <div class="accordion" id="accordion-1">
                <div class="card no-padding">
                  <h5 class="card-title">
                    <a data-toggle="collapse" href="#collapse-1-1">Is this a secure site for purchases?</a>
                  </h5>

                  <div id="collapse-1-1" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-2">How long are your contracts?</a>
                  </h5>

                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <h5 class="card-title">
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-3">Can I cancel my subscription?</a>
                  </h5>

                  <div id="collapse-1-3" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.
                    </div>
                  </div>
                </div>
              </div>

            </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing'
    }
  }
}
</script>

<style scoped>

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

.margin-top{
  margin-top: 5%;
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

</style>
