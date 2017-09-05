<template>
  <div>
    <component-header
      title="Cover"
      description="Place any text as a cover from an image" />

    <Cover :src="src">
      {{ slot }}
    </Cover>

    <div v-for="(prop, propName) in optionalProps" :key="propName">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div class="object-wrapper" v-for="value in prop" :key="value">
        <h3>{{ value }}</h3>
        <Cover v-bind="{ src, [propName]: value }">
          {{ slot }}
        </Cover>
      </div>

    </div>

  </div>
</template>

<script>
import ComponentHeader from './ComponentHeader'

export default {
  name: 'cover-showcase',
  components: {
    ComponentHeader
  },
  data () {
    return {
      src: 'https://unsplash.it/960/400',
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ],
        align: [ 'left', 'right' ],
        valign: [ 'top', 'bottom' ]
      }
    }
  }
}
</script>

<style scoped>
  .o-cover {
    height: 250px;
  }
</style>

