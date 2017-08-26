<template>
  <div class="o-media" :class="[ classes ]">

    <div class="o-media__img">
      <img v-bind="{ src, alt }" />
    </div>

    <div class="o-media__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { SIZE_VALUES } from '@/constraints'

const VALIGN_VALUES = ['center', 'bottom', 'stretch']

export default {
  name: 'Media',
  props: {
    src: VueTypes.string.isRequired,
    alt: VueTypes.string.isRequired,
    size: VueTypes.oneOf(SIZE_VALUES),
    align: VueTypes.oneOf(VALIGN_VALUES),
    reverse: VueTypes.bool.def(false)
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
        [`o-media--${this.align}`]: this.align,
        [`o-media--${this.size}`]: this.size,
        'o-media--reverse': this.reverse
      }
    }
  }
}
</script>
