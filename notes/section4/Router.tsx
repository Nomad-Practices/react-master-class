import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalLayout from './layout/GlobalLayout'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Price from './components/Price'
import Chart from './components/Chart'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route path="" element={<Home />} />
          <Route path=":coinId" element={<Detail />}>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
