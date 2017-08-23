<template>
  <div class="o-block"
    :class="[
      align && `o-block--${align}`,
      size && `o-block--${size}`
    ]">

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
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
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
