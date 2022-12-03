import h, { Fragment, paint, render, repaint } from '@kuba/h'

const component = (props) => (
  <>
    <button onClick={() => props.onClick()}>+</button>
    <div>{props.value}</div>
  </>
)

@paint(component)
class Contador {
  #value = 0

  get value () {
    return this.#value
  }

  @repaint
  onClick () {
    this.#value += 1
    console.log(this.#value)
    return this
  }
}

render(
  document.body,
  <Contador />
)
