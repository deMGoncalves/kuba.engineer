import Component from '../component'
import Element from '../element'
import h from '../h'

describe('standard.h', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Cria um elemento quando o nodeName for uma string', () => {
    jest.spyOn(Element, 'create')
    jest.spyOn(Element, 'is')

    const nodeName = 'h1'

    h(nodeName, {})

    expect(Element.is).toHaveBeenCalledTimes(1)
    expect(Element.is).toHaveBeenCalledWith(nodeName)

    expect(Element.create).toHaveBeenCalledTimes(1)
    expect(Element.create).toHaveBeenCalledWith(nodeName, {}, [])
  })

  test('Deve executar o component quando o nodeName for uma funcao', () => {
    jest.spyOn(Component, 'execute')
    jest.spyOn(Component, 'is')

    const nodeName = () => (undefined)

    h(nodeName, {})

    expect(Component.is).toHaveBeenCalledTimes(1)
    expect(Component.is).toHaveBeenCalledWith(nodeName)

    expect(Component.execute).toHaveBeenCalledTimes(1)
    expect(Component.execute).toHaveBeenCalledWith(nodeName, {}, [])
  })
})
