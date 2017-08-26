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
const VALIGN_VALUES = [ 'left', 'right' ]
const SIZE_VALUES = [ 'flush', 'tiny', 'small', 'large', 'huge' ]

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
        [`o-media--${this.align}`]: this.align,
        [`o-media--${this.size}`]: this.size
      }
    }
  }
}
</script>
