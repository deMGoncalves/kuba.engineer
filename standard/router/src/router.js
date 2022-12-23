import * as f from '@kuba/f'
import params from './params'
import urlFor from './urlFor'

function router (url, functionRef) {
  urlFor.push(functionRef.name, url)

  if (router.pageFound) return

  const query = new RegExp(`^${url.replace(/:\w+/g, '([a-z0-9-_]+)')}$`, 'i')
  const keys = new RegExp(`^${url.replace(/(?<variable>:)\w+/g, '$1([a-z0-9-_]+)')}$`, 'i')

  if (!query.test(location.pathname)) return

  Object.assign(
    params,
    Object.fromEntries(
      f.zip(
        keys.exec(url)?.slice(1),
        query.exec(location.pathname)?.slice(1)
      )
    )
  )

  functionRef()
  Reflect.set(router, 'pageFound', true)
}

Object.assign(router, {
  pageFound: false
})

export default router
