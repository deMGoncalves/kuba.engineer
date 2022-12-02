import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import overload from '@kuba/overload'
import render from './render'

class Element {
  #attributes
  #children
  #className
  #node
  #nodeName

  constructor (nodeName, attrs, children) {
    this.#nodeName = nodeName
    this.#attributes = Attributes.create(attrs, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(attrs, this)
  }

  @overload(
    Attributes.target,
    ClassName.target
  )
  [Children.parent] () {
    return this.#node
  }

  [render.paint] () {
    this.#node ??= document.createElement(this.#nodeName)
    this.#attributes[render.paint]()
    this.#className[render.paint]()
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
