import Cover from './Cover'
import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'

const propsData = {
  src: 'http://example.com'
}

describe('Cover.vue', () => {
  beforeAll(() => {
    console.error = jest.fn(error => { throw new Error(error) })
    console.warn = jest.fn(warn => { throw new Error(warn) })
  })

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Cover, { propsData })
    expect(wrapper.hasClass('o-cover')).toBe(true)
    expect(wrapper.find('.o-cover__body')).toBeTruthy()
  })

  it('renders slot content when defined', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')

    const wrapper = mount(Cover, { propsData, slots: { default: compiled } })
    expect(wrapper.first('.dummy')).toBeTruthy()
  })

  it('src prop is required, is a String and validates correctly', () => {
    const wrapper = mount(Cover, { propsData })
    const src = wrapper.vm.$options.props.src

    expect(src.required).toBeTruthy()
    expect(src.type).toBe(String)
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Cover, { propsData })
      wrapper.setProps({ size })
      expect(wrapper.hasClass(`o-cover--${size}`)).toBe(true)
    })
  })

  it('adds valign class when valign prop is provided', () => {
    const values = ['middle', 'bottom']

    values.forEach((valign) => {
      const wrapper = mount(Cover, { propsData })
      wrapper.setProps({ valign })
      expect(wrapper.hasClass(`o-cover--${valign}`)).toBe(true)
    })
  })

  it('adds align class when valign prop is provided', () => {
    const values = ['left', 'right']

    values.forEach((align) => {
      const wrapper = mount(Cover, { propsData })
      wrapper.setProps({ align })
      expect(wrapper.hasClass(`o-cover--${align}`)).toBe(true)
    })
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Cover, { propsData })
    wrapper.setProps({
      size: 'small',
      valign: 'middle',
      align: 'left'
    })
    expect(wrapper.hasClass('o-cover--left')).toBe(true)
    expect(wrapper.hasClass('o-cover--small')).toBe(true)
    expect(wrapper.hasClass('o-cover--middle')).toBe(true)
  })

  it('changes size classes when prop changes', () => {
    const wrapper = mount(Cover, { propsData })

    wrapper.setProps({ size: 'large' })
    expect(wrapper.hasClass('o-cover--large')).toBe(true)
    expect(wrapper.hasClass('o-cover--small')).toBe(false)

    wrapper.setProps({ size: 'small' })
    expect(wrapper.hasClass('o-cover--small')).toBe(true)
    expect(wrapper.hasClass('o-cover--large')).toBe(false)
  })

  it('changes align classes when prop changes', () => {
    const wrapper = mount(Cover, { propsData })

    wrapper.setProps({ align: 'left' })
    expect(wrapper.hasClass('o-cover--left')).toBe(true)
    expect(wrapper.hasClass('o-cover--right')).toBe(false)

    wrapper.setProps({ align: 'right' })
    expect(wrapper.hasClass('o-cover--right')).toBe(true)
    expect(wrapper.hasClass('o-cover--left')).toBe(false)
  })

  it('changes valign classes when prop changes', () => {
    const wrapper = mount(Cover, { propsData })

    wrapper.setProps({ valign: 'middle' })
    expect(wrapper.hasClass('o-cover--middle')).toBe(true)
    expect(wrapper.hasClass('o-cover--bottom')).toBe(false)

    wrapper.setProps({ valign: 'bottom' })
    expect(wrapper.hasClass('o-cover--bottom')).toBe(true)
    expect(wrapper.hasClass('o-cover--middle')).toBe(false)
  })

  it('breaks when src prop is not provided', () => {
    expect(() => mount(Cover)).toThrow()
  })

  it('breaks with invalid size prop value', () => {
    const valign = 'invalidProp'
    expect(() => {
      mount(Cover, { propsData: { ...propsData, valign } })
    }).toThrow()
  })

  it('breaks with invalid align prop value', () => {
    const align = 'invalidProp'
    expect(() => {
      mount(Cover, { propsData: { ...propsData, align } })
    }).toThrow()
  })

  it('breaks with invalid valign prop value', () => {
    const valign = 'invalidProp'
    expect(() => {
      mount(Cover, { propsData: { ...propsData, valign } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Cover, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
