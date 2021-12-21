import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Introduction.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: (route) => ({ script: route.query.script })
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
