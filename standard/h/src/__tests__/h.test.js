import h from '../h'

describe('standard.h', () => {
  let attrs
  let element
  let tagName

  beforeEach(() => {
    tagName = 'DIV'
    attrs = { id: 'kuba' }
    element = h(tagName, attrs)
  })

  it('Deve criar um leemento do tipo HTMLElement', () => {
    expect(element).toBeInstanceOf(HTMLElement)
  })

  it('Deve criar um elemento com o nodeName DIV', () => {
    expect(element.nodeName).toBe(tagName)
  })

  it('Deve criar o atributo id com o valor kuba', () => {
    expect(element.getAttribute('id')).toBe(attrs.id)
  })
})
