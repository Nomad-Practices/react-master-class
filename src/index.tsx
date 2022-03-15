import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <RecoilRoot>
         <QueryClientProvider client={queryClient}>
            <HelmetProvider>
               <App />
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={true} />
         </QueryClientProvider>
      </RecoilRoot>
   </React.StrictMode>,
   document.getElementById('root')
)
