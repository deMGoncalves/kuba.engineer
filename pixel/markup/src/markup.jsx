import Alternate from './alternate'
import Author from './author'
import Base from './base'
import Canonical from './canonical'
import Card from './card'
import Charset from './charset'
import Cps from './cps'
import Description from './description'
import h, { Fragment, render } from '@kuba/h'
import Icon from './icon'
import Image from './image'
import Preconnect from './preconnect'
import Robots from './robots'
import ThemeColor from './themeColor'
import Title from './title'
import Type from './type'
import Url from './url'
import Viewport from './viewport'

render(
  document.head,
  <>
    <Alternate />
    <Author />
    <Base />
    <Canonical />
    <Card />
    <Charset />
    <Cps />
    <Description />
    <Icon />
    <Image />
    <Preconnect />
    <Robots />
    <ThemeColor />
    <Title />
    <Type />
    <Url />
    <Viewport />
  </>
)
