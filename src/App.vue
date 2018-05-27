<template>
  <div id="app" class="spread">
    <Navbar/>
    <router-view class="margin-nav"> </router-view>
    <Foot/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Head from '@/components/Head.vue'
import Main from '@/components/Main.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Head,
    Main,
    Foot
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
