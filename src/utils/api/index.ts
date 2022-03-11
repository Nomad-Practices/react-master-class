import axios from 'axios'
import { ICoin } from '../../types/models'
import { IInfo, IPrice } from '../../types/models'

const BASE_URL = 'https://api.coinpaprika.com/v1'

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
