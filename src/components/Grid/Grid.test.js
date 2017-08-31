import Grid from './Grid'
import { mount } from 'avoriaz'
import { compileToFunctions } from 'vue-template-compiler'

describe('Grid.vue', () => {
  beforeAll(() => {
    console.error = jest.fn(error => { throw new Error(error) })
    console.warn = jest.fn(warn => { throw new Error(warn) })
  })

  it('renders correct nodes when required props are provided', () => {
    const wrapper = mount(Grid)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.hasClass('o-grid')).toBe(true)
  })

  it('renders slot content when defined', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, { slots: { default: compiled } })

    expect(wrapper.first('.dummy')).toBeTruthy()
  })

  it('renders an snapshot', () => {
    const wrapper = mount(Grid)
    expect(wrapper.html()).toMatchSnapshot('default')
  })

  it('adds valign class when valign prop is provided', () => {
    const values = ['bottom', 'middle']

    values.forEach((valign) => {
      const wrapper = mount(Grid, { propsData: { valign } })
      expect(wrapper.hasClass(`o-grid--${valign}`)).toBe(true)
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
        valign: 'middle',
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
    const wrapper = mount(Grid)

    wrapper.setProps({ size: 'large' })
    expect(wrapper.hasClass('o-grid--large')).toBe(true)
    expect(wrapper.hasClass('o-grid--small')).toBe(false)

    wrapper.setProps({ size: 'small' })
    expect(wrapper.hasClass('o-grid--small')).toBe(true)
    expect(wrapper.hasClass('o-grid--large')).toBe(false)
  })

  it('changes valign prop when its class', () => {
    const wrapper = mount(Grid)

    wrapper.setProps({ valign: 'bottom' })
    expect(wrapper.hasClass('o-grid--bottom')).toBe(true)
    expect(wrapper.hasClass('o-grid--middle')).toBe(false)

    wrapper.setProps({ valign: 'middle' })
    expect(wrapper.hasClass('o-grid--middle')).toBe(true)
    expect(wrapper.hasClass('o-grid--bottom')).toBe(false)
  })

  it('changes space prop when its class', () => {
    const wrapper = mount(Grid)

    wrapper.setProps({ space: 'center' })
    expect(wrapper.hasClass('o-grid--center')).toBe(true)
    expect(wrapper.hasClass('o-grid--around')).toBe(false)

    wrapper.setProps({ space: 'around' })
    expect(wrapper.hasClass('o-grid--around')).toBe(true)
    expect(wrapper.hasClass('o-grid--center')).toBe(false)
  })

  it('breaks with invalid size prop value', () => {
    const size = 'invalidProp'
    expect(() => {
      mount(Grid, { propsData: { size } })
    }).toThrow()
  })

  it('breaks with invalid valign prop value', () => {
    const valign = 'invalidProp'
    expect(() => {
      mount(Grid, { propsData: { valign } })
    }).toThrow()
  })

  it('breaks with invalid space prop value', () => {
    const space = 'invalidProp'
    expect(() => {
      mount(Grid, { propsData: { space } })
    }).toThrow()
  })

  it('renders an snapshot with modifier class when size prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { size: 'large' }
    })
    expect(wrapper.html()).toMatchSnapshot('size')
  })

  it('renders an snapshot with modifier class when valign prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { valign: 'middle' }
    })
    expect(wrapper.html()).toMatchSnapshot('valign')
  })

  it('renders an snapshot with modifier class when space prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { space: 'between' }
    })
    expect(wrapper.html()).toMatchSnapshot('space')
  })

  it('renders an snapshot with modifier class when stretch prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { stretch: true }
    })
    expect(wrapper.html()).toMatchSnapshot('stretch')
  })

  it('renders an snapshot with modifier class when wrapped prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { wrapped: true }
    })
    expect(wrapper.html()).toMatchSnapshot('wrapped')
  })

  it('renders an snapshot with modifier class when liquid prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { liquid: true }
    })
    expect(wrapper.html()).toMatchSnapshot('liquid')
  })

  it('renders an snapshot with modifier class when auto prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { auto: true }
    })
    expect(wrapper.html()).toMatchSnapshot('auto')
  })

  it('renders an snapshot with modifier class when reverse prop is provided', () => {
    const compiled = compileToFunctions('<div class="dummy"></div>')
    const wrapper = mount(Grid, {
      slots: { default: compiled },
      propsData: { reverse: true }
    })
    expect(wrapper.html()).toMatchSnapshot('reverse')
  })
})
