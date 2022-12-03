import magic from '@kuba/magic'
import render from './render'
import repaint from './repaint'
import Text from './text'

class Children {
  #childList
  #element

  static get parent () {
    return magic.children_parent
  }

  constructor (childList, element) {
    this.#childList = childList
    this.#element = element
  }

  [render.flow] () {
    const childList = this.#childList.map((child) => child[render.flow]())
    const parent = this.#element[Children.parent]()
    parent.append(...childList)
    return this
  }

  [repaint.reflow] (_children) {
    return this
  }

  static create (childList, element) {
    childList = Text.mapper(childList)
    childList = childList.filter(Boolean)
    return new Children(childList, element)
  }
}

export default Children
