function middleware (functionRef) {
  return (ClassRef) =>
    new Proxy(
      function () {
        const instance = (this instanceof ClassRef)
          ? new ClassRef(...arguments)
          : ClassRef(...arguments)

        functionRef(instance)
        return instance
      },
      {
        get: (_, key) => Reflect.get(ClassRef, key),
        set: (_, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
}

export default middleware
