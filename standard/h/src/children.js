import render from './render'
import Text from './text'

class Children {
  #childList
  #element

  static get parent () {
    return Symbol('parent')
  }

  constructor (childList, element) {
    this.#childList = childList
    this.#element = element
  }

  [render.paint] () {
    const childList = this.#childList.map((child) => child[render.paint]())
    const parent = this.#element[Children.parent]()
    parent.append(...childList)
    return this
  }

  static create (childList, element) {
    childList = Text.mapper(childList)
    return new Children(childList, element)
  }
}

export default Children
