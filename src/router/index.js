import Vue from 'vue'
import Router from 'vue-router'
import ProfilePage from '@/components/profile/ProfilePage.vue'
import InvestorProfile from '@/components/profile/InvestorProfile.vue'
import QAMain from '@/components/q-a/MainPage.vue'
import IndividualQuestionView from '@/components/q-a/IndividualQuestion.vue'
import EventsMain from '@/components/resources/events/MainPage.vue'
import EducationMain from '@/components/resources/education/MainPage.vue'
import JobsMain from '@/components/resources/jobs/MainPage.vue'
import DiscoverMain from '@/components/demo-day/discover/MainPage.vue'
import MessagesMain from '@/components/messages/MainPage.vue'
import PostProductMain from '@/components/demo-day/post/MainPage.vue'
import AccountSettingsMain from '@/components/account/settings/MainPage.vue'
import IndividualMessageView from '@/components/messages/IndividualView.vue'
import IndividualProductView from '@/components/demo-day/discover/IndividualView.vue'
import MyProducts from '@/components/account/products/MyProducts.vue'
import CreateEvent from '@/components/resources/events/CreateEvent.vue'
import LandingPage from '@/components/general/Landing.vue'
import StudentOnboardOne from '@/components/onboarding/student/ScreenOne.vue'
import StudentOnboardTwo from '@/components/onboarding/student/ScreenTwo.vue'
import StudentOnboardThree from '@/components/onboarding/student/ScreenThree.vue'
import StudentOnboardFour from '@/components/onboarding/student/ScreenFour.vue'
import InvestorOnboardOne from '@/components/onboarding/investor/ScreenOne.vue'
import InvestorOnboardTwo from '@/components/onboarding/investor/ScreenTwo.vue'
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
    },
    {
      path:'/product',
      name:'IndividualProductView',
      component:IndividualProductView
    },
    {
      path:'/my-products',
      name:'MyProducts',
      component:MyProducts
    },
    {
      path:'/create-event',
      name:'CreateEvent',
      component:CreateEvent
    },
    {
      path:'/question',
      name:'IndividualQuestionView',
      component:IndividualQuestionView
    },
    {
      path:'/landing',
      name:'LandingPage',
      component:LandingPage
    },
    {
      path:'/student-onboarding/1',
      name:'StudentOnboardOne',
      component:StudentOnboardOne
    },
    {
      path:'/student-onboarding/2',
      name:'StudentOnboardTwo',
      component:StudentOnboardTwo,
      props: true
    },
    {
      path:'/student-onboarding/3',
      name:'StudentOnboardThree',
      component:StudentOnboardThree,
      props: true
    },
    {
      path:'/student-onboarding/4',
      name:'StudentOnboardFour',
      component:StudentOnboardFour,
      props: true
    },
    {
      path:'/investor-onboarding/1',
      name:'InvestorOnboardOne',
      component:InvestorOnboardOne
    },
    {
      path:'/investor-onboarding/2',
      name:'InvestorOnboardTwo',
      component:InvestorOnboardTwo
    },
    {
      path:'/investor',
      name:'InvestorProfile',
      component:InvestorProfile
    }
  ]
})
