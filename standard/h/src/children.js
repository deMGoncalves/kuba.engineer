import magic from '@kuba/magic'
import Reflow from './reflow'
import render from './render'
import repaint from './repaint'
import Text from './text'

class Children {
  #childList
  #element

  static get parent () {
    return magic.__parent__
  }

  constructor (childList, element) {
    this.#childList = childList
    this.#element = element
  }

  [Reflow.add] (nChild) {
    this.#childList.push(nChild)
    return this
  }

  [Reflow.remove] (child) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1)
    return this
  }

  [Reflow.replace] (child, nChild) {
    const start = this.#childList.indexOf(child)
    this.#childList.splice(start, 1, nChild)
    return this
  }

  [render.flow] () {
    const parent = this.#element[Children.parent]()
    const children = this.#childList.map((child) => child[render.flow]())
    parent.append(...children)
    return this
  }

  [repaint.reflow] (children) {
    Reflow.zip(this, children)
    return this
  }

  static create (childList, element) {
    childList = Text.mapper(childList)
    childList = childList.filter(Boolean)
    return new Children(childList, element)
  }
}

export default Children
