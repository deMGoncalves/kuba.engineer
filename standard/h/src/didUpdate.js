import magic from '@kuba/magic'
import paint from './paint'

function didUpdate (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.[didUpdate.event]?.()
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, didUpdate.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(didUpdate, {
  event: magic.didUpdate
})

export default didUpdate
export {
  hook
}
