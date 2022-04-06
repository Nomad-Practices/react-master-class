import axios from 'axios'

const BASE_URL = 'https://api.coinpaprika.com/v1'

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
