import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle` 
  ${reset}
  :root {
    --color-neutral-050: #FFFFFF;
    --color-neutral-100: #FAFAFA;
    --color-neutral-200: #F5F5F5;
    --color-neutral-300: #EEEEEE;
    --color-neutral-400: #DDDDDD;
    --color-neutral-500: #999999;
    --color-neutral-600: #777777;
    --color-neutral-700: #666666;
    --color-neutral-800: #444444;
    --color-neutral-900: #222222;

    --color-green: #3D8E33;
    --color-green-light: #17AD49;

    --color-red: #E23D28;
    --color-red-light: #FFEAEE;
  }

  body {
    font-family: "Pretendard", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    width: 360px;
    margin: 0 auto;
  }


`

export default GlobalStyles
