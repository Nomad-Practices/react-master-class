import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { darkTheme, lightTheme } from './theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

/**
 * styled components로 앱의 테마를 ThemeProvider로 구현할 수 있다.
 */
ReactDOM.render(
  <React.StrictMode>
    {/**
     * react-helmet을 사용하면 컴포넌트 내에서 index.html의 <head></head> 안의 tag를 편집할 수 있다!
     * title, favicon, link 등등...
     */}
    <HelmetProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={darkTheme}>
            <App />
          </ThemeProvider>
          {/**
           * ReactQueryDevTools => cache에 저장된 query들과 응답 데이터를 확인할 수 있는 devTool
           */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
