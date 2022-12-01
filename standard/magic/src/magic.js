export default new Proxy({}, {
  get: (target, key) => (target[key] ??= Symbol(key))
})
