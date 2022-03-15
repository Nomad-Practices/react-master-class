import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Price from './routes/Price'
import Chart from './routes/Chart'
import TodoList from './routes/TodoList'
import Layout from './routes/Layout'

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            {/**
             * 이 부분이 nested routes를 구현하는 방법으로 Vue와 비슷하다.
             */}
            <Route path="/" element={<Layout />}>
               <Route path=":coinId" element={<Detail />}>
                  <Route path={`price`} element={<Price />} />
                  <Route path={`chart`} element={<Chart />} />
               </Route>
               <Route path="home" element={<Home />} />
               <Route path="todo" element={<TodoList />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}

export default Router
