import render from './render'

class Text {
  #node
  #textContent

  constructor (textContent) {
    this.#textContent = textContent
  }

  [render.paint] () {
    this.#node ??= document.createTextNode(this.#textContent)
    return this.#node
  }

  static create (textContent) {
    return new Text(textContent)
  }

  static is (textContent) {
    const types = ['String', 'Number', 'Boolean', 'Date', 'Array']
    const target = Object
      .toString()
      .call(textContent)
      .slice(8, -1)

    return types.includes(target)
  }
}

export default Text
