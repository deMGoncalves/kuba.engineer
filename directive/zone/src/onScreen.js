import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const onScreen = middleware((instanceRef) => {
  override(instanceRef, magic.didMount, function (args, next) {
    const element = instanceRef[onScreen.element]()
    const listener = () => (
      (element.getBoundingClientRect().top <= (window.innerHeight * 1.618)) && (
        window.removeEventListener('scroll', listener),
        instanceRef[onScreen.render]()
      )
    )

    window.addEventListener('scroll', listener)
    window.dispatchEvent(new Event('scroll'))

    return next(...args)
  })
})

Object.assign(onScreen, {
  element: magic.onScreen_element,
  render: magic.onScreen_render
})

export default onScreen
