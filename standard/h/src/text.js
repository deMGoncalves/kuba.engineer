import Reflow from './reflow'
import render from './render'
import repaint from './repaint'

class Text {
  #content
  #node

  get content () {
    return this.#content
  }

  static get #allowedTypes () {
    return ['Array', 'Boolean', 'Date', 'Number', 'String']
  }

  constructor (content) {
    this.#content = content
  }

  [Reflow.equal] (nText) {
    return this.content === nText.content
  }

  [render.flow] () {
    this.#node ??= document.createTextNode(this.#content)
    return this.#node
  }

  [repaint.reflow] (text) {
    (this.content !== text.content) && (
      this.#content = text.content,
      this.#node.textContent = text.content
    )
    return this
  }

  static #create (node) {
    return new Text(node)
  }

  static #is (child) {
    const type = {}.toString.call(child).slice(8, -1)
    return Text.#allowedTypes.includes(type)
  }

  static mapper (childList) {
    return childList
      .map((child) => (
        Text.#is(child) ? Text.#create(child) : child
      ))
  }
}

export default Text
