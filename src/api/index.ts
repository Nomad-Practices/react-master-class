import axios, { AxiosRequestConfig } from 'axios'
import { INowPlaying } from '../model'

const API_KEY = '29d98fbcec98f1a8bcaa1f270b92b641'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function getMovies(): Promise<INowPlaying> {
  const url = `${BASE_URL}/movie/now_playing`
  const config: AxiosRequestConfig = {
    params: {
      api_key: API_KEY,
    },
  }
  const { data } = await axios.get(url, config)
  return data
}
