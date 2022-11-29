import render from './render'

class Fragment {
  #node

  [render.paint] () {
    this.#node ??= document.createDocumentFragment()
    return this.#node
  }

  static execute (attrs, children) {
    return new Fragment(attrs, children)
  }
}

export default Fragment.execute
export {
  Fragment
}
