import Vue from 'vue'
import Media from './Media'

const Constructor = Vue.extend(Media)
const vm = new Constructor({
  propsData: {
    src: 'http://example.com',
    alt: 'alt'
  }
})

describe('Media.vue', () => {
  it('should be able to mount itself', () => vm.$mount())
  it('should match the snapshot', () => expect(vm.$mount().$el).toMatchSnapshot())
})
