import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/showcase/Showcase'
import GridShowcase from '@/showcase/components/GridShowcase'
import MediaShowcase from '@/showcase/components/MediaShowcase'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'showcase',
    component: Showcase
  },
  {
    path: '/media',
    name: 'media',
    component: MediaShowcase
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridShowcase
  }
]

export default new Router({
  routes
})
