<template>
  <div>
    <div v-for="route in routes">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
  </div>
</template>

<script>
import routes from '@/router/components'

export default {
  name: 'Showcase',
  data () {
    return {
      routes
    }
  }
}
</script>

<style>

pre {
  background-color: #f1f1f2;
  padding: 10px;
  font-size: 1.2em;
  line-height: 1.8em;
}

h3 {
  margin-top: 40px;
}

h3 + p {
  margin-top: 10px;
}

/**
 * Outline all Object classes.
 */

[class^="o-"],
[class*=" o-"] {
    outline: 2px dashed #aaa;
    background-color: #f1f1f2;
}


/**
 * Outline all BEM Elements.
 */

[class*="__"] {
    outline: 2px solid #f00;
    background-color: rgba(255, 0, 0, 0.1);
}

.object-wrapper {
  margin-top: 50px;
}

</style>
