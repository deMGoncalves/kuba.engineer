import * as f from '@kuba/f'
import params from './params'

function router (query, functionRef) {
  if (router.pageFound) return

  const paths = new RegExp(`^${query.replace(/:\w+/g, '([a-z0-9-_]+)')}$`, 'i')
  const keys = new RegExp(`^${query.replace(/(?<variable>:)\w+/g, '$1([a-z0-9-_]+)')}$`, 'i')

  if (!paths.test(location.pathname)) return

  Object.assign(
    params,
    Object.fromEntries(
      f.zip(
        keys.exec(query)?.slice(1),
        paths.exec(location.pathname)?.slice(1)
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
