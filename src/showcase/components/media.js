export default {
  title: 'Media',
  name: 'media',
  description: 'Place any image- and text-like content side-by-side',
  slot: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, reiciendis fugiat ut voluptate fugit quisquam modi maiores, perspiciatis quasi praesentium ab vel at repellat amet atque? Veniam, officia, sint.',
  requiredProps: {
    src: 'http://via.placeholder.com/350x150',
    alt: 'logo'
  },
  props: {
    size: {
      type: 'String',
      description: 'Modify the object gutter',
      values: ['flush', 'tiny', 'small', 'large', 'huge']
    },
    align: {
      type: 'String',
      values: ['center', 'bottom', 'stretch']
    },
    reverse: {
      type: 'Boolean',
      values: [true]
    }
  }
}
