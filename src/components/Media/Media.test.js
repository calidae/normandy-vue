import Media from './Media'
import { mount } from 'avoriaz'
import Dummy from '@/Dummy'

const propsData = {
  src: 'http://example.com',
  alt: 'alt'
}

describe('Media.vue', () => {
  beforeAll(() => {
    console.error = jest.fn(error => { throw new Error(error) })
    console.warn = jest.fn(warn => { throw new Error(warn) })
  })

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Media, { propsData })
    expect(wrapper.hasClass('o-media')).toBe(true)
    expect(wrapper.find('.o-media__body')).toBeTruthy()
    expect(wrapper.find('.o-media__img')).toBeTruthy()
  })

  it('renders slot content when defined', () => {
    const wrapper = mount(Media, { propsData, slots: { default: Dummy } })
    expect(wrapper.first('.Dummy')).toBeTruthy()
  })

  it('src prop is required, is a String and validates correctly', () => {
    const wrapper = mount(Media, { propsData })
    const src = wrapper.vm.$options.props.src

    expect(src.required).toBeTruthy()
    expect(src.type).toBe(String)
  })

  it('alt prop is required, is a String and validates correctly', () => {
    const wrapper = mount(Media, { propsData })
    const alt = wrapper.vm.$options.props.alt

    expect(alt.required).toBeTruthy()
    expect(alt.type).toBe(String)
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Media, { propsData })
      wrapper.setProps({ size })
      expect(wrapper.hasClass(`o-media--${size}`)).toBe(true)
    })
  })

  it('adds valign class when valign prop is provided', () => {
    const values = ['center', 'bottom']

    values.forEach((valign) => {
      const wrapper = mount(Media, { propsData })
      wrapper.setProps({ valign })
      expect(wrapper.hasClass(`o-media--${valign}`)).toBe(true)
    })
  })

  it('adds reverse class when reverse prop is provided', () => {
    const wrapper = mount(Media, { propsData })
    wrapper.setProps({ reverse: true })
    expect(wrapper.hasClass('o-media--reverse')).toBe(true)
  })

  it('adds stretch class when stretch prop is provided', () => {
    const wrapper = mount(Media, { propsData })
    wrapper.setProps({ stretch: true })
    expect(wrapper.hasClass('o-media--stretch')).toBe(true)
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Media, { propsData })
    wrapper.setProps({
      size: 'small',
      valign: 'middle',
      reverse: true
    })
    expect(wrapper.hasClass('o-media--reverse')).toBe(true)
    expect(wrapper.hasClass('o-media--small')).toBe(true)
    expect(wrapper.hasClass('o-media--middle')).toBe(true)
  })

  it('changes size prop when its class', () => {
    const wrapper = mount(Media, { propsData })

    wrapper.setProps({ size: 'large' })
    expect(wrapper.hasClass('o-media--large')).toBe(true)
    expect(wrapper.hasClass('o-media--small')).toBe(false)

    wrapper.setProps({ size: 'small' })
    expect(wrapper.hasClass('o-media--small')).toBe(true)
    expect(wrapper.hasClass('o-media--large')).toBe(false)
  })

  it('breaks when required props are not provided', () => {
    expect(() => mount(Media)).toThrow()
  })

  it('breaks with invalid size prop value', () => {
    const valign = 'invalidProp'
    expect(() => {
      mount(Media, { propsData: { ...propsData, valign } })
    }).toThrow()
  })

  it('breaks with invalid reverse prop value', () => {
    const reverse = 'invalidProp'
    expect(() => {
      mount(Media, { propsData: { ...propsData, reverse } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Media, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
