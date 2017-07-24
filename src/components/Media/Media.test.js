import Media from './Media'
import { mount } from 'avoriaz'
import Dummy from '@/Dummy'

const propsData = {
  src: 'http://example.com',
  alt: 'alt'
}

describe('Media.vue', () => {
  beforeAll(() => console.error = jest.fn(error => {
    throw new Error(error)
  }))

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

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Media, { propsData: { ...propsData, size } })
      expect(wrapper.hasClass(`o-media--${size}`)).toBe(true)
    })
  })

  it('adds align class when align prop is provided', () => {
    const values = ['center', 'bottom', 'stretch']

    values.forEach((align) => {
      const wrapper = mount(Media, { propsData: { ...propsData, align } })
      expect(wrapper.hasClass(`o-media--${align}`)).toBe(true)
    })
  })

  it('adds reverse class when reverse prop is provided', () => {
    const wrapper = mount(Media, { propsData: { ...propsData, reverse: true } })
    expect(wrapper.hasClass('o-media--reverse')).toBe(true)
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Media, {
      propsData: { ...propsData, size: 'small', align: 'stretch', reverse: true }
    })
    expect(wrapper.hasClass('o-media--reverse')).toBe(true)
    expect(wrapper.hasClass('o-media--small')).toBe(true)
    expect(wrapper.hasClass('o-media--stretch')).toBe(true)
  })

  it('changes size prop when its class', () => {
    const wrapper = mount(Media, { propsData: { ...propsData, size: 'large' } })
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
    expect(() => {
      mount(Media, { propsData: { ...propsData, size: 'willfail' } })
    }).toThrow()
  })

  it('breaks with invalid size prop value', () => {
    expect(() => {
      mount(Media, { propsData: { ...propsData, align: 'willfail' } })
    }).toThrow()
  })

  it('breaks with invalid reverse prop value', () => {
    expect(() => {
      mount(Media, { propsData: { ...propsData, reverse: 'willfail' } })
    }).toThrow()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Media, { propsData })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
