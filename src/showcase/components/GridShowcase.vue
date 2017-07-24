<template>
  <div>
    <component-header v-bind="{ title, description }" />
    <p>The Grid component consists of two components: the <samp>&lt;Grid></samp> wrapper and the <samp>&lt;Grid-item></samp>
    component, which is supposed to live inside the wrapper.</p>
    <br />
    <Grid>
      <Grid-item><div class="demo">lorem</div></Grid-item>
      <Grid-item><div class="demo">ipsum</div></Grid-item>
      <Grid-item><div class="demo">dolor sit amet</div></Grid-item>
    </Grid>


    <h2>Width</h2>
    <hr>
    <pre>prop: <b>width</b><br />values: any combination of <b>[1, 2, 3, 4, 5, 6]</b></pre>
    <Grid v-for="(fraction, i) in width_values" :key="i">
      <Grid-item :width="`1/${fraction}`" v-for="(elem, j) in fraction" :key="j">
        <div class="demo">1/{{ fraction }}</div>
      </Grid-item>
    </Grid>


    <h2>Nested grids</h2>
    <hr>
    <p>We can obviously nest grids to create complex layouts</p>
    <Grid>
      <Grid-item width="1/2">
        <div class="demo">1/2</div>
      </Grid-item>
      <Grid-item width="1/2">
        <Grid>
          <Grid-item width="1/4" v-for="i in [1,2,3,4]" :key="i">
            <div class="demo">1/4</div>
          </Grid-item>
        </Grid>
      </Grid-item>
    </Grid>


    <h2>Size modifier</h2>
    <hr>
    <pre>prop: <b>size</b></pre>
    <p>This modifier provides different gutter sizes.</p>
    <div v-for="size in size_values">
      <h3>{{ size }}</h3>
      <Grid v-bind="{ size }">
        <Grid-item width="1/3" v-for="i in [1,2,3]" :key="i">
          <div class="demo">1/3</div>
        </Grid-item>
      </Grid>
    </div>


    <h2>Align modifier</h2>
    <hr>
    <pre>prop: <b>align</b></pre>
    <p>This modifier change the items alignment without modifying its height.</p>
    <div v-for="align in align_values">
      <h3>{{ align }}</h3>
      <Grid v-bind="{ align }">
        <Grid-item width="1/3">
          <div class="demo">1/3</div>
        </Grid-item>
        <Grid-item width="1/3">
          <div class="demo">{{ slot }}</div>
        </Grid-item>
        <Grid-item width="1/3">
          <div class="demo">1/3</div>
        </Grid-item>
      </Grid>
    </div>


    <h2>Liquid modifier</h2>
    <hr>
    <pre>prop: <b>liquid</b></pre>
    <p>Liquid modifier makes every grid item to naturally space themsevles equally and expand to fit the entire row. Massively useful when all grid items should have the same width.</p>
    <Grid liquid>
      <Grid-item v-for="i in [...Array(7)]" :key="i">
        <div class="demo">auto</div>
      </Grid-item>
    </Grid>


    <h2>Stretch modifier</h2>
    <hr>
    <pre>prop: <b>stretch</b></pre>
    <p>This modifier will equal height of grid items.</p>
    <Grid liquid stretch>
      <Grid-item>
        <div class="demo">1/3</div>
      </Grid-item>
      <Grid-item>
        <div class="demo">{{ slot }}</div>
      </Grid-item>
      <Grid-item>
        <div class="demo">1/3</div>
      </Grid-item>
    </Grid>


    <h2>Reverse modifier</h2>
    <hr>
    <pre>prop: <b>reverse</b></pre>
    <p>This modifier will reverse its grid items.</p>
    <Grid reverse liquid>
      <Grid-item>
        <div class="demo">First</div>
      </Grid-item>
      <Grid-item>
        <div class="demo">Second</div>
      </Grid-item>
      <Grid-item>
        <div class="demo">Last</div>
      </Grid-item>
    </Grid>


    <h2>Auto modifier</h2>
    <hr>
    <pre>prop: <b>auto</b></pre>
    <p>This modifier will size the element according to its size property (which can itself be auto, which sizes the element based on its contents).</p>
    <Grid auto>
      <Grid-item>
          <img src="http://fakeimg.pl/320x240/">
      </Grid-item>
      <Grid-item>
          <img src="http://fakeimg.pl/640x480/">
      </Grid-item>
      <Grid-item>
          <img src="http://fakeimg.pl/800x600/">
      </Grid-item>
      <Grid-item>
          <img src="http://fakeimg.pl/1024x768/">
      </Grid-item>
      <Grid-item>
          <img src="http://fakeimg.pl/1280x960/">
      </Grid-item>
    </Grid>


    <h2>Wrapped modifier</h2>
    <hr>
    <pre>prop: <b>wrapped</b></pre>
    <p>Wrap items with a padding instead of using the padding as a column gutter.</p>
    <h3><i>(default)</i></h3>
    <Grid wrapped liquid>
      <Grid-item v-for="i in [1,2,3]" :key="i">
        <div class="demo">1/3</div>
      </Grid-item>
    </Grid>
    <div v-for="size in size_values">
      <h3>{{ size }}</h3>
      <Grid wrapped liquid :size="size">
        <Grid-item v-for="i in [1,2,3]" :key="i">
          <div class="demo">1/3</div>
        </Grid-item>
      </Grid>
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
      title: 'Grid',
      description: 'Grid object provides a common column-style flexbox layout',
      slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat.',
      width_values: [1, 2, 3, 4, 5, 6],
      size_values: ['flush', 'tiny', 'small', 'large', 'huge'],
      align_values: ['bottom', 'middle'],
      space_values: ['around', 'between', 'center', 'end'],
      liquid_values: ['liquid'],
      stretch_values: ['stretch'],
      auto_values: ['auto'],
      wrapped_values: ['wrapped'],
      reverse_values: [true]
    }
  }
}
</script>

<style>
.o-grid, .o-grid__item {
    outline: 0;
    background-color: inherit;
}
.o-grid + .o-grid {
  margin-top: 20px;
}
.demo {
  width: 100%;
  background-color: rgba(255, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}
.o-grid--wrapped {
  background-color: rgba(255, 0, 0, 0.1);
}
</style>
