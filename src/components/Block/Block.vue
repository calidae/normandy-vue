<template>
  <div class="o-block"
    :class="[
      align && `o-block--${align}`,
      size && `o-block--${size}`
    ]">

    <div class="o-block__img">
      <img v-bind="{ src, alt }" />
    </div>

    <div class="o-block__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
const VALIGN_VALUES = [ 'left', 'right' ]
const SIZE_VALUES = [ 'flush', 'tiny', 'small', 'large', 'huge' ]

export default {
  name: 'Block',
  data () {
    return {}
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: value => SIZE_VALUES.includes(value)
    },
    align: {
      type: String,
      validator: value => VALIGN_VALUES.includes(value)
    }
  }
}
</script>

<style lang="scss">
/* ==========================================================================
   BLOCK OBJECT
   ========================================================================== */

$global-spacing-unit: 2em;
$global-spacing-unit-tiny: $global-spacing-unit / 3;
$global-spacing-unit-small: $global-spacing-unit / 2;
$global-spacing-unit-large: $global-spacing-unit * 2;
$global-spacing-unit-huge: $global-spacing-unit * 3;

/**
* Stacked image-with-text object. A simple abstraction to cover a very commonly
* occurring design pattern.
*/

.o-block {
    display: block;
    text-align: center;
}


.o-block__img {
    margin-bottom: $global-spacing-unit;


    /* Size variants.
        ===================================================================== */

    .o-block--flush > & {
        margin-bottom: 0;
    }

    .o-block--tiny > & {
        margin-bottom: $global-spacing-unit-tiny;
    }

    .o-block--small > & {
        margin-bottom: $global-spacing-unit-small;
    }

    .o-block--large > & {
        margin-bottom: $global-spacing-unit-large;
    }

    .o-block--huge > & {
        margin-bottom: $global-spacing-unit-huge;
    }

}


.o-block__body {
    display: block;
}





/* Alignment variants.
========================================================================== */

.o-block--right {
    text-align: right;
}

.o-block--left {
    text-align: left;
}
</style>
