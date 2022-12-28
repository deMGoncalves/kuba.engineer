import magic from '@kuba/magic'
import middleware from '@kuba/middleware'
import override from '@kuba/override'

const onScreen = middleware((instanceRef) => {
  override(instanceRef, magic.didMount, function (args, next) {
    const element = instanceRef[onScreen.element]()
    const listener = () => (
      (element.getBoundingClientRect().top - window.innerHeight) <= (window.innerHeight * 0.2) && (
        window.removeEventListener('scroll', listener),
        instanceRef[onScreen.render]()
      )
    )

    window.addEventListener('scroll', listener)
    window.dispatchEvent(new Event('scroll'))

    return next.apply(this, args)
  })
})

Object.assign(onScreen, {
  element: magic.onScreen_element,
  render: magic.onScreen_render
})

export default onScreen
