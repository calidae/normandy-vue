import Vue from 'vue'
import Media from './Media'
import { mount } from 'avoriaz'

// Mock console.error
global.console.error = jest.fn()

const propsData = {
  src: 'http://example.com',
  alt: 'alt'
}

describe('Media.vue', () => {
  it('renders correct nodes when required props are provided', () => {
    const vm = mount(Media, { propsData })
    expect(vm.hasClass('o-media')).toBe(true)
    expect(vm.find('.o-media__body')).toBeTruthy()
    expect(vm.find('.o-media__img')).toBeTruthy()
  })

  it('renders slot content when defined', () => {
    const Dummy = new Vue({
      template: '<div class="dummy-class">Lorem ipsum</div>'
    })

    const vm = mount(Media, { propsData, slots: { default: Dummy } })
    expect(vm.find('dummy-class')).toBeTruthy()
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const vm = mount(Media, { propsData: { ...propsData, size } })
      expect(vm.hasClass(`o-media--${size}`)).toBe(true)
    })
  })

  it('adds align class when align prop is provided', () => {
    const values = ['center', 'bottom', 'stretch']

    values.forEach((align) => {
      const vm = mount(Media, { propsData: { ...propsData, align } })
      expect(vm.hasClass(`o-media--${align}`)).toBe(true)
    })
  })

  it('adds reverse class when reverse prop is provided', () => {
    const vm = mount(Media, { propsData: { ...propsData, reverse: true } })
    expect(vm.hasClass('o-media--reverse')).toBe(true)
  })

  it('adds all optional classes when all props are provided', () => {
    const vm = mount(Media, {
      propsData: { ...propsData, size: 'small', align: 'stretch', reverse: true }
    })
    expect(vm.hasClass('o-media--reverse')).toBe(true)
    expect(vm.hasClass('o-media--small')).toBe(true)
    expect(vm.hasClass('o-media--stretch')).toBe(true)
  })

  it('checks that changing size prop changes its class', () => {
    const vm = mount(Media, { propsData: { ...propsData, size: 'large' } })
    expect(vm.hasClass('o-media--large')).toBe(true)
    expect(vm.hasClass('o-media--small')).toBe(false)

    vm.setProps({ size: 'small' })

    expect(vm.hasClass('o-media--small')).toBe(true)
    expect(vm.hasClass('o-media--large')).toBe(false)
  })

  it('breaks when required props are not provided', () => {
    mount(Media)
    expect(console.error).toBeCalled()
  })

  it('breaks with invalid size prop value', () => {
    mount(Media, { propsData: { ...propsData, size: 'willfail' } })
    expect(console.error).toBeCalled()
  })

  it('breaks with invalid size prop value', () => {
    mount(Media, { propsData: { ...propsData, align: 'willfail' } })
    expect(console.error).toBeCalled()
  })

  it('breaks with invalid reverse prop value', () => {
    mount(Media, { propsData: { ...propsData, reverse: 'willfail' } })
    expect(console.error).toBeCalled()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Media, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
