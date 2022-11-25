import render from './render'

class Element {
  #node
  #nodeName

  constructor (nodeName) {
    this.#nodeName = nodeName
  }

  [render.paint] () {
    return (this.#node ??= document.createElement(this.#nodeName))
  }

  static create (nodeName, attrs, children) {
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
