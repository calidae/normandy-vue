import Block from './Block'
import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'

const propsData = {
  src: 'http://example.com',
  alt: 'alt'
}

describe('Block.vue', () => {
  beforeAll(() => {
    console.error = jest.fn(error => { throw new Error(error) })
    console.warn = jest.fn(warn => { throw new Error(warn) })
  })

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Block, { propsData })
    expect(wrapper.hasClass('o-block')).toBe(true)
    expect(wrapper.find('.o-block__body')).toBeTruthy()
    expect(wrapper.find('.o-block__img')).toBeTruthy()
  })

  it('renders slot content when defined', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Block, { propsData, slots: { default: compiled } })

    expect(wrapper.first('.dummy')).toBeTruthy()
  })

  it('src prop is required, is a String and validates correctly', () => {
    const wrapper = mount(Block, { propsData })
    const src = wrapper.vm.$options.props.src

    expect(src.required).toBeTruthy()
    expect(src.type).toBe(String)
  })

  it('alt prop is required, is a String and validates correctly', () => {
    const wrapper = mount(Block, { propsData })
    const alt = wrapper.vm.$options.props.alt

    expect(alt.required).toBeTruthy()
    expect(alt.type).toBe(String)
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Block, { propsData })
      wrapper.setProps({ size })
      expect(wrapper.hasClass(`o-block--${size}`)).toBe(true)
    })
  })

  it('adds align class when align prop is provided', () => {
    const values = ['left', 'right']

    values.forEach((align) => {
      const wrapper = mount(Block, { propsData })
      wrapper.setProps({ align })
      expect(wrapper.hasClass(`o-block--${align}`)).toBe(true)
    })
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Block, { propsData })
    wrapper.setProps({
      size: 'small',
      align: 'left'
    })

    expect(wrapper.hasClass('o-block--small')).toBe(true)
    expect(wrapper.hasClass('o-block--left')).toBe(true)
  })

  it('changes size prop when its class', () => {
    const wrapper = mount(Block, { propsData })

    wrapper.setProps({ size: 'large' })
    expect(wrapper.hasClass('o-block--large')).toBe(true)
    expect(wrapper.hasClass('o-block--small')).toBe(false)

    wrapper.setProps({ size: 'small' })
    expect(wrapper.hasClass('o-block--small')).toBe(true)
    expect(wrapper.hasClass('o-block--large')).toBe(false)
  })

  it('breaks when required props are not provided', () => {
    expect(() => mount(Block)).toThrow()
  })

  it('breaks with invalid size prop value', () => {
    const size = 'invalidProp'
    expect(() => {
      mount(Block, { propsData: { ...propsData, size } })
    }).toThrow()
  })

  it('breaks with invalid align prop value', () => {
    const align = 'invalidProp'
    expect(() => {
      mount(Block, { propsData: { ...propsData, align } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Block, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
