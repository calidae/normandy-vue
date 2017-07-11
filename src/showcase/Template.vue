<template>
  <div>

      <h1>{{ component.title }} Object</h1>
      <hr />
      <p>{{ component.description }}</p>

      <component :is="component.name" v-bind="component.requiredProps">
        <div v-html="component.slot"></div>
      </component>

      <div v-for="(prop, propName) in component.props">
        <h2>{{ propName }} modifier</h2>
        <hr>
        <p v-if="prop.description">{{ prop.description }}</p>
        <pre>prop: <b>{{ propName }}</b> ({{ prop.type }})</pre>

        <div
          class="object-wrapper"
          v-for="(computedProp, index) in computedProps(propName, componentName)">

          <h3>{{ computedProp[propName] }}</h3>
          <component :is="component.name" v-bind="computedProp">
            <div v-html="component.slot"></div>
          </component>

        </div>
      </div>

  </div>
</template>

<script>
import * as Components from '@/lib'
import componentsList from './components'

let exportedComponents = {}
for (let comp in Components) {
  const tmp = Components[comp]
  exportedComponents = {
    [tmp.name]: tmp,
    ...exportedComponents
  }
}

export default {
  components: exportedComponents,
  data () {
    return {
      componentsList,
      componentName: this.$route.name
    }
  },
  computed: {
    component () {
      return this.componentsList[this.componentName]
    }
  },
  methods: {
    computedProps (currentProp, componentName) {
      const currentComponent = this.componentsList[componentName]

      let props = []
      currentComponent.props[currentProp].values.map(value => {
        props.push({
          [currentProp]: value,
          ...currentComponent.requiredProps
        })
      })

      return props
    }
  }
}
</script>
