<template>
  <div class="o-media"
    :class="[
      align && `o-media--${align}`,
      size && `o-media--${size}`,
      { 'o-media--reverse': reverse }
    ]">

    <div class="o-media__img">
      <img v-bind="{ src, alt }" />
    </div>

    <div class="o-media__body">
      <slot></slot>
    </div>

  </div>
</template>

<script>
const VALIGN_VALUES = [ 'center', 'bottom', 'stretch' ]
const SIZE_VALUES = [ 'flush', 'tiny', 'small', 'large', 'huge' ]

export default {
  name: 'Media',
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
    reverse: {
      type: Boolean,
      default: false
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
   MEDIA OBJECT
   ========================================================================== */

$global-spacing-unit: 2em;
$global-spacing-unit-tiny: $global-spacing-unit / 2.5;
$global-spacing-unit-small: $global-spacing-unit / 2;
$global-spacing-unit-large: $global-spacing-unit * 2;
$global-spacing-unit-huge: $global-spacing-unit * 2.5;

/**
 * Place any image- and text-like content side-by-side, as per:
 * https://goo.gl/MDV4HS
 *
 * The Flexbox version of the Media Objects allows it to behave as a flag,
 * placing the image both at the bottom or the center of the whole element.
 *
 * 1. Image vertically aligned at top by default.
 */


.o-media {
    display: flex;
    align-items: flex-start; /* [1] */
}


.o-media__img {
    margin-right: $global-spacing-unit;

    > img {
        display: block;
    }

}


.o-media__body {
    flex: 1;

    &,
    > :last-child {
        margin-bottom: 0;
    }

}





/* Alignment variants.
========================================================================== */

/**
* Vertically align the image- and body-content differently.
*/

.o-media--center {
    align-items: center;
}


.o-media--bottom {
    align-items: flex-end;
}


/**
* Allows media img to stretch to fit the container.
*/

.o-media--stretch {
    align-items: stretch;
}




/* Size variants.
   ========================================================================== */

/**
 * Modify the amount of space between our image and our text. We also have
 * reversible options for all available sizes.
 */


/* Gutterless media objects.
  ========================================================================== */

.o-media--flush {

    > .o-media__img {
        margin-right: 0;
        margin-left: 0;
    }

}


.o-media--tiny {

    > .o-media__img {
        margin-right: $global-spacing-unit-tiny;
    }

    &.o-media--reverse {

        > .o-media__img {
            margin-right: 0;
            margin-left: $global-spacing-unit-tiny;
        }

    }

}


.o-media--small {

    > .o-media__img {
        margin-right: $global-spacing-unit-small;
    }

    &.o-media--reverse {

        > .o-media__img {
            margin-right: 0;
            margin-left: $global-spacing-unit-small;
        }

    }

}


.o-media--large {

    > .o-media__img {
        margin-right: $global-spacing-unit-large;
    }

    &.o-media--reverse {

        > .o-media__img {
            margin-right: 0;
            margin-left: $global-spacing-unit-large;
        }

    }

}


.o-media--huge {

    > .o-media__img {
        margin-right: $global-spacing-unit-huge;
    }

    &.o-media--reverse {

        > .o-media__img {
            margin-right: 0;
            margin-left: $global-spacing-unit-huge;
        }

    }

}



/* Reversed media objects.
   ========================================================================== */

.o-media--reverse {
    flex-direction: row-reverse;

    > .o-media__img {
        margin-right: 0;
        margin-left: $global-spacing-unit;
    }

}
</style>
