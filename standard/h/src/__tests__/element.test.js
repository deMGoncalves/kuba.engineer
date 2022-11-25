import Element from '../element'

describe('standard.h.element', () => {
  let nodeName

  beforeEach(() => {
    nodeName = 'div'
  })

  test('Deve retornar truthy quando o nodeName for uma string', () => {
    expect(Element.is(nodeName)).toBeTruthy()
  })

  test('Deve criar um elemento quando o metodo create for executado', () => {
    expect(Element.create(nodeName)).toBeInstanceOf(Element)
  })
})
