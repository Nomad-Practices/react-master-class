import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Tv from './routes/Tv'
import Search from './routes/Search'
import GlobalLayout from './layout/GlobalLayout'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route path="" element={<Home />} />
          <Route path="movie/Related_movies/:id" element={<Search />} />
          <Route path="movie/:sliderNm/:id" element={<Home />} />
          <Route path="tv" element={<Tv />} />
          <Route path="tv/Related_shows/:id" element={<Search />} />
          <Route path="tv/:sliderNm/:id" element={<Tv />} />
          <Route path="search" element={<Search />} />
          <Route
            path="react-master-class"
            element={<Navigate to="/" replace={true} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
