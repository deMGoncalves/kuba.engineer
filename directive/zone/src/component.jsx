import './style'
import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

function component (zone, children) {
  return (
    <>
      <Show data-when={zone.onView}>{children}</Show>
      <Hide data-when={zone.onView}>
        <div className={['zone', zone.className]} />
      </Hide>
    </>
  )
}

export default component
