import h, { didMount, didUpdate, Fragment, paint, render, repaint } from '@kuba/h'

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

  @didMount
  mount () {
    return this
  }

  @didUpdate
  update () {
    return this
  }

  @repaint
  onClick () {
    this.#value += 1
    return this
  }
}

render(
  document.body,
  <Contador />
)
