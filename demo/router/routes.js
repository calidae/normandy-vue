import Home from '../components/Home'
import GridShowcase from '../components/GridShowcase'
import MediaShowcase from '../components/MediaShowcase'
import BlockShowcase from '../components/BlockShowcase'
import CoverShowcase from '../components/CoverShowcase'
import WrapperShowcase from '../components/WrapperShowcase'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
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
  },
  {
    path: '/cover',
    name: 'cover',
    component: CoverShowcase
  },
  {
    path: '/wrapper',
    name: 'wrapper',
    component: WrapperShowcase
  }
]
