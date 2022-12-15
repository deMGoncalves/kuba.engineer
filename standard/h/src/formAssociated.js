import Element from './element'

class FormAssociated extends Element {
  static get #contents () {
    return /button|datalist|fieldset|input|keygen|label|legend|metter|option|optgroup|progress|select|textarea|output/
  }

  removeAttribute ({ key }) {
    key === 'value'
      ? Reflect.set(super.__node__, key, '')
      : super.__node__.removeAttribute(key)
    return this
  }

  setAttribute ({ key, value }) {
    key === 'value'
      ? Reflect.set(super.__node__, key, value)
      : super.__node__.setAttribute(key, value)
    return this
  }

  static is (nodeName) {
    return this.#contents.test(nodeName)
  }
}

export default FormAssociated
