import magic from '@kuba/magic'
import setImmediate from '@kuba/setimmediate'

function repaint (_target, _prop, descriptor) {
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      setImmediate(this[repaint.reflow])
      return Reflect.apply(next, this, arguments)
    }
  })
}

Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
