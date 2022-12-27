import { paint, repaint } from '@kuba/h'
import component from './component'
import onScreen from './onScreen'
import props from '@kuba/props'

@paint(component)
@props
@onScreen
class Zone {
  #onView

  get onView () {
    return (this.#onView ??= false)
  }

  [onScreen.element] () {
    const [child] = this[paint.rootAST]().children
    return child.__node__
  }

  @repaint
  [onScreen.render] () {
    this.#onView = true
    return this
  }
}

export default Zone
