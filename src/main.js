// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store.js'
import firebase from './store/firebase.js'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  firebase,
  components: { App },
  template: '<App/>',
  created () {
    // This method is triggered automatically after the initial boot or manual entry/exit to the system
    firebase.auth.onAuthStateChanged(user => {
      console.log(user)
      // Do anything what You want with this user.
      // You can fetch user additional data from firestore, setup user data with vuex
      // and push any route state
      // These actions will mean automatic signin  after a refresh or a new visit
      //
      // this.$router.push('/anyRoute')
      // this.$store.commit('setUser', user)
      // ...
      // console.log('User is loged in')
    })
  }
})
