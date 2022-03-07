import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'

const darkTheme = {
  textColor: 'whitesmoke',
  backgroundColor: '#111',
}

const lightTheme = {
  textColor: '#111',
  backgroundColor: 'whitesmoke',
}

ReactDOM.render(
  <React.StrictMode>
    {/**
     * React 앱에 전반적인 theme을 적용할 때는 styled components의 ThemeProvider 컴포넌트를 사용하면 된다.
     * 하위 컴포넌트들에게 적용할 theme 정보를 담은 객체는 theme이라는 props로 전달한다.
     * ThemeProvider가 App 컴포넌트를 wrapping하기 때문에 theme props는 App 하위 컴포넌트들에서 접근할 수 있다.
     * 여기서 주의할 점은, 적용할 theme의 Object는 동일한 interface를 가져야 한다는 것~
     */}
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
