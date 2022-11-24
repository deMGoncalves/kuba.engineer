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

  test('Deve criar um leemento do tipo HTMLElement', () => {
    expect(element).toBeInstanceOf(HTMLElement)
  })

  test('Deve criar um elemento com o nodeName DIV', () => {
    expect(element.nodeName).toBe(tagName)
  })

  test('Deve criar o atributo id com o valor kuba', () => {
    expect(element.getAttribute('id')).toBe(attrs.id)
  })

  test.skip('Deve criar o className com o valor kuba__div', () => {
    expect(element.getAttribute('className')).not.toBe(attrs.className)
    expect(element.className).toBe(attrs.className)
  })
})
