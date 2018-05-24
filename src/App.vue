<template>
  <div id="app">
    <Navbar/>
    <Head/>
    <Main/>
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
<style>

</style>
