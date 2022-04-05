import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

interface ILinkState {
  state: {
    name?: string
  }
}

interface ICoinDtl {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
  description: string
  message: string
  open_source: boolean
  started_at: string
  development_status: string
  hardware_wallet: boolean
  proof_type: string
  org_structure: string
  hash_algorithm: string
  first_data_at: string
  last_data_at: string
}

interface ICoinPrice {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: string
  last_updated: string
  quotes: {
    USD: {
      ath_date: string
      ath_price: number
      market_cap: number
      market_cap_change_24h: number
      percent_change_1h: number
      percent_change_1y: number
      percent_change_6h: number
      percent_change_7d: number
      percent_change_12h: number
      percent_change_15m: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_30m: number
      percent_from_price_ath: number
      price: number
      volume_24h: number
      volume_24h_change_24h: number
    }
  }
}
function Detail() {
  const { coinId } = useParams()
  const [coinDtl, setCoinDtl] = useState({} as ICoinDtl)
  const [coinPrice, setCoinPrice] = useState({} as ICoinPrice)

  const { state } = useLocation() as ILinkState
  /**
   * state가 정의되지 않는 경우를 대비하여 nullish colescing을 사용한다.
   */
  useEffect(() => {
    ;(async () => {
      const { data: dtlInfo } = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      )
      const { data: priceInfo } = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      )
      setCoinDtl(dtlInfo)
      setCoinPrice(priceInfo)
    })()
  }, [])
  return <h1>{state?.name ?? 'Loading...'}</h1>
}

export default Detail
