import { Nullable } from './index'

export interface IResult {
  poster_path: Nullable<string>
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: Nullable<string>
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

interface IDates {
  maximum: string
  minimum: string
}

interface IGenre {
  id: number
  name: string
}

/**
 * banner에 사용할 예정
 */
export interface ILatest extends Omit<IResult, 'genre_ids'> {
  belongs_to_collection: null
  budget: number
  genres: IGenre[]
  homepage: string
  imdb_id: string
  production_companies: object[]
  production_countries: object[]
  revenue: number
  runtime: number
  spoken_languages: object[]
  status: string
  tagline: string
}

export interface INowPlaying {
  page: number
  results: IResult[]
  dates: IDates
  total_pages: number
  total_results: number
}

export interface ITopRated {
  page: number
  results: IResult[]
  total_results: number
  total_pages: number
}

export interface IUpcoming extends ITopRated {}
export interface IMvSearchResults extends ITopRated {}
