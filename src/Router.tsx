import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Price from './routes/Price'
import Chart from './routes/Chart'
import Login from './routes/Login'
import Layout from './routes/Layout'
import TodoList from './routes/TodoList'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/**
         * 이 부분이 nested routes를 구현하는 방법으로 Vue와 비슷하다.
         */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<TodoList />} />
          <Route path=":coinId" element={<Detail />}>
            <Route path={`price`} element={<Price />} />
            <Route path={`chart`} element={<Chart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
