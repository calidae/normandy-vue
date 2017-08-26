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
import VueTypes from 'vue-types'
const ALIGN_VALUES = ['bottom', 'middle']
const SIZE_VALUES = ['flush', 'tiny', 'small', 'large', 'huge']
const SPACE_VALUES = ['around', 'between', 'center', 'end']

export default {
  name: 'Grid',
  props: {
    align: VueTypes.oneOf(ALIGN_VALUES),
    size: VueTypes.oneOf(SIZE_VALUES),
    space: VueTypes.oneOf(SPACE_VALUES),
    stretch: VueTypes.bool.def(false),
    auto: VueTypes.bool.def(false),
    liquid: VueTypes.bool.def(false),
    reverse: VueTypes.bool.def(false),
    wrapped: VueTypes.bool.def(false)
  },
  data () {
    return {}
  }
}
</script>
