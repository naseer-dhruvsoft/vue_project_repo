import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import dashboard from '@/components/dashboard'
import signup from '@/components/signup'
import forgot from '@/components/forgot'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
 mode: 'history',
 routes: 
 [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
 ]
})