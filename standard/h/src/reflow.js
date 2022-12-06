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

  static match (_children, _nChildren) {
    return undefined
  }
}

export default Reflow
