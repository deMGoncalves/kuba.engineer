import h, { didMount, didUpdate, Fragment, paint, render, repaint } from '@kuba/h'

function WC (props, children) {
  return (
    <div>
      <span>{children.test}</span>
      {children}
    </div>
  )
}

const component = (props) => (
  <WC>
    <strong data-key='' data-slot='test'>:@</strong>
    <input value={props.value} onClick={() => props.onClick()} />
  </WC>
)

@paint(component)
class Contador {
  #value = 0

  get value () {
    return this.#value
  }

  @didMount
  mount () {
    console.log('Contator.mount')
    return this
  }

  @didUpdate
  update () {
    console.log('Contator.update')
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
