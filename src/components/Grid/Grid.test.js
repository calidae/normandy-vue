import Grid from './Grid'
import { mount } from 'avoriaz'
import Dummy from '@/Dummy'

describe('Grid.vue', () => {
  beforeAll(() => console.error = jest.fn(error => {
    throw new Error(error)
  }))

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Grid)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.hasClass('o-grid')).toBe(true)
  })

  it('renders slot content when defined', () => {
    const wrapper = mount(Grid, { slots: { default: Dummy } })
    expect(wrapper.first('.Dummy')).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Grid)
    expect(wrapper.html()).toMatchSnapshot('default')
  })

  it('adds align class when align prop is provided', () => {
    const values = ['bottom', 'middle']

    values.forEach((align) => {
      const wrapper = mount(Grid, { propsData: { align } })
      expect(wrapper.hasClass(`o-grid--${align}`)).toBe(true)
    })
  })

  it('adds size class when size prop is provided', () => {
    const values = ['flush', 'tiny', 'small', 'large', 'huge']

    values.forEach((size) => {
      const wrapper = mount(Grid, { propsData: { size } })
      expect(wrapper.hasClass(`o-grid--${size}`)).toBe(true)
    })
  })

  it('adds space class when space prop is provided', () => {
    const values = ['around', 'between', 'center', 'end']

    values.forEach((space) => {
      const wrapper = mount(Grid, { propsData: { space } })
      expect(wrapper.hasClass(`o-grid--${space}`)).toBe(true)
    })
  })

  it('adds reverse class when reverse prop is provided', () => {
    const wrapper = mount(Grid, { propsData: { reverse: true } })
    expect(wrapper.hasClass('o-grid--reverse')).toBe(true)
  })

  it('adds stretch class when stretch prop is provided', () => {
    const wrapper = mount(Grid, { propsData: { stretch: true } })
    expect(wrapper.hasClass('o-grid--stretch')).toBe(true)
  })

  it('adds wrapped class when wrapped prop is provided', () => {
    const wrapper = mount(Grid, { propsData: { wrapped: true } })
    expect(wrapper.hasClass('o-grid--wrapped')).toBe(true)
  })

  it('adds liquid class when liquid prop is provided', () => {
    const wrapper = mount(Grid, { propsData: { liquid: true } })
    expect(wrapper.hasClass('o-grid--liquid')).toBe(true)
  })

  it('adds liquid and auto class when auto prop is provided', () => {
    const wrapper = mount(Grid, { propsData: { auto: true } })
    expect(wrapper.hasClass('o-grid--auto')).toBe(true)
  })

  it('adds all optional classes when all props are provided', () => {
    const wrapper = mount(Grid, {
      propsData: {
        size: 'small',
        align: 'middle',
        space: 'end',
        reverse: true,
        stretch: true,
        liquid: true,
        auto: true,
        wrapped: true
      }
    })
    expect(wrapper.hasClass('o-grid--small')).toBe(true)
    expect(wrapper.hasClass('o-grid--middle')).toBe(true)
    expect(wrapper.hasClass('o-grid--end')).toBe(true)
    expect(wrapper.hasClass('o-grid--reverse')).toBe(true)
    expect(wrapper.hasClass('o-grid--stretch')).toBe(true)
    expect(wrapper.hasClass('o-grid--liquid')).toBe(true)
    expect(wrapper.hasClass('o-grid--auto')).toBe(true)
    expect(wrapper.hasClass('o-grid--wrapped')).toBe(true)
  })

  it('changes size prop when its class', () => {
    const wrapper = mount(Grid, { propsData: { size: 'large' } })
    expect(wrapper.hasClass('o-grid--large')).toBe(true)
    expect(wrapper.hasClass('o-grid--small')).toBe(false)

    wrapper.setProps({ size: 'small' })

    expect(wrapper.hasClass('o-grid--small')).toBe(true)
    expect(wrapper.hasClass('o-grid--large')).toBe(false)
  })

  it('changes align prop when its class', () => {
    const wrapper = mount(Grid, { propsData: { align: 'bottom' } })
    expect(wrapper.hasClass('o-grid--bottom')).toBe(true)
    expect(wrapper.hasClass('o-grid--middle')).toBe(false)

    wrapper.setProps({ align: 'middle' })

    expect(wrapper.hasClass('o-grid--middle')).toBe(true)
    expect(wrapper.hasClass('o-grid--bottom')).toBe(false)
  })

  it('changes space prop when its class', () => {
    const wrapper = mount(Grid, { propsData: { space: 'center' } })
    expect(wrapper.hasClass('o-grid--center')).toBe(true)
    expect(wrapper.hasClass('o-grid--around')).toBe(false)

    wrapper.setProps({ space: 'around' })

    expect(wrapper.hasClass('o-grid--around')).toBe(true)
    expect(wrapper.hasClass('o-grid--center')).toBe(false)
  })

  it('breaks with invalid size prop value', () => {
    expect(() => {
      mount(Grid, { propsData: { size: 'willfail' } })
    }).toThrow()
  })

  it('breaks with invalid align prop value', () => {
    expect(() => {
      mount(Grid, { propsData: { align: 'willfail' } })
    }).toThrow()
  })

  it('breaks with invalid space prop value', () => {
    expect(() => {
      mount(Grid, { propsData: { space: 'willfail' } })
    }).toThrow()
  })

  it('renders an snapshot with modifier class when size prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { size: 'large' }
    })
    expect(wrapper.html()).toMatchSnapshot('size')
  })

  it('renders an snapshot with modifier class when align prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { align: 'middle' }
    })
    expect(wrapper.html()).toMatchSnapshot('align')
  })

  it('renders an snapshot with modifier class when space prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { space: 'between' }
    })
    expect(wrapper.html()).toMatchSnapshot('space')
  })

  it('renders an snapshot with modifier class when stretch prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { stretch: true }
    })
    expect(wrapper.html()).toMatchSnapshot('stretch')
  })

  it('renders an snapshot with modifier class when wrapped prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { wrapped: true }
    })
    expect(wrapper.html()).toMatchSnapshot('wrapped')
  })

  it('renders an snapshot with modifier class when liquid prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { liquid: true }
    })
    expect(wrapper.html()).toMatchSnapshot('liquid')
  })

  it('renders an snapshot with modifier class when auto prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { auto: true }
    })
    expect(wrapper.html()).toMatchSnapshot('auto')
  })

  it('renders an snapshot with modifier class when reverse prop is provided', () => {
    const wrapper = mount(Grid, {
      slots: { default: Dummy },
      propsData: { reverse: true }
    })
    expect(wrapper.html()).toMatchSnapshot('reverse')
  })
})
