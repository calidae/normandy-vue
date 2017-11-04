<template>
  <div class="o-wrapper" :class="[ classes ]">
    <slot></slot>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { SIZE_VALUES } from '@/constraints'

export default {
  name: 'Wrapper',
  props: {
    size: VueTypes.oneOf(SIZE_VALUES)
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
        [`o-wrapper--${this.size}`]: this.size
      }
    }
  }
}
</script>
