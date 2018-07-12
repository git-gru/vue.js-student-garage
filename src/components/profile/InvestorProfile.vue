<template>
  <div>
    <!-- Profile Image -->
    <div class="">
    <div class = "row align-items-center justify-content-center">
      <div class = "">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jKEk28vOKtlpxbrBNu6HyUxjD8-d50NUToMhJALNDnGx-J24" alt="..." class="rounded-circle img-restricted">
        </div>
      </div>

      <!-- Bio-->
      <div class= "left-margin">
        <div class= "">
          <h2>Gohan</h2>
        </div>

        <div class= "">
          <h5> Investing Somewhere </h5>
        </div>

        <div class= "">
          <span> <i class="fa fa-building"></i></span>
          <span> Venture Firm </span>

        </div>

        <div class="social negative-left-margin">
          <a class="social-facebook" href="https://www.facebook.com/thethemeio"><i class="fa fa-facebook"></i></a>
          <a class="social-twitter" href="https://twitter.com/thethemeio"><i class="fa fa-twitter"></i></a>
          <a class="social-linkedin" href="https://www.linkedin.com/thethemeio/"><i class="fa fa-linkedin"></i></a>
          <a class="social-dribbble" href="https://dribbble.com/thethemeio"><i class="fa fa-dribbble"></i></a>
        </div>

        <div class="" >
          <button type="button" class="btn btn-xl btn-primary">Message Gohan</button>
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
                    <a class="collapsed" data-toggle="collapse" href="#collapse-1-2">Investments</a>
                  </h5>

                  <div id="collapse-1-2" class="collapse" data-parent="#accordion-1">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 margin-bottom-small">
                          <div class="flex-content">
                            <div>
                              <h4> Example Company 1 </h4>
                              <div class="flex-content">
                                <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/a2/76/59/a27659df-a6fa-f018-fabb-3d1e175f117e/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" class="company-logo">
                            </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 margin-bottom-small">
                          <div class="flex-content">
                            <div>
                              <h4> Example Company 2 </h4>
                              <div class="flex-content">
                                <img src="https://r.hswstatic.com/w_907/gif/cryptokitty-twitch.jpg" class="company-logo">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 margin-bottom-small">
                          <div class="flex-content">
                            <div>
                              <h4> Example Company 3 </h4>
                              <div class="flex-content">
                                <img src="https://2xawx0gmudy471po527lbxcd-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/quora-604x400.png" class="company-logo">
                            </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 margin-bottom-small">
                          <div class="flex-content">
                            <div>
                              <h4> Example Company 4 </h4>
                              <div class="flex-content">
                                <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/43/2e/5a/432e5a97-5be3-6681-cafb-220ef1141a7b/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" class="company-logo">
                            </div>
                            </div>
                          </div>
                        </div>
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
  name: "InvestorProfile",
  data() {
    return {
      msg: "This is navbar",
      example: "Testing"
    };
  }
};
</script>

<style scoped>
.black-background {
  background-color: black;
  color: white;
}
.company-logo {
  width: 80px;
  height: 80px;
}
.flex-content {
  display: flex;
  justify-content: center;
}

.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.img-restricted {
  height: 200px;
  width: 200px;
}
.left-margin {
  margin-left: 5%;
}
.left-margin-small {
  margin-left: 2.5%;
}
.margin-bottom-small {
  margin-top: 2.5%;
}
.margin-top {
  margin-top: 5%;
}
.margin-top-small {
  margin-top: 2.5%;
}
.negative-left-margin {
  margin-left: -5%;
}
.no-left-margin {
  margin-left: 0 !important;
}

.no-left-padding {
  padding-left: 0 !important;
}
.no-right-margin {
  margin-right: 0 !important;
}

.no-right-padding {
  padding-right: 0 !important;
}

@media (max-width: 400px) {
  .center-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
