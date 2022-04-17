import axios, { AxiosRequestConfig } from 'axios'

const API_KEY = '29d98fbcec98f1a8bcaa1f270b92b641'
const BASE_URL = 'https://api.themoviedb.org/3'

export function useApi<T>(path: string, params?: object) {
  const url = BASE_URL + path
  const config: AxiosRequestConfig = {
    params: {
      ...params,
      api_key: API_KEY,
    },
  }
  async function fetchApi<U extends T>(): Promise<U> {
    const { data } = await axios.get(url, config)
    return data
  }
  return fetchApi
}

// export const getMovies = useApi<Partial<INowPlayingMv>>('/movie/now_playing')
// export const getLatestMovies = useApi<Partial<ILatestMv>>('/movie/latest')
// export const getTopRatedMovies =
//   useApi<Partial<ITopRatedMv>>('/movie/top_rated')
// export const getUpcomingMovies = useApi<Partial<IUpcomingMv>>('/movie/upcoming')

// export const getLatestShows = useApi<Partial<ILatestTv>>('/tv/latest')
// export const getAiringShows = useApi<Partial<IAiringTv>>('/tv/airing_today')
// export const getPopularShows = useApi<Partial<IPopularTv>>('/tv/popular')
// export const getTopRatedShows = useApi<Partial<ITopRatedTv>>('/tv/top_rated')
