export type {
  ILatest as ILatestMv,
  INowPlaying as INowPlayingMv,
  ITopRated as ITopRatedMv,
  IUpcoming as IUpcomingMv,
  IResult as IResultMv,
} from './movie'

export type {
  ILatest as ILatestTv,
  IAiring as IAiringTv,
  IPopular as IPopularTv,
  ITopRated as ITopRatedTv,
  IResult as IResultTv,
} from './tv'

export type Nullable<T> = T | null
