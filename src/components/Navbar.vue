<template>
<!-- Navbar -->
    <nav class="navbar navbar-expand-lg student-garage-nav">
      <div class="container">

        <div class="navbar-left">
          <button class="navbar-toggler" type="button">&#9776;</button>
          <a class="navbar-brand" href="index.html">
            <img class="logo-dark" src="/static/assets/img/logo-dark.png" alt="logo">
            <img class="logo-light" src="/static/assets/img/logo-light.png" alt="logo">
          </a>
        </div>
        <section class="navbar-mobile">
          <span class="navbar-divider d-mobile-none"></span>

          <ul class="nav nav-navbar">
            <li class="nav-item">
              <a class="nav-link" href="#">Profiles <span class="arrow"></span></a>
              <nav class="nav">
                <a class="nav-link" href="demo/bootstrap.html">Students</a>
                <a class="nav-link" href="demo/dropbox.html">Investors</a>
                <a class="nav-link"> <router-link :to="{ name: 'ProfilePage' }">Your Profile</router-link></a>
              </nav>
            </li>

            <li class="nav-item">
              <a class="nav-link" @click ="goToQA()">Q & A <span class="arrow"></span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Resources <span class="arrow"></span></a>
              <nav class="nav">
                <a class="nav-link"> <router-link :to="{ name: 'EventsMain' }">Events</router-link></a>
                <a class="nav-link"> <router-link :to="{ name: 'EducationMain' }">Education</router-link></a>
                <a class="nav-link"> <router-link :to="{ name: 'JobsMain' }">Jobs</router-link></a>
              </nav>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Demo Day <span class="arrow"></span></a>
              <nav class="nav">
                <a class="nav-link"> <router-link :to="{ name: 'DiscoverMain' }">Discover</router-link></a>
                  <a class="nav-link"> <router-link :to="{ name: 'PostProductMain' }">Post Product</router-link></a>
              </nav>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Your Account <span class="arrow"></span></a>
              <nav class="nav">
                <a class="nav-link"> <router-link :to="{ name: 'ProfilePage' }">Your Profile</router-link></a>
                <a class="nav-link"> <router-link :to="{ name: 'MessagesMain' }">Messages</router-link></a>
                <a class="nav-link"> <router-link :to="{ name: 'MyProducts' }">Your Products</router-link></a>
                <a class="nav-link"> <router-link :to="{ name: 'AccountSettingsMain' }">Settings</router-link></a>
                <a class="nav-link" href="blog/classic.html">Sign Out</a>
              </nav>
            </li>

          </ul>
        </section>

        <a class="btn btn-xs btn-round btn-success" href="https://themeforest.net/item/thesaas-responsive-bootstrap-saas-software-webapp-template/19778599?license=regular&open_purchase_for_item_id=19778599&purchasable=source&ref=thethemeio">Buy Now</a>

      </div>
    </nav><!-- /.navbar -->
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'This is navbar',
      example: 'Testing'
    }
  },
  methods: {
    goToQA () {
      // q-a-main
      this.$router.push({ path: `/questions` })
    }
  }
}
</script>
<style scoped>


</style>
