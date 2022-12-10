import magic from '@kuba/magic'
import requestAnimationFrame from '@kuba/requestanimationframe'

function repaint (_target, _prop, descriptor) {
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      requestAnimationFrame(this[repaint.reflow])
      return Reflect.apply(next, this, arguments)
    }
  })
}

Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
