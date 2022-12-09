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

  test.todo('Atributo attributes eh uma referencia de Attributes')
  test.todo('Atributo children eh uma referencia de Children')
  test.todo('Atributo className eh uma referencia de ClassName')
  test.todo('Atributo events eh uma referencia de Events')
  test.todo('Atributo nodeName eh o nome do elemento')
  test.todo('Adiciona um evento no node')
  test.todo('Adiciona um novo node ao lado do node')
  test.todo('Adiciona todos os filhos no node')
  test.todo('Adiciona um novo filho no node')
  test.todo('Remove o node do DOM')
  test.todo('Remove um atributo do node')
  test.todo('Remove a className do node')

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
