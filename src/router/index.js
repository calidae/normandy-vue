import Vue from 'vue'
import Router from 'vue-router'
import Showcase from '@/showcase/Showcase'
import Template from '@/showcase/Template'
import components from '@/showcase/components'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'showcase',
  component: Showcase
}]

for (let component in components) {
  routes.push({
    path: '/' + component,
    name: component,
    component: Template
  })
}

export default new Router({
  routes
})
