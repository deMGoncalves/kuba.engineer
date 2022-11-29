import Fragment, { Fragment as TFragment } from '../fragment'

describe('standard.h.fragment', () => {
  test('Cria um fragmento', () => {
    expect(Fragment({}, [])).toBeInstanceOf(TFragment)
  })
})
