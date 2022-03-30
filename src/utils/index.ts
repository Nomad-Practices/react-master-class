export function makeImagePath(backdrop_path: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ?? 'original'}${backdrop_path}`
}
