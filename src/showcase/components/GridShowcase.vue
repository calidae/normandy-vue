<template>
  <div>
    <component-header
      title="Grid"
      description="Place any image- and text-like content side-by-side" />

    <Grid>
      <Grid-item>asd</Grid-item>
      <Grid-item>asd</Grid-item>
      <Grid-item>asd</Grid-item>
    </Grid>

    <div v-for="(prop, propName) in optionalProps">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div class="object-wrapper" v-for="value in prop">
        <h3>{{ value }}</h3>
        asdasd
      </div>

    </div>

  </div>
</template>

<script>
import ComponentHeader from '../ComponentHeader'
import { Grid, GridItem } from '@/components/Grid'

export default {
  name: 'grid-showcase',
  components: {
    [ComponentHeader.name]: ComponentHeader,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data () {
    return {
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ],
        align: [ 'center', 'bottom', 'stretch' ],
        reverse: [true]
      }
    }
  }
}
</script>
