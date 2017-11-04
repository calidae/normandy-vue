import Wrapper from './Wrapper'
import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'

describe('Wrapper.vue', () => {
  beforeAll(() => {
    console.error = jest.fn(error => { throw new Error(error) })
    console.warn = jest.fn(warn => { throw new Error(warn) })
  })

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Wrapper)
    expect(wrapper.hasClass('o-wrapper')).toBe(true)
  })

  it('renders slot content when defined', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Wrapper, { slots: { default: compiled } })
    expect(wrapper.first('.dummy')).toBeTruthy()
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Wrapper)
      wrapper.setProps({ size })
      expect(wrapper.hasClass(`o-wrapper--${size}`)).toBe(true)
    })
  })

  it('changes size classes when prop changes', () => {
    const wrapper = mount(Wrapper)

    wrapper.setProps({ size: 'large' })
    expect(wrapper.hasClass('o-wrapper--large')).toBe(true)
    expect(wrapper.hasClass('o-wrapper--small')).toBe(false)

    wrapper.setProps({ size: 'small' })
    expect(wrapper.hasClass('o-wrapper--small')).toBe(true)
    expect(wrapper.hasClass('o-wrapper--large')).toBe(false)
  })

  it('breaks with invalid size prop value', () => {
    const size = 'invalidProp'
    expect(() => {
      mount(Wrapper, { propsData: { size } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Wrapper)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
