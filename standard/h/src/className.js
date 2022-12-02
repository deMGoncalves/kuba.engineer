import magic from '@kuba/magic'
import render from './render'

class ClassName {
  #element
  #className

  static get target () {
    return magic.classname_target
  }

  constructor (className, element) {
    this.#className = className
    this.#element = element
  }

  [render.paint] () {
    const target = this.#element[ClassName.target]()
    this.#className && (
      target.className = this.#className
    )
    return this
  }

  static create (attrList, element) {
    const [, value] = attrList.find(ClassName.#is) ?? []
    const className = [].concat(value).flat(Infinity).join(' ')
    return new ClassName(className, element)
  }

  static #is ([key, className]) {
    return /^(?<attrs>className)$/.test(key) && className !== undefined
  }
}

export default ClassName
