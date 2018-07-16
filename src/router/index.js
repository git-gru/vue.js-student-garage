import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
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
import LandingPage from '@/components/Landing.vue'
import StudentOnboardIntro from '@/components/onboarding/student/IntroScreen.vue'
import StudentOnboardOne from '@/components/onboarding/student/ScreenOne.vue'
import StudentOnboardTwo from '@/components/onboarding/student/ScreenTwo.vue'
import StudentOnboardThree from '@/components/onboarding/student/ScreenThree.vue'
import StudentOnboardFour from '@/components/onboarding/student/ScreenFour.vue'
import InvestorOnboardOne from '@/components/onboarding/investor/ScreenOne.vue'
import InvestorOnboardTwo from '@/components/onboarding/investor/ScreenTwo.vue'
import StudentSignUp from '@/components/login-register/students/SignUp.vue'
import StudentLogin from '@/components/login-register/students/Login.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/questions',
      name: 'QAMain',
      component: QAMain,
      meta: { requiresAuth: true }
    },
    {
      path: '/events',
      name: 'EventsMain',
      component: EventsMain,
      meta: { requiresAuth: true }
    },
    {
      path: '/education',
      name: 'EducationMain',
      component: EducationMain,
      meta: { requiresAuth: true }
    }
    ,
    {
      path: '/discover',
      name: 'DiscoverMain',
      component: DiscoverMain,
      meta: { requiresAuth: true }
    },
    {
      path: '/messages',
      name: 'MessagesMain',
      component: MessagesMain,
      meta: { requiresAuth: true }
    },
    {
      path: '/post-product',
      name: 'PostProductMain',
      component: PostProductMain,
      meta: { requiresAuth: true }
    },
    {
      path:'/settings',
      name:'AccountSettingsMain',
      component:AccountSettingsMain,
      meta: { requiresAuth: true }
    },
    {
      path:'/jobs',
      name:'JobsMain',
      component:JobsMain,
      meta: { requiresAuth: true }
    },
    {
      path:'/message/:id',
      name:'IndividualMessageView',
      component:IndividualMessageView,
      props:true,
      meta: { requiresAuth: true }
    },
    {
      path:'/product',
      name:'IndividualProductView',
      component:IndividualProductView,
      meta: { requiresAuth: true }
    },
    {
      path:'/my-products',
      name:'MyProducts',
      component:MyProducts,
      meta: { requiresAuth: true }
    },
    {
      path:'/create-event',
      name:'CreateEvent',
      component:CreateEvent,
      meta: { requiresAuth: true }
    },
    {
      path:'/question/:id',
      name:'IndividualQuestionView',
      component:IndividualQuestionView,
      props:true,
      meta: { requiresAuth: true }
    },
    {
      path:'/student-onboarding',
      name:'StudentOnboardIntro',
      component:StudentOnboardIntro,
      meta: { requiresAuth: true }
    },
    {
      path:'/student-onboarding/1',
      name:'StudentOnboardOne',
      component:StudentOnboardOne,
      meta: { requiresAuth: true }
    },
    {
      path:'/student-onboarding/2',
      name:'StudentOnboardTwo',
      component:StudentOnboardTwo,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path:'/student-onboarding/3',
      name:'StudentOnboardThree',
      component:StudentOnboardThree,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path:'/student-onboarding/4',
      name:'StudentOnboardFour',
      component:StudentOnboardFour,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path:'/investor-onboarding/1',
      name:'InvestorOnboardOne',
      component:InvestorOnboardOne,
      meta: { requiresAuth: true }
    },
    {
      path:'/investor-onboarding/2',
      name:'InvestorOnboardTwo',
      component:InvestorOnboardTwo,
      meta: { requiresAuth: true }
    },
    {
      path:'/investor',
      name:'InvestorProfile',
      component:InvestorProfile,
      meta: { requiresAuth: true }
    },
    {
      path:'/sign-up/student',
      name:'StudentSignUp',
      component:StudentSignUp,
      meta: { requiresAuth: false }
    },
    {
      path:'/login/student',
      name:'StudentLogin',
      component:StudentLogin,
      meta: { requiresAuth: false }
    },
    {
      path:'/landing',
      name:'LandingPage',
      component:LandingPage,
      meta: { requiresAuth: false }
    }
  ]
});

// Secure routes
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (!currentUser && requiresAuth ) {
    next('landing')
  }
  else next();
})

export default router;
