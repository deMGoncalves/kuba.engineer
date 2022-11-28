import render from './render'

class Element {
  #node
  #nodeName

  constructor (nodeName) {
    this.#nodeName = nodeName
  }

  [render.paint] () {
    this.#node ??= document.createElement(this.#nodeName)
    return this.#node
  }

  static create (nodeName, attrs, children) {
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
