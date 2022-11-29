import render from '../render'

describe('standard.h.render', () => {
  let element

  beforeEach(() => {
    element = {
      [render.paint]: jest.fn().mockReturnValue(HTMLElement)
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Apenda o HTMLElement retornado do contrato render.paint no element', () => {
    const append = jest.spyOn(document.body, 'append')

    render(document.body, element)

    expect(element[render.paint]).toHaveBeenCalledTimes(1)

    expect(append).toHaveBeenCalledTimes(1)
    expect(append).toHaveBeenCalledWith(HTMLElement)
  })
})
