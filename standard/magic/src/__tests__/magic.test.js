import magic from '../magic'

describe('standard.magic', () => {
  let dunder

  beforeEach(() => {
    dunder = magic.__method__
  })

  test.todo('Cria um simbolo usando o key como identificador')

  test('Retorna a mesma referencia uma vez que o simbolo tenha cido criado', () => {
    expect(dunder).toBe(magic.__method__)
  })
})
