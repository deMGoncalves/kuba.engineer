import h, { Fragment } from '@kuba/h'
import image from './image.svg'

function component () {
  return (
    <>
      <meta property='og:image' content={image} />
      <meta property='twitter:image' content={image} />
    </>
  )
}

export default component
