<template>
  <div>
    <component-header
      title="Block"
      description="Stacked image-with-text object. A simple abstraction to cover a very commonly occurring design pattern." />

  </div>
</template>

<script>
import ComponentHeader from '../ComponentHeader'
import Block from '@/components/Block'

export default {
  name: 'block-showcase',
  components: {
    [ComponentHeader.name]: ComponentHeader,
    [Block.name]: Block
  },
  data () {
    return {}
  }
}
</script>
