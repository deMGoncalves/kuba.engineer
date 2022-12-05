import magic from '@kuba/magic'
import render from './render'
import repaint from './repaint'

class ClassName {
  #element
  #className

  get value () {
    return this.#className
  }

  static get target () {
    return magic.classname_target
  }

  constructor (className, element) {
    this.#className = className
    this.#element = element
  }

  [render.flow] () {
    const target = this.#element[ClassName.target]()
    this.#className && (
      Reflect.set(target, 'className', this.#className)
    )
    return this
  }

  [repaint.reflow] (className) {
    (this.value !== className.value) && (
      this.#className = className.value
    )
    return this
  }

  static create (attrList, element) {
    const [, value] = attrList.find(ClassName.#is) ?? []
    const className = [].concat(value).flat(Infinity).join(' ')
    return new ClassName(className, element)
  }

  static #is ([key, value]) {
    return /^(?<attr>className)$/.test(key) && value !== undefined
  }
}

export default ClassName
