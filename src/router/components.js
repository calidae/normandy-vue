import GridShowcase from '@/showcase/components/GridShowcase'
import MediaShowcase from '@/showcase/components/MediaShowcase'
import BlockShowcase from '@/showcase/components/BlockShowcase'

export default [
  {
    path: '/media',
    name: 'media',
    component: MediaShowcase
  },
  {
    path: '/grid',
    name: 'grid',
    component: GridShowcase
  },
  {
    path: '/block',
    name: 'block',
    component: BlockShowcase
  }
]
