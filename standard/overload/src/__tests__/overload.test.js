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

  test('Executa o metodo A quando os metodos apendados (X, Y e Z) forem executados', () => {
    const methodA = jest.spyOn(Sparring.prototype, 'methodA')
    const sparring = new Sparring()

    sparring.methodX()
    sparring.methodY()
    sparring.methodZ()
    sparring.methodA()

    expect(methodA).toHaveBeenCalledTimes(4)
  })
})
