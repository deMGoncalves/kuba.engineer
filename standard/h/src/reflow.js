import magic from '@kuba/magic'

class Reflow {
  static get add () {
    return magic.add
  }

  static get remove () {
    return magic.remove
  }

  static get replace () {
    return magic.replace
  }

  static #zip (children, nChildren) {
    children = [...children]
    nChildren = [...nChildren]
    const n = Math.max(children.length, nChildren.length)
    const zip = Array(n).fill(null).map((_, i) => [children[i], nChildren[i]])
    return zip
  }

  static match (children, nChildren) {
    Reflow
      .#zip(children, nChildren)
      .forEach((args) => console.log(...args))
    return undefined
  }
}

export default Reflow
