<template>
  <div>
    <component-header
      title="Media"
      description="Place any image- and text-like content side-by-side" />

    <media v-bind="{ src, alt }">
      {{ text }}
    </media>

    <div v-for="(prop, propName) in optionalProps">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div
        class="object-wrapper"
        v-for="value in prop">
        <media v-bind="{ src, alt, [propName]: value }">
          {{ text }}
        </media>
      </div>

    </div>

  </div>
</template>

<script>
import ComponentHeader from '../ComponentHeader'
import Media from '@/components/Media'

export default {
  name: 'media-showcase',
  components: {
    [ComponentHeader.name]: ComponentHeader,
    [Media.name]: Media
  },
  data () {
    return {
      src: 'http://via.placeholder.com/350x150',
      alt: 'logo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ],
        align: [ 'center', 'bottom', 'stretch' ],
        reverse: [true]
      }
    }
  }
}
</script>
