import Element from '../element'
import render from '../render'

describe('standard.h.element', () => {
  let nodeName

  beforeEach(() => {
    nodeName = 'div'
  })

  test('Retorna truthy quando o nodeName for uma string', () => {
    expect(Element.is(nodeName)).toBeTruthy()
  })

  test('Cria um elemento', () => {
    expect(Element.create(nodeName)).toBeInstanceOf(Element)
  })

  test('Cria um HTMLElement', () => {
    const element = Element.create('div', {}, [])
    const node = element[render.paint]()

    expect(node).toBeInstanceOf(HTMLElement)
    expect(node.nodeName).toBe('DIV')
  })
})
