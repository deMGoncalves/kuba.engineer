import router, { params, urlFor } from '@kuba/router'

router('/', function home () { console.log('home') })
router('/:id', function user () { console.log('id', params.id) })
router('/.*', function pageNotFound () { console.log('404') })

const url = urlFor('user', { id: 'asdf' })
console.log(url)
