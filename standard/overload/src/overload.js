export default (...args) =>
  (target, method) => (
    args.forEach((key) => (
      Object.defineProperty(target, key, {
        value () {
          return this[method](...arguments)
        }
      })
    ))
  )
