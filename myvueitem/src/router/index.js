import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homepage/homePage'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
