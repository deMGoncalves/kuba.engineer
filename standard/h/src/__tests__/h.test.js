import h from '../h'

describe('standard.h', () => {
  it('Deve criar um elemento html quando a funcao h for executado', () => {
    const element = h('div')

    expect(element).toBeInstanceOf(HTMLElement)
    expect(element.nodeName).toBe('DIV')
  })

  it('Deve criar um elemento html com seus atributos quando a funcao h for executado', () => {
    const element = h('div', { id: 'kuba' })
    expect(element.getAttribute('id')).toBe('kuba')
  })
})
