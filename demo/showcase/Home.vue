<template>
  <div>
    <div v-for="route in routes" :key="route.name">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script>
import routes from '../router/routes'

export default {
  name: 'Home',
  data () {
    return {
      routes: routes.filter(r => r.name !== 'home')
    }
  }
}
</script>
