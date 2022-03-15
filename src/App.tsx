import Router from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/styled/common'
import { darkTheme, lightTheme } from './theme'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { isDarkAtom } from './atoms'

function App() {
   const [isDark, setIsdark] = useRecoilState(isDarkAtom)
   function toggleTheme() {
      setIsdark((prev) => !prev)
   }
   return (
      <>
         <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <button onClick={toggleTheme}>Toggle Mode</button>
            <GlobalStyle />
            <Router />
         </ThemeProvider>
      </>
   )
}

export default App
