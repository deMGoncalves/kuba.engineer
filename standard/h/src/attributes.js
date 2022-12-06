import Attribute from './attribute'
import Reflow from './reflow'
import render from './render'
import repaint from './repaint'

class Attributes {
  #attrList
  #target

  constructor (attrList, target) {
    this.#attrList = attrList
    this.#target = target
  }

  [Reflow.add] (nAttr) {
    this.#attrList.push(nAttr)
    this.#target.setAttribute(nAttr)
    return this
  }

  [Reflow.remove] (attr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1)
    this.#target.removeAttribute(attr)
    return this
  }

  [Reflow.replace] (attr, nAttr) {
    const start = this.#attrList.indexOf(attr)
    this.#attrList.splice(start, 1, nAttr)
    this.#target.removeAttribute(attr)
    this.#target.setAttribute(nAttr)
    return this
  }

  [render.flow] () {
    this.#attrList.forEach((attr) => this.#target.setAttribute(attr))
    return this
  }

  [repaint.reflow] (nAttributes) {
    Reflow.match(this, nAttributes)
    return this
  }

  * [Symbol.iterator] () {
    yield * this.#attrList
  }

  static create (attrList, target) {
    attrList = Attribute.mapper(attrList)
    return new Attributes(attrList, target)
  }
}

export default Attributes
