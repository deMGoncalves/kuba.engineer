function override (target, prop, functionRef) {
  const next = target[prop]
  Object.assign(target, {
    [prop] () {
      return functionRef.call(this, arguments, next)
    }
  })
}

export default override
