import h, { didMount, didUpdate, Fragment, paint, render, repaint } from '@kuba/h'
import styled from '@kuba/styled'

styled`
  strong {
    color: red;
    font-size: ${'24px'};
  }
`

function WC (props, children) {
  return (
    <div>
      <div>{children.test}</div>
      {children}
    </div>
  )
}

const component = (props) => (
  <WC>
    <input value={props.value} onClick={() => props.onClick()} />
    <strong data-key='' data-slot='test'>:@</strong>
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
