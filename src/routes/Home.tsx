import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useApi } from '../api'
import {
  ILatestMv,
  INowPlayingMv,
  ITopRatedMv,
  IUpcomingMv,
} from '../api/interfaces'
import { Loader } from '../components/MvSlider/styled'
import { makeImagePath } from '../utils/'
import MvSlider from '../components/MvSlider'

const Wrapper = styled.div`
  height: 200vh;
`

const Banner = styled.div<{ bgphoto: string }>`
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

function Home() {
  const { data, isLoading } = useQuery(
    ['movies', 'latest'],
    useApi<Partial<ILatestMv>>('/movie/latest'),
    {
      refetchInterval: 5000,
    }
  )

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <Banner bgphoto={makeImagePath(data?.backdrop_path ?? '')}>
            The Latest
            <Title>{data?.title ?? 'Title'}</Title>
            <Overview>{data?.overview ?? 'Overview'}</Overview>
          </Banner>
        )}
        <MvSlider
          queryId="movie/Now_Playing"
          queryFn={useApi<Partial<INowPlayingMv>>('/movie/now_playing')}
        />
        <MvSlider
          queryId="movie/Top_Rated"
          queryFn={useApi<Partial<ITopRatedMv>>('/movie/top_rated')}
        />
        <MvSlider
          queryId="movie/Upcoming"
          queryFn={useApi<Partial<IUpcomingMv>>('/movie/upcoming')}
        />
      </Wrapper>
    </>
  )
}

export default Home
