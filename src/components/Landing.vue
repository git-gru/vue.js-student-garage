<template>
  <div>
    <!-- Header -->
    <header class="header text-white" style="background-image: url(../assets/img/bg/1.jpg)" data-overlay="7">
      <div class="container text-center">

        <div class="row">
          <div class="col-md-8 mx-auto">

            <h1>How it works</h1>
            <p class="lead-2 opacity-90 mt-6">Getting started and using our product is easy peasy!</p>
            <button @click="login"> Login </button>

          </div>
        </div>

      </div>
    </header><!-- /.header -->


    <!-- Main Content -->
    <main class="main-content">




      <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | How it work steps
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !-->
      <section class="section">
        <div class="container">

          <div class="row gap-y align-items-center py-7">
            <div class="col-md-6 text-center">
              <img src="../assets/img/vector/1.png" alt="...">
            </div>

            <div class="col-md-5 ml-auto text-center text-md-left">
              <p class="lead-9 fw-900 lh-1 opacity-10">01</p>
              <h3>Write your requirements</h3>
              <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.</p>
            </div>
          </div>


          <div class="row gap-y align-items-center py-7">
            <div class="col-md-5 mr-auto text-center text-md-left">
              <p class="lead-9 fw-900 lh-1 opacity-10">02</p>
              <h3>Sign the contract</h3>
              <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.</p>
            </div>

            <div class="col-md-6 text-center order-first order-md-last">
              <img src="../assets/img/vector/2.png" alt="...">
            </div>
          </div>


          <div class="row gap-y align-items-center py-7">
            <div class="col-md-6 text-center">
              <img src="../assets/img/vector/3.png" alt="...">
            </div>

            <div class="col-md-5 ml-auto text-center text-md-left">
              <p class="lead-9 fw-900 lh-1 opacity-10">03</p>
              <h3>We start developing</h3>
              <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.</p>
            </div>
          </div>


          <div class="row gap-y align-items-center py-7">
            <div class="col-md-5 text-center text-md-left">
              <p class="lead-9 fw-900 lh-1 opacity-10">04</p>
              <h3>Customer support begins</h3>
              <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself a the man.</p>
            </div>

            <div class="col-md-6 ml-auto text-center order-first order-md-last">
              <img src="../assets/img/vector/4.png" alt="...">
            </div>
          </div>


        </div>
      </section>


      <!--
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Signup
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      !-->
      <section class="section py-10 bg-img-bottom" style="background-image: url(../assets/img/bg/2.jpg)" data-overlay="5">
        <div class="container">

          <h3 class="text-center text-white">Start Using TheSaaS Now!</h3>
          <br><br>

          <form class="row gap-y input-glass">
            <div class="col-md-6 col-lg-3">
              <input type="text" class="form-control form-control-lg" placeholder="Name">
            </div>

            <div class="col-md-6 col-lg-3">
              <input type="text" class="form-control form-control-lg" placeholder="Email">
            </div>

            <div class="col-md-6 col-lg-3">
              <input type="password" class="form-control form-control-lg" placeholder="Password">
            </div>

            <div class="col-md-6 col-lg-3">
              <button class="btn btn-lg btn-block btn-success h-100">Get Started</button>
            </div>
          </form>

        </div>

      </section>


    </main><!-- /.main-content -->


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

</style>
