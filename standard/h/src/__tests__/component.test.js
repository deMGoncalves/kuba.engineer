import Component from '../component'

describe('standard.h.component', () => {
  let nodeName

  beforeEach(() => {
    nodeName = jest.fn()
  })

  test('Deve retornar truthy quando o nodeName for uma function', () => {
    expect(Component.is(nodeName)).toBeTruthy()
  })

  test.todo('Deve executar o component quando o metodo execute for executado')
})
