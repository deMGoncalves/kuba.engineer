import { paint } from '@kuba/h'
import component from './component'
import data from './data'
import jsonld from '@kuba/jsonld'

@paint(component)
@jsonld(data)
class Master {
  [data.description] () {
    return 'Simples, pequeno e imperfeito. Uma visão além da programação.'
  }

  [data.title] () {
    return 'kuba'
  }

  [data.url] () {
    return `https://${location.hostname}`
  }
}

export default Master
