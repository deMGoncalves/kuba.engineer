import magic from '@kuba/magic'
import paint from './paint'

function willMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.willMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      setTimeout(() => this[paint.instance]?.[event]?.())
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

function hook (target, method) {
  const event = (this?.event ?? magic.willMount)

  Object.defineProperty(target, event, {
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
