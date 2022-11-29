import Fragment, { Fragment as DFragment } from '../fragment'
import render from '../render'

describe('standard.h.fragment', () => {
  test('Cria um fragmento', () => {
    expect(Fragment({}, [])).toBeInstanceOf(DFragment)
  })

  test('Cria um DocumentFragment', () => {
    const createDocumentFragment = jest.spyOn(document, 'createDocumentFragment')

    const fragment = Fragment({}, [])
    const node = fragment[render.paint]()

    expect(node).toBeInstanceOf(DocumentFragment)
    expect(createDocumentFragment).toHaveBeenCalledTimes(1)
  })
})
