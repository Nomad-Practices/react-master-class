import { useLocation } from 'react-router-dom'

function Search() {
  /**
   * 현재 route에 대한 정보를 얻을 때는 react-router의 useLocation을 사용한다.
   */
  const location = useLocation()
  /**
   * url query string을 parsing하기 위한 web API util~!!
   */
  const query = new URLSearchParams(location.search)
  console.log(query.get('keyword'))
  return null
}

export default Search
