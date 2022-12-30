import h, { render } from '@kuba/h'
import middleware from '@kuba/middleware'

function jsonld (data) {
  return middleware((instanceRef) =>
    requestIdleCallback(() =>
      render(
        document.body,
        <script type='application/ld+json'>
          {
            JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [].concat(data(instanceRef)),
              '@type': 'Schema'
            })
          }
        </script>
      )
    )
  )
}

export default jsonld
