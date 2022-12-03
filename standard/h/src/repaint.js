import magic from '@kuba/magic'

function repaint (_target, _prop, descriptor) {
  const method = descriptor.value

  Object.assign(descriptor, {
    value () {
      setTimeout(this[repaint.reflow])
      return Reflect.apply(method, this, arguments)
    }
  })
}

Object.assign(repaint, {
  reflow: magic.repaint_reflow
})

export default repaint
