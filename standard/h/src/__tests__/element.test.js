import element from '../element'

describe('standard.h.element', () => {
  test('Deve retornar truthy quando o nodeName for uma string', () => {
    expect(element.is('div')).toBeTruthy()
  })

  test.todo('Deve criar um elemento quando o metodo create for executado')
})
