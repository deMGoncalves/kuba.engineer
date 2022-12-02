import magic from '@kuba/magic'
import paint from './paint'

function willMount (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      setTimeout(() => this[paint.instance]?.[willMount.event]?.())
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, willMount.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(willMount, {
  event: magic.willMount
})

export default willMount
export {
  hook
}
