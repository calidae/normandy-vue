<template>
  <div>
    <component-header
      title="Media"
      description="Place any image- and text-like content side-by-side" />

    <media v-bind="{ src, alt }">
      {{ slot }}
    </media>

    <div v-for="(prop, propName) in optionalProps" :key="propName">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div class="object-wrapper" v-for="value in prop" :key="value">
        <h3>{{ value }}</h3>
        <media v-bind="{ src, alt, [propName]: value }">
          {{ slot }}
        </media>
      </div>

    </div>

  </div>
</template>

<script>
import ComponentHeader from './ComponentHeader'

export default {
  name: 'media-showcase',
  components: {
    ComponentHeader
  },
  data () {
    return {
      src: 'http://via.placeholder.com/350x150',
      alt: 'logo',
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ],
        valign: [ 'middle', 'bottom' ],
        reverse: [true],
        stretch: [true]
      }
    }
  }
}
</script>
