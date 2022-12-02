import Fragment from '../fragment'
import render from '../render'

describe('standard.h.fragment', () => {
  test('Cria um DocumentFragment', () => {
    const createDocumentFragment = jest.spyOn(document, 'createDocumentFragment')

    const fragment = Fragment({}, [])
    const node = fragment[render.flow]()

    expect(node).toBeInstanceOf(DocumentFragment)
    expect(createDocumentFragment).toHaveBeenCalledTimes(1)
  })
})
