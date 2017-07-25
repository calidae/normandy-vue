import Block from './Block'
import { mount } from 'avoriaz'
import Dummy from '@/Dummy'

const propsData = {
  src: 'http://example.com',
  alt: 'alt'
}

describe('Block.vue', () => {
  beforeAll(() => console.error = jest.fn(error => {
    throw new Error(error)
  }))

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Block, { propsData })
    expect(wrapper.hasClass('o-block')).toBe(true)
    expect(wrapper.find('.o-block__body')).toBeTruthy()
    expect(wrapper.find('.o-block__img')).toBeTruthy()
  })

  it('renders slot content when defined', () => {
    const wrapper = mount(Block, { propsData, slots: { default: Dummy } })
    expect(wrapper.first('.Dummy')).toBeTruthy()
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Block, { propsData: { ...propsData, size } })
      expect(wrapper.hasClass(`o-block--${size}`)).toBe(true)
    })
  })

  it('adds align class when align prop is provided', () => {
    const values = ['left', 'right']

    values.forEach((align) => {
      const wrapper = mount(Block, { propsData: { ...propsData, align } })
      expect(wrapper.hasClass(`o-block--${align}`)).toBe(true)
    })
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Block, {
      propsData: { ...propsData, size: 'small', align: 'left' }
    })

    expect(wrapper.hasClass('o-block--small')).toBe(true)
    expect(wrapper.hasClass('o-block--left')).toBe(true)
  })

  it('changes size prop when its class', () => {
    const wrapper = mount(Block, { propsData: { ...propsData, size: 'large' } })
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
    expect(() => {
      mount(Block, { propsData: { ...propsData, size: 'willfail' } })
    }).toThrow()
  })

  it('breaks with invalid size prop value', () => {
    expect(() => {
      mount(Block, { propsData: { ...propsData, align: 'willfail' } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Block, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
