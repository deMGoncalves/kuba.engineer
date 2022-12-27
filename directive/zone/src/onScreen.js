import magic from '@kuba/magic'
import middleware from '@kuba/middleware'

const { didMount } = magic

const onScreen = middleware((instanceRef) => {
  const next = instanceRef[didMount]
  Object.assign(instanceRef, {
    [didMount] () {
      const element = instanceRef[onScreen.element]()
      const offScreen = () => {
        (element.getBoundingClientRect().top - window.innerHeight) <= (window.innerHeight * 0.2) && (
          window.removeEventListener('scroll', offScreen),
          instanceRef[onScreen.render]()
        )
      }

      window.addEventListener('scroll', offScreen)
      offScreen()
      next?.()
    }
  })
})

Object.assign(onScreen, {
  element: magic.onScreen_element,
  render: magic.onScreen_render
})

export default onScreen
