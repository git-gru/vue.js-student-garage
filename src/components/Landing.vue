<template>
  <div class="entire-page">
    <!-- Header -->
    <header class="header text-white black-background entire-page" data-overlay="7">
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
.black-background{
  background-color: black;
}
.entire-page{
  height: 100vh;
}

</style>
