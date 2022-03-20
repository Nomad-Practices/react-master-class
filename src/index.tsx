import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { darkTheme, lightTheme } from './theme'
import Router from './Router'
import { GlobalStyle } from './components/styled/common'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <RecoilRoot>
         <QueryClientProvider client={queryClient}>
            <HelmetProvider>
               <ThemeProvider theme={darkTheme}>
                  <GlobalStyle />
                  <Router />
                  <App />
               </ThemeProvider>
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={true} />
         </QueryClientProvider>
      </RecoilRoot>
   </React.StrictMode>,
   document.getElementById('root')
)
