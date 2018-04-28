import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login.vue'
import main from '../pages/Main.vue'
import home from '../pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/management',
      component: main,
      redirect: {name: 'home'},
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})
