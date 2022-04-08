import { fetchCoinPrice } from '../api'
import { useQuery } from 'react-query'
import { useCoinId } from '../routes/Detail'
import styled from 'styled-components'

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
    [K: string]: {
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

const Container = styled.div`
  padding-top: 20px;
  width: 100%;
`
const Info = styled.span`
  font-size: 50px;
`

function Price() {
  const { coinId = '' } = useCoinId()
  /**
   * useQuery 함수의 3번째 인자인 option으로 refetchInterval을 전달하면 지정한 ms마다 api를 호출한다.
   */
  const { isLoading: isPriceLoading, data: coinPrice } = useQuery<ICoinPrice>(
    ['coin', 'price', coinId],
    () => fetchCoinPrice(coinId ?? '')
    // {
    //   refetchInterval: 5000,
    // }
  )
  return (
    <Container>
      {Object.keys(coinPrice?.quotes ?? {}).map((q) => (
        <Info>{`${q} : ${coinPrice?.quotes[q].price.toFixed(5)}`}</Info>
      ))}
    </Container>
  )
}

export default Price
