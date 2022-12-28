function override (target, prop, functionRef) {
  const next = target[prop] ?? function () { return undefined }
  Object.assign(target, {
    [prop] () {
      return functionRef.call(this, arguments, next)
    }
  })
}

export default override
