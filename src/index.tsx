import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { RecoilRoot } from 'recoil'
import Router from './Router'
import { darkTheme, lightTheme } from './theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

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

/**
 * styled components로 앱의 테마를 ThemeProvider로 구현할 수 있다.
 */
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <App />
          <Router />
          <GlobalStyle />
        </ThemeProvider>
        {/**
         * ReactQueryDevTools => cache에 저장된 query들과 응답 데이터를 확인할 수 있는 devTool
         */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
