import Vue from 'vue'
import Router from 'vue-router'
import ProfilePage from '@/components/profile/ProfilePage.vue'
import QAMain from '@/components/q-a/MainPage.vue'
import EventsMain from '@/components/resources/events/MainPage.vue'
import EducationMain from '@/components/resources/education/MainPage.vue'
import JobsMain from '@/components/resources/jobs/MainPage.vue'
import DiscoverMain from '@/components/demo-day/discover/MainPage.vue'
import MessagesMain from '@/components/messages/MainPage.vue'
import PostProductMain from '@/components/demo-day/post/MainPage.vue'
import AccountSettingsMain from '@/components/account/settings/MainPage.vue'
import IndividualMessageView from '@/components/messages/IndividualView.vue'

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
    },
    {
      path: '/events',
      name: 'EventsMain',
      component: EventsMain
    },
    {
      path: '/education',
      name: 'EducationMain',
      component: EducationMain
    }
    ,
    {
      path: '/discover',
      name: 'DiscoverMain',
      component: DiscoverMain
    },
    {
      path: '/messages',
      name: 'MessagesMain',
      component: MessagesMain
    },
    {
      path: '/post-product',
      name: 'PostProductMain',
      component: PostProductMain
    },
    {
      path:'/settings',
      name:'AccountSettingsMain',
      component:AccountSettingsMain
    },
    {
      path:'/jobs',
      name:'JobsMain',
      component:JobsMain
    },
    {
      path:'/message',
      name:'IndividualMessageView',
      component:IndividualMessageView
    }
  ]
})
