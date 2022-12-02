import Attributes from './attributes'
import Children from './children'
import ClassName from './className'
import Events from './events'
import Is from './is'
import overload from '@kuba/overload'
import render from './render'
import repaint from './repaint'

class Element {
  #attributes
  #children
  #className
  #events
  #is
  #node
  #nodeName

  constructor (nodeName, attrs, children) {
    this.#nodeName = nodeName
    this.#attributes = Attributes.create(attrs, this)
    this.#children = Children.create(children, this)
    this.#className = ClassName.create(attrs, this)
    this.#events = Events.create(attrs, this)
    this.#is = Is.create(attrs)
  }

  @overload(
    Attributes.target,
    ClassName.target,
    Events.target
  )
  [Children.parent] () {
    return this.#node
  }

  [render.flow] () {
    this.#node ??= document.createElement(this.#nodeName, { is: this.#is })
    this.#events[render.flow]()
    this.#attributes[render.flow]()
    this.#className[render.flow]()
    this.#children[render.flow]()
    return this.#node
  }

  [repaint.reflow] (_ast) {
    return this
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
