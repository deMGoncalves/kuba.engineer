import h from '@kuba/h'

function component () {
  return (
    <link rel='alternate' href={`https://${location.host}${location.pathname}`} hrefLang='x-default' />
  )
}

export default component
