<template>
  <div class="o-cover" :class="[ classes ]" :style="[ styles ]">

    <div class="o-cover__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { SIZE_VALUES } from '@/constraints'

export default {
  name: 'Cover',
  props: {
    src: VueTypes.string.isRequired,
    size: VueTypes.oneOf(SIZE_VALUES)
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      return {
        [`o-cover--${this.size}`]: this.size
      }
    },
    styles () {
      return {
        'background-image': `url(${this.src})`
      }
    }
  }
}
</script>
