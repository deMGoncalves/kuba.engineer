import overload from '../overload'

describe('standard.overload', () => {
  test('Cria metodos que apontam para o metodo alvo', () => {
    const defineProperty = jest.spyOn(Object, 'defineProperty')
    const args = ['keyA', 'keyB']

    overload(...args)({}, '')
    expect(defineProperty).toHaveBeenCalledTimes(2)
  })
})
