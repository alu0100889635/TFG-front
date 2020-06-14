import Vue from 'vue'
import VueRouter from 'vue-router'
import Logincontainer from '../views/Logincontainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Logincontainer',
    component: Logincontainer
  },
  {
    path: '/phonecall',
    name: 'Phonecall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Phonecall.vue')
  },
  {
    path: '/subject',
    name: 'Subject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Subject.vue')
  },
  {
    path: '/observations',
    name: 'Observations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Observations.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
