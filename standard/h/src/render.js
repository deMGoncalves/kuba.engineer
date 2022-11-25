const paint = Symbol('render')

const render = (node, element) => (
  node?.append(element[paint]?.())
)

Object.assign(render, {
  paint
})

export default render
