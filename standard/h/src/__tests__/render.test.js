import render from '../render'

describe('standard.h.render', () => {
  let element
  let node

  beforeEach(() => {
    element = {
      [render.paint]: jest.fn().mockReturnValue(HTMLElement)
    }

    node = {
      append: jest.fn()
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Apenda o HTMLElement retornado do contrato render.paint no element', () => {
    render(node, element)

    expect(element[render.paint]).toHaveBeenCalledTimes(1)

    expect(node.append).toHaveBeenCalledTimes(1)
    expect(node.append).toHaveBeenCalledWith(HTMLElement)
  })
})
