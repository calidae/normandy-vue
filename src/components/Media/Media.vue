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

export default {
  name: 'Media',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: value => SIZE_VALUES.includes(value)
    },
    align: {
      type: String,
      validator: value => VALIGN_VALUES.includes(value)
    }
  },
  data () {
    return {}
  }
}
</script>
