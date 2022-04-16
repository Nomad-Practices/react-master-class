type Nullable<T> = T | null

interface IResult {
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

export interface INowPlaying {
  page: number
  results: IResult[]
  dates: IDates
  total_pages: number
  total_results: number
}

interface IGenre {
  id: number
  name: string
}

export interface ILatest {
  adult: boolean
  backdrop_path: Nullable<string>
  belongs_to_collection: null
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: Nullable<string>
  production_companies: object[]
  production_countries: object[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: object[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ITopRated {
  page: number
  results: IResult[]
  total_results: number
  total_pages: number
}

export interface IUpcoming {
  page: number
  results: IResult[]
  dates: IDates
  total_results: number
  total_pages: number
}
