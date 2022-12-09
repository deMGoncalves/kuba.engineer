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
  test.todo('Troca um filho por outro novo filho')
  test.todo('Contrato reflow.different compara se as instancia sao diferentes')

  test.skip('Contrato render.flow cria um DocumentFragment e executa o mesmo contrato no children', () => {
    const node = fragment[render.flow]()

    expect(node).toBeInstanceOf(DocumentFragment)
    expect(createDocumentFragment).toHaveBeenCalledTimes(1)
  })

  test.todo('Contrato repaint.reflow executa o mesmo contrato no children')
  test.todo('Metodo estatico create cria uma instancia do Fragment')
})
