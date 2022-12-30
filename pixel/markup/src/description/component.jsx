import h, { Fragment } from '@kuba/h'
import magic from '@kuba/magic'

function component (description) {
  return (
    <>
      <meta name='description' content={description[component.content]()} />
      <meta property='og:description' content={description[component.content]()} />
      <meta property='twitter:description' content={description[component.content]()} />
    </>
  )
}

Object.assign(component, {
  content: magic.component_content
})

export default component
