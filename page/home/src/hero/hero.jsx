import container from '@kuba/container'
import h from '@kuba/h'
import text from '@kuba/text'

function component () {
  return (
    <container.Section>
      <text.H1 master darker lg highlight bold>kuba.engineer</text.H1>
    </container.Section>
  )
}

export default component
