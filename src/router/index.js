import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Drag from '../components/drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Drag
    }
  ]
})
