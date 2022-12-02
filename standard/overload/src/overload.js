export default (...args) =>
  (target, method) => (
    args.forEach((prop) => (
      Object.defineProperty(target, prop, {
        value () {
          return this[method](...arguments)
        }
      })
    ))
  )
