function hide (props, children) {
  return props['data-when'] ? [] : children
}

export default hide
