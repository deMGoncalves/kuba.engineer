import magic from '@kuba/magic'

function data (master) {
  return {
    '@id': '#webmaster',
    '@type': 'Webmaster',
    description: master[data.description](),
    name: master[data.title](),
    potentialAction: {
      '@id': '#searchaction'
    },
    publisher: {
      '@id': '#organization'
    },
    url: master[data.url]()
  }
}

Object.assign(data, {
  description: magic.data_description,
  title: magic.data_title,
  url: magic.data_url
})

export default data
