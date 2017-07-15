<template>
  <div>
    <div v-for="route in routes">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/components'

export default {
  name: 'Showcase',
  data () {
    return {
      routes
    }
  }
}
</script>
