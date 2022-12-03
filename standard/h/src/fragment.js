import Children from './children'
import didMount from './didMount'
import didUpdate from './didUpdate'
import render from './render'
import repaint from './repaint'
import willMount from './willMount'
import willUpdate from './willUpdate'

class Fragment {
  #children
  #node

  get children () {
    return this.#children
  }

  constructor (_attrs, children) {
    this.#children = Children.create(children, this)
  }

  [Children.parent] () {
    return this.#node
  }

  @didMount
  @willMount
  [render.flow] () {
    this.#node ??= document.createDocumentFragment()
    this.children[render.flow]()
    return this.#node
  }

  @didUpdate
  @willUpdate
  [repaint.reflow] (fragment) {
    this.children[repaint.reflow](fragment.children)
    return this
  }

  static execute (attrs, children) {
    children = children.flat(Infinity)
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
