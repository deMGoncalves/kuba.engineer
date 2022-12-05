import magic from '../magic'

describe('standard.magic', () => {
  let dunder
  let symbol

  beforeEach(() => {
    symbol = jest.spyOn(window, 'Symbol')
    dunder = magic.__method__
  })

  test('Cria um simbolo usando o key como identificador', () => {
    expect(symbol).toHaveBeenCalledTimes(1)
    expect(symbol).toHaveBeenCalledWith('__method__')
  })

  test('Retorna a mesma referencia uma vez que o simbolo tenha cido criado', () => {
    expect(dunder).toBe(magic.__method__)
  })
})
