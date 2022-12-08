import magic from '@kuba/magic'
import repaint from './repaint'

function zip (rTarget, vTarget) {
  rTarget = [...rTarget]
  vTarget = [...vTarget]
  const n = Math.max(rTarget.length, vTarget.length)
  return Array(n).fill(null).map((_, i) => [rTarget[i], vTarget[i]])
}

function reflow (target) {
  zip(...arguments)
    .forEach(([real, virtual]) => {
      if (!real && virtual) target[reflow.add](virtual)
      if (real && !virtual) target[reflow.remove](real)
      if (real[reflow.different](virtual)) target[reflow.replace](real, virtual)
      real[repaint.reflow]?.(virtual)
    })
}

Object.assign(reflow, {
  add: magic.reflow_add,
  different: magic.reflow_different,
  remove: magic.reflow_remove,
  replace: magic.reflow_replace
})

export default reflow
