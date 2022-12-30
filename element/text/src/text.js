import { color, family, size, weight } from '@kuba/polished'
import styled from '@kuba/styled'

const text = new Proxy({}, {
  get: (_target, key) =>
    styled[key]`
      color: ${color};
      font-family: ${family};
      font-size: ${size};
      font-weight: ${weight};
      letter-spacing: 0.618px;
      line-height: var(--line-height-default);
    `
})

export default text
