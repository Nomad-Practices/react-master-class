import axios from 'axios'

const BASE_URL = 'https://api.coinpaprika.com/v1'
const WEEK_TO_SECONDS = 60 * 60 * 24 * 7

export async function fetchAllCoins(maxLimits: number) {
  const { data } = await axios.get(`${BASE_URL}/coins`)
  return data.slice(0, maxLimits)
}

export async function fetchCoinDtl(coinId: string) {
  const { data } = await axios.get(`${BASE_URL}/coins/${coinId}`)
  return data
}

export async function fetchCoinPrice(coinId: string) {
  const { data } = await axios.get(`${BASE_URL}/tickers/${coinId}`)
  return data
}

export async function fetchOhclvHistorical(coinId: string) {
  const end = Math.floor(Date.now() / 1000)
  const start = end - WEEK_TO_SECONDS * 2
  const { data } = await axios.get(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical`,
    {
      params: {
        start,
        end,
      },
    }
  )
  return data
}
