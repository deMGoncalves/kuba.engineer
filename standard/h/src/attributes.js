import Attribute from './attribute'
import magic from '@kuba/magic'
import render from './render'

class Attributes {
  #attrList
  #element

  static get target () {
    return magic.attributes_target
  }

  constructor (attrList, element) {
    this.#attrList = attrList
    this.#element = element
  }

  [render.flow] () {
    const target = this.#element[Attributes.target]()
    this.#attrList.forEach((attr) => target.setAttribute(...attr))
    return this
  }

  static create (attrList, element) {
    attrList = Attribute.mapper(attrList)
    return new Attributes(attrList, element)
  }
}

export default Attributes
