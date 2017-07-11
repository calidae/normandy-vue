<template>
  <div>
    <div v-for="component in components">
      <router-link :to="component.name">{{ component.title }}</router-link>
    </div>
  </div>
</template>

<script>
import components from './components'

export default {
  name: 'Showcase',
  data () {
    return {
      components
    }
  }
}
</script>
