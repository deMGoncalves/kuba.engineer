import magic from '@kuba/magic'
import repaint from './repaint'

class Reflow {
  static get add () {
    return magic.add
  }

  static get equal () {
    return magic.equal
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
      .forEach(([child, nChild]) => {
        child[Reflow.equal](nChild) && child[repaint.reflow](nChild)
      })
    return Reflow
  }
}

export default Reflow
