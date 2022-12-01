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

  static mapper (nodeList) {
    return nodeList.map((child) => {
      const types = ['String', 'Number', 'Boolean', 'Date', 'Array']
      const target = {}.toString.call(child).slice(8, -1)
      return types.includes(target)
        ? new Text(child)
        : child
    })
  }
}

export default Text
