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
      type: [String, Number]
    }
  },
  computed: {
    computedStyle () {
      if (!this.width) return null

      const split = this.width.split('/')
      const result = parseInt(split[0]) / parseInt(split[1])
      const width = 100 * this.round(result, 5) + '%'

      return { width }
    }
  },
  methods: {
    round (value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals)
    }
  }
}
</script>
