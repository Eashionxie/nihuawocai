import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/game',
    children: [
      {
        path: 'game',
        name: 'game',
        component: () => import('@/views/game'),
        mate: { title: 'PLAY' }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/setting'),
        mate: { title: 'SETTING' }
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'link-active',
  mode: 'history',
  routes
})

export default router
