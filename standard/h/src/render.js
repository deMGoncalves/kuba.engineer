import magic from '@kuba/magic'

function render (node, element) {
  node.append(element[render.paint]())
}

Object.assign(render, {
  paint: magic.render_paint
})

export default render
