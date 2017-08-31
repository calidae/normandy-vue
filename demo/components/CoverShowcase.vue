<template>
  <div>
    <component-header
      title="Cover"
      description="Place any text as a cover from an image" />

    <Cover :src="src" :class="classes">
      {{ slot }}
    </Cover>

    <div v-for="(prop, propName) in optionalProps" :key="propName">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div class="object-wrapper" v-for="value in prop" :key="value">
        <h3>{{ value }}</h3>
        <Cover v-bind="{ src, [propName]: value }" :class="classes">
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
    [ComponentHeader.name]: ComponentHeader
  },
  data () {
    return {
      src: 'https://unsplash.it/400/200',
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ]
      },
      classes: ['u-1/4', 'u-margin-horizontal-auto']
    }
  }
}
</script>

<style scoped>
  .o-cover {
    height: 250px;
  }
</style>

