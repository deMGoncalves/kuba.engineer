import Element from '../element'

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
})
