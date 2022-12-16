export default (props, children) => (
  children[props.name] ?? []
)
