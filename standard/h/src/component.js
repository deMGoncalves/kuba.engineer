import Slot from './slot'

class Component {
  static execute (nodeName, attrs, children) {
    children = children.flat(Infinity)
    children = Slot.mapper(children)
    return nodeName(attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'function'
  }
}

export default Component
