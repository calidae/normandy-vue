import Cover from './Cover'
import { mount } from 'avoriaz'

describe('Cover.vue', () => {
  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Cover)
    expect(wrapper.hasClass('o-cover')).toBe(true)
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Cover)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
