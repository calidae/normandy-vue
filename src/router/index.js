import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/showcase/Showcase'
import Media from '@/showcase/Media'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showcase',
      component: Showcase
    },
    {
      path: '/media',
      name: 'media',
      component: Media
    }
  ]
})
