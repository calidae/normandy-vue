<template>
  <div class="o-grid" :class="[ classes ]">
    <slot></slot>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { VALIGN_VALUES, SIZE_VALUES, SPACE_VALUES } from '@/constraints'

export default {
  name: 'Grid',
  props: {
    valign: VueTypes.oneOf(VALIGN_VALUES),
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
        [`o-grid--${this.valign}`]: this.valign,
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
