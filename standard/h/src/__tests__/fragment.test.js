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
  test.todo('Append renderiza todos os filhos e adiciona todos os filhos no node')
  test.todo('Remove executa o metodo remove de todos os filhos')
  test.todo('Replace insere o novo filho depois do filho que sera removido')
  test.todo('Contrato reflow.different compara se as instancia sao diferentes')

  test('Contrato render.flow cria um DocumentFragment', () => {
    const node = fragment[render.flow]()

    expect(node).toBeInstanceOf(DocumentFragment)
    expect(createDocumentFragment).toHaveBeenCalledTimes(1)
  })
})
