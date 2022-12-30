import './style'
import h from '@kuba/h'

function component (_master, children) {
  return (
    <main className='master__main'>
      {children}
    </main>
  )
}

export default component
