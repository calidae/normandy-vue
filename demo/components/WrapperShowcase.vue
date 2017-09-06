<template>
  <div>
    <component-header
      title="Wrapper"
      description="Place any content into a wrappered container" />

    <div v-for="(prop, propName) in optionalProps" :key="propName">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div class="" v-for="value in prop" :key="value">
        <h3>{{ value }}</h3>
        <Wrapper v-bind="{ src, [propName]: value }">
          <div class="c-wrappered-element">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </div>
        </Wrapper>
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
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      optionalProps: {
        size: [ 'flush', 'tiny', 'small', 'large', 'huge' ]
      }
    }
  }
}
</script>

<style scoped>
  .c-wrappered-element {
    height: 250px;
  }
</style>

