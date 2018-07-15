<template>
  <div id="app" class="spread">
      <Navbar v-if="loggedIn"/>
      <router-view class="margin-nav"> </router-view>
      <Foot/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'
import Foot from '@/components/Foot.vue'
import Landing from '@/components/Landing.vue'
import StudentSignUp from '@/components/login-register/students/SignUp.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Head,
    Main,
    Foot,
    Landing,
    StudentSignUp
  },
  data () {
    return {
    }
  },
  // ...
computed:{
  ...mapGetters({
    loggedIn: 'loggedIn'
    })
  },
  mounted () {
    window.landingComponent = this.$refs.landing
  }
}
</script>

<style scoped>

.margin-nav{
  margin-top: 75px;

  @media screen and (max-width: 768px) {
    body { padding-top: 0px; }
  }
}
.spread{
  height: 100%;
}
</style>
