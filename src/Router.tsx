import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
