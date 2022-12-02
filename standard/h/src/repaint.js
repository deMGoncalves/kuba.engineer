import magic from '@kuba/magic'

function repaint (target, prop, descriptor) {
  const method = descriptor.value

  Object.defineProperty(target, prop, {
    ...descriptor,
    value () {
      setImmediate(this[repaint.reflow])
      return Reflect.apply(method, this, arguments)
    }
  })
}

Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
