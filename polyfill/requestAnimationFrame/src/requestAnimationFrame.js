export default (functionRef) => (
  'requestAnimationFrame' in this
    ? requestAnimationFrame(functionRef)
    : setTimeout(functionRef, 0)
)
