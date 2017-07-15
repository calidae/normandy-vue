import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/showcase/Showcase'
import ComponentRoutes from './components'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'showcase',
    component: Showcase
  },
  ...ComponentRoutes
]

export default new Router({
  mode: 'history',
  routes
})
