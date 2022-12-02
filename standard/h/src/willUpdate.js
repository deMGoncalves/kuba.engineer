import magic from '@kuba/magic'
import paint from './paint'

function willUpdate (_target, _prop, descriptor) {
  const method = descriptor.value
  Object.assign(descriptor, {
    value () {
      setTimeout(() => this[paint.instance]?.[willUpdate.event]?.())
      return Reflect.apply(method, this, arguments)
    }
  })
}

function hook (target, method) {
  Object.defineProperty(target, willUpdate.event, {
    value () {
      this[method]()
      return this
    }
  })
}

Object.assign(willUpdate, {
  event: magic.willUpdate
})

export default willUpdate
export {
  hook
}
