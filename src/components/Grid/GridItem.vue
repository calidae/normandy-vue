<template>
  <div class="o-grid__item" :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Grid-item',
  data () {
    return {}
  },
  props: {
    width: {
      type: String,
      validator: value => {
        const split = value.split('/')
        return value.match(/^[0-9]\/[0-9]$/g) && split[0] <= split[1]
      }
    }
  },
  computed: {
    computedStyle () {
      if (!this.width) return null

      return { width: this.getWidthFromFraction(this.width) }
    }
  },
  methods: {
    getWidthFromFraction (fraction) {
      const split = fraction.split('/')
      const result = parseInt(split[0]) / parseInt(split[1])

      return this.round(result, 5) * 100 + '%'
    },
    round (value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals)
    }
  }
}
</script>
