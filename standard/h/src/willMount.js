import magic from '@kuba/magic'
import paint from './paint'
import setImmediate from '@kuba/setimmediate'

function willMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.willMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      setImmediate(() => this[paint.instance]?.[event]?.())
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

function hook (target, method) {
  const event = (this?.event ?? magic.willMount)

  Reflect.defineProperty(target, event, {
    value () {
      this[method]()
      return this
    },
    writable: true
  })
}

export default willMount
export {
  hook
}
