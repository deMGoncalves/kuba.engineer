import * as f from '@kuba/f'
import h, { render } from '@kuba/h'

export default (strings, ...expressions) => {
  const textContent = f.zip(strings, expressions).flat(Infinity).join('')
  render(
    document.head,
    <style>{textContent}</style>
  )
}
