<template>
  <div class="o-cover">

  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { SIZE_VALUES } from '@/constraints'

export default {
  name: 'Cover',
  props: {
    size: VueTypes.oneOf(SIZE_VALUES)
  }
}
</script>
