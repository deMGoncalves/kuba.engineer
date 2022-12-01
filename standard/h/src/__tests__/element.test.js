import Element from '../element'
import render from '../render'

describe('standard.h.element', () => {
  let nodeName

  beforeEach(() => {
    nodeName = 'DIV'
  })

  test('Retorna truthy quando o nodeName for uma string', () => {
    expect(Element.is(nodeName)).toBeTruthy()
  })

  test('Cria um elemento', () => {
    expect(Element.create(nodeName, {}, [])).toBeInstanceOf(Element)
  })

  test('Cria um HTMLElement', () => {
    const createElement = jest.spyOn(document, 'createElement')

    const element = Element.create(nodeName, {}, [])
    const node = element[render.paint]()

    expect(node).toBeInstanceOf(HTMLElement)
    expect(node.nodeName).toBe(nodeName)

    expect(createElement).toHaveBeenCalledTimes(1)
    expect(createElement).toHaveBeenCalledWith(nodeName)
  })
})
