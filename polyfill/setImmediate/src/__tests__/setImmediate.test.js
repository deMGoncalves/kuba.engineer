import setImmediate from '../setImmediate'

describe('polyfill.setImmediate', () => {
  let functionRef
  let setTimeout

  beforeEach(() => {
    functionRef = () => null
    setTimeout = jest.spyOn(window, 'setTimeout')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Executa o setTimeout com a referencia da funcao e com delay 0', () => {
    setImmediate(functionRef)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(functionRef, 0)
  })
})
