import Fragment from '../fragment'
import render from '../render'

describe('standard.h.fragment', () => {
  let createDocumentFragment
  let fragment

  beforeEach(() => {
    createDocumentFragment = jest.spyOn(document, 'createDocumentFragment')
    fragment = Fragment({}, [])
  })

  test.todo('Atributo children eh uma referencia a instancia de Children')
  test.todo('Os metodos appendChild e after executa o metodo after do ultimo child')

  test('Contrato render.flow cria um DocumentFragment', () => {
    const node = fragment[render.flow]()

    expect(node).toBeInstanceOf(DocumentFragment)
    expect(createDocumentFragment).toHaveBeenCalledTimes(1)
  })
})
