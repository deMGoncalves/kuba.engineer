import render from './render'
import repaint from './repaint'

function paint (component) {
  return (Klass) =>
    new Proxy(
      function (props, children) {
        const instance = (this instanceof Klass)
          ? new Klass(...arguments)
          : new Klass(props)

        const ast = component(instance, children)

        Object.assign(instance, {
          [render.flow]: () => ast[render.flow](),
          [repaint.reflow]: () => ast[repaint.reflow](component(instance, children))
        })

        return (this instanceof Klass)
          ? instance
          : ast
      },
      {
        get: (_, key) => Reflect.get(Klass, key),
        set: (_, key, value) => (Reflect.set(Klass, key, value), true)
      }
    )
}

export default paint
