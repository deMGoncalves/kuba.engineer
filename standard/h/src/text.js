import render from './render'

class Text {
  #node
  #textContent

  static get #allowedTypes () {
    return ['Array', 'Boolean', 'Date', 'Number', 'String']
  }

  constructor (textContent) {
    this.#textContent = textContent
  }

  [render.paint] () {
    this.#node ??= document.createTextNode(this.#textContent)
    return this.#node
  }

  static #create (node) {
    return new Text(node)
  }

  static #is (node) {
    const type = {}.toString.call(node).slice(8, -1)
    return Text.#allowedTypes.includes(type)
  }

  static mapper (childList) {
    return childList
      .map((node) => (
        Text.#is(node) ? Text.#create(node) : node
      ))
  }
}

export default Text
