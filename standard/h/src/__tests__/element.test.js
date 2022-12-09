import Element from '../element'
import render from '../render'

describe('standard.h.element', () => {
  let createElement
  let nodeName

  beforeEach(() => {
    createElement = jest.spyOn(document, 'createElement')
    nodeName = 'DIV'
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Metodo estatico is valida se o nodeName eh um Element', () => {
    expect(Element.is(nodeName)).toBeTruthy()
  })

  test('Cria um elemento', () => {
    expect(Element.create(nodeName, {}, [])).toBeInstanceOf(Element)
  })

  test('Cria um HTMLElement', () => {
    const element = Element.create(nodeName, {}, [])
    const node = element[render.flow]()

    expect(node).toBeInstanceOf(HTMLElement)
    expect(node.nodeName).toBe(nodeName)

    expect(createElement).toHaveBeenCalledTimes(1)
    expect(createElement).toHaveBeenCalledWith(nodeName, { is: {} })
  })
})
