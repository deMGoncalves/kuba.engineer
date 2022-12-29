import h from '@kuba/h'
import Zone from '@kuba/zone'
import lazy from '@kuba/lazy'

const Hero = lazy(() => import('./hero'))

function home () {
  return (
    <Zone>
      <Hero />
    </Zone>
  )
}

export default home
