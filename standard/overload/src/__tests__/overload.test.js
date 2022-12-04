import overload from '../overload'

describe('standard.overload', () => {
  class Sparring {
    @overload(
      'methodX',
      'methodY',
      'methodZ'
    )
    methodA () {
      return this
    }
  }

  let methodA
  let sparring

  beforeEach(() => {
    methodA = jest.spyOn(Sparring.prototype, 'methodA')
    sparring = new Sparring()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Executa o metodo A quando os metodos apendados (X, Y e Z) forem executados', () => {
    sparring.methodX()
    sparring.methodY()
    sparring.methodZ()
    sparring.methodA()

    expect(methodA).toHaveBeenCalledTimes(4)
  })

  test('Parametros dos metodos (X, Y e Z) sera o mesmo para o metodo A', () => {
    sparring.methodX(1, 2, 3)

    expect(methodA).toHaveBeenCalledTimes(1)
    expect(methodA).toHaveBeenCalledWith(1, 2, 3)
  })

  test.todo('Retorno do metodo A sera o mesmo dos metodo (X, Y e Z)')
})
