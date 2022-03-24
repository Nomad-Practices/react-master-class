import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './components/styled'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <RecoilRoot>
         <QueryClientProvider client={queryClient}>
            <HelmetProvider>
               <ThemeProvider theme={theme}>
                  <App />
                  <GlobalStyle />
               </ThemeProvider>
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={true} />
         </QueryClientProvider>
      </RecoilRoot>
   </React.StrictMode>,
   document.getElementById('root')
)
