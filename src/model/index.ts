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
