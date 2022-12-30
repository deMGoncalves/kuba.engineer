import h, { Fragment } from '@kuba/h'
import magic from '@kuba/magic'

function component (title) {
  return (
    <>
      <title>{title[component.content]()}</title>
      <meta property='og:title' content={title[component.content]()} />
      <meta property='twitter:title' content={title[component.content]()} />
    </>
  )
}

Object.assign(component, {
  content: magic.component_content
})

export default component
