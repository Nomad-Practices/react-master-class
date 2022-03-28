import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Tv from './routes/Tv'
import Search from './routes/Search'
import GlobalLayout from './layout/GlobalLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route path="" element={<Home />} />
          <Route path="tv" element={<Tv />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
