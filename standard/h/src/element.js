import Children from './children'
import render from './render'

class Element {
  #children
  #node
  #nodeName

  constructor (nodeName, _attrs, children) {
    this.#nodeName = nodeName
    this.#children = Children.create(children, this)
  }

  [Children.parent] () {
    return this.#node
  }

  [render.paint] () {
    this.#node ??= document.createElement(this.#nodeName)
    this.#children[render.paint]()
    return this.#node
  }

  static create (nodeName, attrs, children) {
    attrs = Object.entries(attrs)
    children = children.flat(Infinity)
    return new Element(nodeName, attrs, children)
  }

  static is (nodeName) {
    return typeof nodeName === 'string'
  }
}

export default Element
