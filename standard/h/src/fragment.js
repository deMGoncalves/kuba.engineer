import Children from './children'
import didMount from './didMount'
import didUpdate from './didUpdate'
import didUnmount from './didUnmount'
import overload from '@kuba/overload'
import paint from './paint'
import Reflow from './reflow'
import render from './render'
import repaint from './repaint'
import willMount from './willMount'
import willUpdate from './willUpdate'
import willUnmount from './willUnmount'

class Fragment {
  #children
  #node

  get children () {
    return this.#children
  }

  constructor (_attrs, children) {
    this.#children = Children.create(children, this)
  }

  @overload(
    'appendChild'
  )
  after (child) {
    const [...childList] = this.#children
    const lastChild = childList.pop()
    lastChild.after(child)
    return this
  }

  append (childList) {
    const nodeList = childList.map((child) => child[render.flow]())
    this.#node.append(...nodeList)
    return this
  }

  @didUnmount
  @willUnmount
  remove () {
    const [...childList] = this.#children
    childList.forEach((child) => child.remove())
    return this
  }

  replace (child, nChild) {
    child.insertAdjacentElement(nChild)
    child.remove()
    return this
  }

  [Reflow.diffent] (nFragment) {
    return this[paint.instance] !== nFragment[paint.instance]
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
