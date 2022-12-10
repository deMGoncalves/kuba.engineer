export default (functionRef) => (
  'requestAnimationFrame' in window
    ? requestAnimationFrame(functionRef)
    : setTimeout(functionRef, 0)
)
