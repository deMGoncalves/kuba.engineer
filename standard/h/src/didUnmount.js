import magic from '@kuba/magic'
import paint from './paint'

function didUnmount (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      this[paint.instance]?.[didUnmount.event]?.()
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, didUnmount.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(didUnmount, {
  event: magic.didUnmount
})

export default didUnmount
export {
  hook
}
