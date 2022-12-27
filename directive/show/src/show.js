function show (props, children) {
  return props['data-when'] ? children : []
}

export default show
