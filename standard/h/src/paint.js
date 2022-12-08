import magic from '@kuba/magic'
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
          [paint.rootElement]: () => ast[paint.node](),
          [render.flow]: () => ast[render.flow](),
          [repaint.reflow]: () => ast[repaint.reflow](component(instance, children))
        })

        Object.assign(ast, {
          [paint.instance]: instance
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

Object.assign(paint, {
  instance: magic.paint_instance,
  node: magic.paint_node,
  rootElement: magic.paint_rootElement
})

export default paint
