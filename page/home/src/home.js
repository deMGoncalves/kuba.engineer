import { paint } from '@kuba/h'
import { setDescription, setTitle } from '@kuba/markup'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
class Home {
  #description = 'Simples, pequeno e imperfeito. Uma visão além da programação.'
  #title = 'kuba'

  constructor () {
    setTitle(this.#title)
    setDescription(this.#description)
  }

  [data.description] () {
    return this.#description
  }

  [data.language] () {
    return 'pt-BR'
  }

  [data.title] () {
    return this.#title
  }

  [data.url] () {
    return `https://${location.hostname}`
  }
}

export default Home
