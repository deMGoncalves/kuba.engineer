import h from '../h'

describe('standard.h', () => {
  let attrs
  let element
  let tagName

  beforeEach(() => {
    tagName = 'DIV'
    attrs = {
      id: 'kuba',
      className: 'kuba__div'
    }
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

  it('Deve criar o className com o valor kuba__div', () => {
    expect(element.getAttribute('className')).not.toBe(attrs.className)
    expect(element.className).toBe(attrs.className)
  })
})
