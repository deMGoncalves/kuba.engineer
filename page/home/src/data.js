import magic from '@kuba/magic'

function data (home) {
  return {
    '@id': '#webpage',
    '@type': 'WebPage',
    breadcrumb: {
      '@id': '#breadcrumb'
    },
    description: home[data.description](),
    inLanguage: home[data.language](),
    isPartOf: {
      '@id': '#website'
    },
    name: home[data.title](),
    url: home[data.url]()
  }
}

Object.assign(data, {
  description: magic.data_description,
  language: magic.data_language,
  title: magic.data_title,
  url: magic.data_url
})

export default data
