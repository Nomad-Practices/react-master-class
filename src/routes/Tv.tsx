import styled from 'styled-components'
import { useQuery } from 'react-query'
import { useApi } from '../api'
import {
  ILatestTv,
  IAiringTv,
  ITopRatedTv,
  IPopularTv,
} from '../api/interfaces'
import { Loader } from '../components/MvSlider/styled'
import { makeImagePath } from '../utils/'
import TvSlider from '../components/TvSlider'

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

function Tv() {
  const { data, isLoading } = useQuery(
    ['movies', 'latest'],
    useApi<Partial<ILatestTv>>('/tv/latest'),
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
            <Title>{data?.name ?? 'Title'}</Title>
            <Overview>{data?.overview ?? 'Overview'}</Overview>
          </Banner>
        )}
        <TvSlider
          queryId="tv/Airing"
          queryFn={useApi<Partial<IAiringTv>>('/tv/airing_today')}
        />
        <TvSlider
          queryId="tv/Top_Rated"
          queryFn={useApi<Partial<ITopRatedTv>>('/tv/top_rated')}
        />
        <TvSlider
          queryId="tv/Upcoming"
          queryFn={useApi<Partial<IPopularTv>>('/tv/popular')}
        />
      </Wrapper>
    </>
  )
}

export default Tv
