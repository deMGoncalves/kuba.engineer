import router from '@kuba/router'

router('/', () => console.log('home'))
router('/.*', () => console.log('404'))
