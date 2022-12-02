import Event from './event'
import magic from '@kuba/magic'
import render from './render'

class Events {
  #element
  #eventList

  static get target () {
    return magic.events_target
  }

  constructor (eventList, element) {
    this.#eventList = eventList
    this.#element = element
  }

  [render.flow] () {
    const target = this.#element[Events.target]()
    this.#eventList.forEach(({ name, listener }) => Reflect.set(target, name, listener))
    return this
  }

  static create (attrList, element) {
    attrList = Event.mapper(attrList)
    return new Events(attrList, element)
  }
}

export default Events
