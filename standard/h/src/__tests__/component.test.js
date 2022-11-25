import Component from '../component'

describe('standard.h.component', () => {
  let nodeName

  beforeEach(() => {
    nodeName = jest.fn()
  })

  test('Retorna truthy quando o nodeName for uma function', () => {
    expect(Component.is(nodeName)).toBeTruthy()
  })

  test('Deve executar o component quando o metodo execute for executado', () => {
    Component.execute(nodeName, {}, [])

    expect(nodeName).toHaveBeenCalledTimes(1)
    expect(nodeName).toHaveBeenCalledWith({}, [])
  })
})
