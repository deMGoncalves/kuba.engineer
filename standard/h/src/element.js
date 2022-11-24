class Element {
  static create (nodeName, attrs, children) {
    return new Element(
      nodeName,
      Object.entries(attrs),
      children.flat(Infinity)
    )
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
