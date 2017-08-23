<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo" @click="goHome">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" src="./styles/app.scss">
</style>

<script>
export default {
  name: 'app',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
