import magic from '@kuba/magic'
import paint from './paint'

function willUnmount (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      setTimeout(() => this[paint.instance]?.[willUnmount.event]?.())
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, willUnmount.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(willUnmount, {
  event: magic.willUnmount
})

export default willUnmount
export {
  hook
}
