const modifiers = [
  'bold',
  'medium',
  'regular'
]

function weight (props) {
  const modifier = modifiers.find((modifier) => props[modifier]) ?? 'medium'
  return `var(--font-weight-${modifier})`
}

export default weight
