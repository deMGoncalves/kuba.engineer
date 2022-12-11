export default (Klass) =>
  new Proxy(
    function (...args) {
      let instance

      return new Proxy({}, {
        get (_, key) {
          const target = instance ??= new Klass(...args)
          const prop = Reflect.get(target, key)
          return prop?.bind?.(target) || prop
        },

        set (_, key, value) {
          const target = instance ??= new Klass(...args)
          Reflect.set(target, key, value)
          return true
        }
      })
    },
    {
      get: (_, key) => Reflect.get(Klass, key),
      set: (_, key, value) => (Reflect.set(Klass, key, value), true)
    }
  )
