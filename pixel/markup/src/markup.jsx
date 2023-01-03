import Alternate from './alternate'
import Author from './author'
import Base from './base'
import Charset from './charset'
import Cps from './cps'
import Description from './description'
import h, { Fragment, render } from '@kuba/h'
import Icon from './icon'
import Preconnect from './preconnect'
import ThemeColor from './themeColor'
import Title from './title'
import Viewport from './viewport'

render(
  document.head,
  <>
    <Alternate />
    <Author />
    <Base />
    <Charset />
    <Cps />
    <Description />
    <Icon />
    <Preconnect />
    <ThemeColor />
    <Title />
    <Viewport />
  </>
)
