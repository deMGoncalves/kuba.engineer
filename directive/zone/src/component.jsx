import './style'
import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import magic from '@kuba/magic'
import Show from '@kuba/show'

function component (zone, children) {
  return (
    <>
      <Show data-when={zone[component.onView]()}>{children}</Show>
      <Hide data-when={zone[component.onView]()}>
        <div className={['zone', zone.className]} />
      </Hide>
    </>
  )
}

Object.assign(component, {
  onView: magic.component_onView
})

export default component
