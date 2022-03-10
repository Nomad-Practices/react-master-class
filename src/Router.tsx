import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Price from './routes/Price'
import Chart from './routes/Chart'

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/:coinId" element={<Detail />}>
               {/**
                * 이 부분이 nested routes를 구현하는 방법으로 Vue와 비슷하다.
                */}
               <Route path={`price`} element={<Price />} />
               <Route path={`chart`} element={<Chart />} />
            </Route>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router
