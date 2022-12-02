import magic from '@kuba/magic'
import paint from './paint'

function didMount (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.[didMount.event]?.()
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, didMount.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(didMount, {
  event: magic.didMount
})

export default didMount
export {
  hook
}
