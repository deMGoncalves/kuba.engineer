function router (query, functionRef) {
  if (router.pageFound) return

  const path = query.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')

  pattern.test(location.pathname) && (
    functionRef(),
    Reflect.set(router, 'pageFound', true)
  )
}

Object.assign(router, {
  pageFound: false
})

export default router
