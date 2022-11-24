import Component from '../component'
import Element from '../element'
import h from '../h'

describe('standard.h', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Deve criar um elemento quando o nodeName for uma string', () => {
    jest.spyOn(Element, 'create')
    jest.spyOn(Element, 'is')

    h('h1', {}, 'kuba')

    expect(Element.is).toHaveBeenCalledTimes(1)
    expect(Element.is).toHaveBeenCalledWith('h1')
    expect(Element.create).toHaveBeenCalledTimes(1)
    expect(Element.create).toHaveBeenCalledWith('h1', {}, ['kuba'])
  })
})
