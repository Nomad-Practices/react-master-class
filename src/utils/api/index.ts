import axios from 'axios'
import { ICoin } from '../../types/models'
import { IInfo, IPrice, IHistory } from '../../types/models'

const BASE_URL = 'https://api.coinpaprika.com/v1'
const DAY_MILLISEC = 60 * 60 * 24

export async function getAllCoins(): Promise<Array<ICoin>> {
   const { data } = await axios.get(`${BASE_URL}/coins`)
   return data
}

export async function getInfoById(coinId: string): Promise<IInfo> {
   const { data } = await axios.get(`${BASE_URL}/coins/${coinId}`)
   return data
}

export async function getPriceById(coinId: string): Promise<IPrice> {
   const { data } = await axios.get(`${BASE_URL}/tickers/${coinId}`)
   return data
}

export async function getHistoryById(coinId: string): Promise<Array<IHistory>> {
   const end = Math.floor(Date.now() / 1000)
   const start = end - 14 * DAY_MILLISEC
   const params = {
      start,
      end,
   }
   const { data } = await axios.get(
      `${BASE_URL}/coins/${coinId}/ohlcv/historical`,
      { params }
   )
   return data
}
