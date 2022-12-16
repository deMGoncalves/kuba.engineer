class Slot {
  #value

  get value () {
    return this.#value
  }

  constructor (value) {
    this.#value = value
  }

  static create (attrList) {
    const [, value] = attrList.find(Slot.#is) ?? []
    return new Slot(value)
  }

  static #is ([key, value]) {
    return /^(?<attr>data-slot)$/.test(key) && value !== undefined
  }

  static mapper (children) {
    return Object.assign(
      children.filter(({ slot }) => (!slot)),
      children.group(({ slot }) => (slot))
    )
  }
}

export default Slot
