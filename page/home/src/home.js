import { paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'

@paint(component)
class Home {
  #description = 'Simples, pequeno e imperfeito. Uma visão além da programação.'
  #title = 'kuba'

  constructor () {
    setTitle(this.#title)
    setDescription(this.#description)
  }
}

export default Home
