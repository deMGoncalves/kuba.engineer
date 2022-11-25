class Component {
  static execute (nodeName, attrs, children) {
    return nodeName(attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'function'
  }
}

export default Component
