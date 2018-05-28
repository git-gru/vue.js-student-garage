import Vue from 'vue'
import Router from 'vue-router'
import ProfilePage from '@/components/profile/ProfilePage.vue'
import QAMain from '@/components/q-a/MainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/questions',
      name: 'QAMain',
      component: QAMain
    }
  ]
})
