import magic from '@kuba/magic'

class Reflow {
  static get add () {
    return magic.__add__
  }

  static get remove () {
    return magic.__remove__
  }

  static get replace () {
    return magic.__replace__
  }

  static zip (_child, _nChild) {
    return undefined
  }
}

export default Reflow
