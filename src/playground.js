import router from '@kuba/router'

router('/', () => console.log('home'))
router('/:id', () => console.log('id'))
router('/.*', () => console.log('404'))
