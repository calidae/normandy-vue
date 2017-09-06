<template>
  <div>
    <component-header
      title="Wrapper"
      description="Place any content into a wrappered container" />

    <Wrapper>
      <div class="c-wrappered-element">
        <b>wrappered element</b>
      </div>
    </Wrapper>

    <div v-for="(prop, propName) in optionalProps" :key="propName">
      <h2>{{ propName }} modifier</h2>
      <hr>
      <pre>prop: <b>{{ propName }}</b></pre>

      <div v-for="value in prop" :key="value">
        <h3>{{ value }}</h3>
        <Wrapper v-bind="{ [propName]: value }">
          <div class="c-wrappered-element">
            <b>wrappered element</b>
          </div>
        </Wrapper>
      </div>

    </div>

  </div>
</template>

<script>
import ComponentHeader from './ComponentHeader'

export default {
  name: 'wrapper-showcase',
  components: {
    ComponentHeader
  },
  data () {
    return {
      optionalProps: {
        size: [ 'tiny', 'small', 'large', 'huge' ]
      }
    }
  }
}
</script>

<style scoped>
  .c-wrappered-element {
    outline: 2px solid #f00;
    background-color: rgba(255, 0, 0, 0.1);
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f00;
  }
</style>

