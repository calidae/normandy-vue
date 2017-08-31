<template>
  <div class="o-block" :class="[ classes ]">

    <div class="o-block__img">
      <img v-bind="{ src, alt }" />
    </div>

    <div class="o-block__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { ALIGN_VALUES, SIZE_VALUES } from '@/constraints'

export default {
  name: 'Block',
  props: {
    src: VueTypes.string.isRequired,
    alt: VueTypes.string.isRequired,
    size: VueTypes.oneOf(SIZE_VALUES),
    align: VueTypes.oneOf(ALIGN_VALUES)
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
        [`o-block--${this.align}`]: this.align,
        [`o-block--${this.size}`]: this.size
      }
    }
  }
}
</script>
