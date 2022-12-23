function urlFor (_page, _params) {
  return '/'
}

Object.assign(urlFor, {
  __urls__: {},

  push (name, url) {
    Reflect.set(this.__urls__, name, url)
    return this
  }
})

export default urlFor
