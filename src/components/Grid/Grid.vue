<template>
  <div class="o-grid"
    :class="[
      align && `o-grid--${align}`,
      size && `o-grid--${size}`,
      space && `o-grid--${space}`,
      {
        'o-grid--stretch': stretch,
        'o-grid--wrapped': wrapped,
        'o-grid--liquid': liquid,
        'o-grid--auto o-grid--liquid': auto,
        'o-grid--reverse': reverse
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
const ALIGN_VALUES = ['bottom', 'middle']
const SIZE_VALUES = ['flush', 'tiny', 'small', 'large', 'huge']
const SPACE_VALUES = ['around', 'between', 'center', 'end']

export default {
  name: 'Grid',
  data () {
    return {}
  },
  props: {
    align: {
      type: String,
      validator: value => ALIGN_VALUES.includes(value)
    },
    size: {
      type: String,
      validator: value => SIZE_VALUES.includes(value)
    },
    space: {
      type: String,
      validator: value => SPACE_VALUES.includes(value)
    },
    stretch: {
      type: Boolean,
      default: false
    },
    auto: {
      type: Boolean,
      default: false
    },
    liquid: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    wrapped: {
      type: Boolean,
      default: false
    }
  }
}
</script>
