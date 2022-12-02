import magic from '@kuba/magic'
import render from './render'
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

  static create (childList, element) {
    childList = childList.filter(Boolean)
    childList = Text.mapper(childList)
    return new Children(childList, element)
  }
}

export default Children
