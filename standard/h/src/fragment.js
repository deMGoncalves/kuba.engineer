import Children from './children'
import render from './render'
import repaint from './repaint'

class Fragment {
  #children
  #node

  constructor (_attrs, children) {
    this.#children = Children.create(children, this)
  }

  [Children.parent] () {
    return this.#node
  }

  [render.flow] () {
    this.#node ??= document.createDocumentFragment()
    this.#children[render.flow]()
    return this.#node
  }

  [repaint.reflow] (_ast) {
    return this
  }

  static execute (attrs, children) {
    children = children.flat(Infinity)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
