<template>
  <div>
    <h1>Media Object</h1>
    <hr />
    <p>{{ attributes.description }}</p>

    <div v-for="(prop, propName) in attributes.props">
      <h2>{{ propName }} modifiers</h2>
      <hr>
      <p v-if="prop.description">{{ prop.description }}</p>
      <pre>prop: <b>{{ propName }}</b> ({{ prop.type }})</pre>

      <div class="object-wrapper" v-for="(computedProp, index) in computedProps(propName)">
        <media
          :key="index"
          v-bind="computedProp">
          {{ attributes.slot }}
        </media>
      </div>
    </div>
<!--

    <h2>Alignment modifiers</h2>
    <pre><b>prop</b>: align (String)
<b>values</b>: ['center', 'bottom']</pre>
    <hr />
    <p>Center</p>
    <media src="http://via.placeholder.com/350x150" alt="logo" align="center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.
    </media>

    <p>Bottom</p>
    <media src="http://via.placeholder.com/350x150" alt="logo" align="bottom">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.
    </media>

    <p>Stretch</p>
    <media src="http://via.placeholder.com/350x150" alt="logo" align="stretch">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.
    </media>


    <h2>Reverse modifier</h2>
    <pre><b>prop</b>: reverse (Boolean)</pre>
    <hr />
    <p>Reverse the direction</p>

    <media src="http://via.placeholder.com/350x150" alt="logo" reverse>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.
    </media>-->
  </div>
</template>

<script>
import MediaObject from '@/components/Media'
import { MediaAttrs } from './componentsList'

export default {
  components: {
    [MediaObject.name]: MediaObject
  },
  data () {
    return {
      attributes: MediaAttrs
    }
  },
  methods: {
    computedProps (currentProp) {
      let props = []
      this.attributes.props[currentProp].values.map(value => {
        props.push({
          [currentProp]: value,
          ...this.attributes.requiredProps
        })
      })

      return props
    }
  }
}
</script>

<style></style>
