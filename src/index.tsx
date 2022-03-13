import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

ReactDOM.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <HelmetProvider>
            <App />
         </HelmetProvider>
         <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
   </React.StrictMode>,
   document.getElementById('root')
)
