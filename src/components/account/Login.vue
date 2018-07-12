<template>
  <div>
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <p>Please sign in to continue:</p>

      <div id="firebaseui-auth-container"></div>
    </div>
  </div>
</template>

<style scoped>
  .loginscreen {
    margin-top: 0;
    padding-top: 0;
  }
</style>

<script>
import { firebase } from '@firebase/app'
let firebaseui = require('firebaseui')
let ui

export default {
  mounted () {
    let auth = firebase.auth()
    if (!ui) ui = new firebaseui.auth.AuthUI(auth)
    this.setupLogin(ui)
    auth.onAuthStateChanged(user => {
      if (user) {
          console.log(user)
      }
    })
  },
  methods: {
    setupLogin (ui) {
      ui.start('#firebaseui-auth-container', {
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            return false
          }
        },
        signInFlow: 'popup',
        signInOptions: [{
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        }]
      })
    }
  }
}
</script>
