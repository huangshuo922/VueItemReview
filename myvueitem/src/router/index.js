import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homepage/homePage'
import login from '@/components/login/login'
import userList from '@/components/userList/userList'
import axios from 'axios'
Vue.use(Router)
//在请求头中设置Authorization属性，将token赋值给该属性；（文档要求）
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config);
  config.headers.Authorization = localStorage.getItem('token');
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path: '/userList',
          name: 'userList',
          component: userList,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
