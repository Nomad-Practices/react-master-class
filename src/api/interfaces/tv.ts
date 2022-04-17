import { Nullable } from './index'

interface IGenre {
  id: number
  name: string
}

interface INetwork {
  id: number
  name: string
}

interface ISeason {
  air_date: string
  episode_count: number
  id: number
  poster_path: Nullable<string>
  season_number: number
}

export interface IResult {
  poster_path: Nullable<string>
  popularity: string
  id: number
  backdrop_path: Nullable<string>
  vote_average: number
  overview: string
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

/**
 * banner에 사용할 예정
 */
export interface ILatest extends Omit<IResult, 'genre_ids'> {
  created_by: object[]
  episode_run_time: number[]
  genres: IGenre[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  networks: INetwork[]
  number_of_episodes: number
  number_of_seasons: number
  production_companies: object[]
  seasons: ISeason[]
  status: string
  type: string
}

export interface IAiring {
  page: number
  results: IResult[]
  total_results: number
  total_pages: number
}

export interface IPopular extends IAiring {}
export interface ITopRated extends IAiring {}
