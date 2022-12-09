import magic from '@kuba/magic'
import paint from './paint'

function didMount (_target, _prop, descriptor) {
  const event = (this?.event ?? magic.didMount)
  const next = descriptor.value

  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.[event]?.()
      return Reflect.apply(next, this, arguments)
    },
    writable: true
  })
}

function hook (target, prop) {
  const event = (this?.event ?? magic.didMount)

  Reflect.defineProperty(target, event, {
    value () {
      this[prop]()
      return this
    },
    writable: true
  })
}

export default didMount
export {
  hook
}
