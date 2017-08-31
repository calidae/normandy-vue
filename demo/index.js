import Vue from 'vue'

import App from './App'
import router from './router'

import {
  Media,
  Grid,
  GridItem,
  Block
} from '../src/lib'

Vue.component('Media', Media)
Vue.component('Grid', Grid)
Vue.component('Grid-item', GridItem)
Vue.component('Block', Block)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  router,
  template: '<App/>'
})
