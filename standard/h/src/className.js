import render from './render'
import repaint from './repaint'

class ClassName {
  #target
  #className

  get value () {
    return this.#className
  }

  constructor (className, target) {
    this.#className = className
    this.#target = target
  }

  [render.flow] () {
    this.value && this.#target.setClassName(this)
    return this
  }

  [repaint.reflow] (nClassName) {
    (this.value !== nClassName.value) && (
      this.#className = nClassName.value,
      this.value
        ? this.#target.setClassName(this)
        : this.#target.removeClassName()
    )
    return this
  }

  static create (attrList, target) {
    const [, value] = attrList.find(ClassName.#is) ?? []
    const className = [].concat(value).flat(Infinity).join(' ')
    return new ClassName(className, target)
  }

  static #is ([key, value]) {
    return /^(?<attr>className)$/.test(key) && value !== undefined
  }
}

export default ClassName
