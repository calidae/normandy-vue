<template>
  <div class="o-grid" :class="[ classes ]">
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
  },
  computed: {
    classes () {
      return {
        [`o-grid--${this.align}`]: this.align,
        [`o-grid--${this.size}`]: this.size,
        [`o-grid--${this.space}`]: this.space,
        'o-grid--stretch': this.stretch,
        'o-grid--wrapped': this.wrapped,
        'o-grid--liquid': this.liquid,
        'o-grid--auto o-grid--liquid': this.auto,
        'o-grid--reverse': this.reverse

      }
    }
  }
}
</script>
