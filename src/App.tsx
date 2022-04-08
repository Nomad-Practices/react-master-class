import { darkTheme, lightTheme } from './theme'
import { useRecoilValue } from 'recoil'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Router from './Router'
import { isDarkMode } from './atoms'

/**
 *  앱 전반에 적용할 style은 createGlobalStyle을 사용하면 된다.
 */
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Raleway', sans-serif;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.accentColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`

function App() {
  const isDark = useRecoilValue(isDarkMode)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
