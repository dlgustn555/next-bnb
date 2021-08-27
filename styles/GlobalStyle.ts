import reset from 'styled-reset'
import { createGlobalStyle, css } from 'styled-components'
import palette from './palette'

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    /* font-family: Noto Sans, Noto Sans KR; */
    font-family: 'Nunito', sans-serif;
    color: ${palette.black};
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: ${palette.black};
  }

  #__portal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
`

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`

export default GlobalStyle
