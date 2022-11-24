class Component {
  static execute (nodeName, attrs, children) {
    return nodeName(
      attrs,
      children.flat(Infinity)
    )
  }

  static is (nodeName) {
    return typeof nodeName === 'function'
  }
}

export default Component
