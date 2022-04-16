type Nullable<T> = T | null

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

interface IResult {
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

export interface ILatest {
  backdrop_path: Nullable<string>
  created_by: object[]
  episode_run_time: number[]
  first_air_date: string
  genres: IGenre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  name: string
  networks: INetwork[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: Nullable<string>
  popularity: number
  poster_path: Nullable<string>
  production_companies: object[]
  seasons: ISeason[]
  status: string
  type: string
  vote_average: number
  vote_count: number
}

export interface IAiring {
  page: number
  results: IResult[]
  total_results: number
  total_pages: number
}

export interface IPopular extends IAiring {}
export interface ITopRated extends IAiring {}
