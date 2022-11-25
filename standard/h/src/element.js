import render from './render'

class Element {
  [render.paint] () {
    return this
  }

  static create (nodeName, attrs, children) {
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
