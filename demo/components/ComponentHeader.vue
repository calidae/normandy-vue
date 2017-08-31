<template>
  <div>
    <h1>{{ title }} Object</h1>
    <hr />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'component-header',
  props: {
    title: String,
    description: String
  },
  data () {
    return {}
  }
}
</script>
