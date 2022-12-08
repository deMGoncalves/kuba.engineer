import magic from '@kuba/magic'
import repaint from './repaint'

class Reflow {
  static get add () {
    return magic.add
  }

  static get different () {
    return magic.different
  }

  static get remove () {
    return magic.remove
  }

  static get replace () {
    return magic.replace
  }

  static #zip (collection, nCollection) {
    collection = [...collection]
    nCollection = [...nCollection]
    const n = Math.max(collection.length, nCollection.length)
    const zip = Array(n).fill(null).map((_, i) => [collection[i], nCollection[i]])
    return zip
  }

  static match (collection, nCollection) {
    Reflow
      .#zip(collection, nCollection)
      .forEach(([item, nItem]) => {
        if (!item && nItem) collection[Reflow.add](nItem)
        if (item && !nItem) collection[Reflow.remove](item)
        if (item[Reflow.different](nItem)) collection[Reflow.replace](item, nItem)
        item[repaint.reflow]?.(nItem)
      })
    return Reflow
  }
}

export default Reflow
