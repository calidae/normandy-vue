import GridItem from './GridItem'
import { mount } from 'avoriaz'
import Dummy from '@/Dummy'

describe('GridItem.vue', () => {
  beforeAll(() => console.error = jest.fn(error => {
    throw new Error(error)
  }))

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(GridItem)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.hasClass('o-grid__item')).toBe(true)
  })

  it('renders slot content when defined', () => {
    const wrapper = mount(GridItem, { slots: { default: Dummy } })
    expect(wrapper.first('.Dummy')).toBeTruthy()
  })

  it('adds style properties when width prop is provided', () => {
    const assertValue = '1/2'
    const expectValue = '50%'

    const wrapper = mount(GridItem, { propsData: { width: assertValue } })
    expect(wrapper.vm.computedStyle).toEqual({ width: expectValue })
    expect(wrapper.hasStyle('width', expectValue)).toBe(true)
  })

  it('adds style properties with 3 decimals when width prop is provided', () => {
    const assertValue = '1/3'
    const expectValue = '33.333%'
    const wrapper = mount(GridItem, { propsData: { width: assertValue } })

    expect(wrapper.vm.computedStyle).toEqual({ width: expectValue })
    expect(wrapper.hasStyle('width', expectValue)).toBe(true)
  })

  it('breaks with invalid size prop value', () => {
    const failValues = ['willfail', 20, '111/111', '6/5', '8/10', '0/0']

    failValues.forEach(value => {
      expect(() => {
        mount(GridItem, { propsData: { width: value } })
      }).toThrow()
    })
  })

  it('renders an snapshot', () => {
    const wrapper = mount(GridItem)
    expect(wrapper.html()).toMatchSnapshot('default')
  })

  it('renders an snapshot width style values when prop is provided', () => {
    const wrapper = mount(GridItem, { propsData: { width: '1/2' } })
    expect(wrapper.html()).toMatchSnapshot('style')
  })
})
