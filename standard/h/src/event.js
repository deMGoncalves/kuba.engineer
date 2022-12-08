import Reflow from './reflow'

class Event {
  #listener
  #name

  get listener () {
    return this.#listener
  }

  get name () {
    return this.#name.toLowerCase()
  }

  constructor (name, listener) {
    this.#name = name
    this.#listener = listener
  }

  [Reflow.equal] (_nEvent) {
    return false
  }

  * [Symbol.iterator] () {
    yield this.name
    yield this.listener
  }

  static #create (attr) {
    return new Event(...attr)
  }

  static #is ([key, value]) {
    return /^(?<attr>on[A-Z].+)$/.test(key) && typeof value === 'function'
  }

  static mapper (attrList) {
    return attrList
      .filter(Event.#is)
      .map(Event.#create)
  }
}

export default Event
