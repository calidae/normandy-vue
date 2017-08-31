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
import { VALIGN_VALUES, SIZE_VALUES } from '@/constraints'

export default {
  name: 'Media',
  props: {
    src: VueTypes.string.isRequired,
    alt: VueTypes.string.isRequired,
    size: VueTypes.oneOf(SIZE_VALUES),
    valign: VueTypes.oneOf(VALIGN_VALUES),
    stretch: VueTypes.bool.def(false),
    reverse: VueTypes.bool.def(false)
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
        [`o-media--${this.valign}`]: this.valign,
        [`o-media--${this.size}`]: this.size,
        'o-media--stretch': this.stretch,
        'o-media--reverse': this.reverse
      }
    }
  }
}
</script>
