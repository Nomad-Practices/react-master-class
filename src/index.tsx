import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import { darkTheme } from './theme'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <RecoilRoot>
         <QueryClientProvider client={queryClient}>
            <HelmetProvider>
               <ThemeProvider theme={darkTheme}>
                  <App />
               </ThemeProvider>
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={true} />
         </QueryClientProvider>
      </RecoilRoot>
   </React.StrictMode>,
   document.getElementById('root')
)
