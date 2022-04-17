import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MvSlider from '../components/MvSlider'
import TvSlider from '../components/TvSlider'
import { IMvSearchResults } from '../api/interfaces/movie'
import { ITvSearchResults } from '../api/interfaces/tv'
import { useApi } from '../api'

const Wrapper = styled.div`
  height: 200vh;
`
const Banner = styled.div<{ bgphoto?: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  padding-left: 60px;
`
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`
const Overview = styled.p`
  font-size: 34px;
  width: 50%;
`

function Search() {
  /**
   * 현재 route에 대한 정보를 얻을 때는 react-router의 useLocation을 사용한다.
   */
  const location = useLocation()
  /**
   * url query string을 parsing하기 위한 web API util~!!
   */
  const query = new URLSearchParams(location.search)
  const keyword = query.get('keyword') ?? ''

  return (
    <Wrapper>
      <Banner>
        <Title>Search results</Title>
      </Banner>
      <MvSlider
        queryId="movie/Related_movies"
        queryFn={useApi<Partial<IMvSearchResults>>('/search/movie', {
          query: keyword,
        })}
      />
      <TvSlider
        queryId="tv/Related_shows"
        queryFn={useApi<Partial<ITvSearchResults>>('/search/tv', {
          query: keyword,
        })}
      />
    </Wrapper>
  )
}

export default Search
