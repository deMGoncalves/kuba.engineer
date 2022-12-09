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

  test('Contrato render.flow cria um HTMLElement e executa o mesmo contrato em suas dependencias', () => {
    const element = Element.create(nodeName, {}, [])
    const node = element[render.flow]()

    expect(node).toBeInstanceOf(HTMLElement)
    expect(node.nodeName).toBe(nodeName)

    expect(createElement).toHaveBeenCalledTimes(1)
    expect(createElement).toHaveBeenCalledWith(nodeName, { is: {} })
  })

  test('Metodo estatico is valida se o nodeName eh um Element', () => {
    expect(Element.is(nodeName)).toBeTruthy()
  })

  test('Metodo estatico create cria uma instancia de Element', () => {
    expect(Element.create(nodeName, {}, [])).toBeInstanceOf(Element)
  })
})
