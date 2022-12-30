import h, { Fragment } from '@kuba/h'

function component () {
  return (
    <>
      <meta property='og:url' content={location.href} />
      <meta property='twitter:url' content={location.href} />
    </>
  )
}

export default component
