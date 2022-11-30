import Children from './children'
import render from './render'

class Fragment {
  #children
  #node

  constructor (_attrs, children) {
    this.#children = Children.create(children, this)
  }

  [Children.parent] () {
    return this.#node
  }

  [render.paint] () {
    this.#node ??= document.createDocumentFragment()
    this.#children[render.paint]()
    return this.#node
  }

  static execute (attrs, children) {
    children = children.flat(Infinity)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
export {
  Fragment
}
