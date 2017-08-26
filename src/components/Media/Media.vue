<template>
  <div class="o-media"
    :class="[
      align && `o-media--${align}`,
      size && `o-media--${size}`,
      { 'o-media--reverse': reverse }
    ]">

    <div class="o-media__img">
      <img v-bind="{ src, alt }" />
    </div>

    <div class="o-media__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
const VALIGN_VALUES = [ 'center', 'bottom', 'stretch' ]
const SIZE_VALUES = [ 'flush', 'tiny', 'small', 'large', 'huge' ]
import VueTypes from 'vue-types'

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
  }
}
</script>
