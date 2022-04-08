import {
  Outlet,
  useLocation,
  useParams,
  Link,
  useMatch,
} from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { fetchCoinDtl, fetchCoinPrice } from '../api'
import { useOutletContext } from 'react-router-dom'

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`
const Description = styled.p`
  margin: 20px 0px;
`
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`

function Detail() {
  const { coinId } = useParams()
  const { state } = useLocation() as ILinkState
  const chartMatch = useMatch('/:coinId/chart')
  const priceMatch = useMatch('/:coinId/price')
  /**
   * state가 정의되지 않는 경우를 대비하여 nullish colescing을 사용한다.
   */
  const { isLoading: isDtlLoading, data: coinDtl } = useQuery<ICoinDtl>(
    ['coin', 'detail', coinId],
    () => fetchCoinDtl(coinId ?? '')
  )

  const { isLoading: isPriceLoading, data: coinPrice } = useQuery<ICoinPrice>(
    ['coin', 'price', coinId],
    () => fetchCoinPrice(coinId ?? '')
  )
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{coinDtl?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>${coinDtl?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Open Source:</span>
          <span>{coinDtl?.open_source ? 'Yes' : 'No'}</span>
        </OverviewItem>
      </Overview>
      <Description>{coinDtl?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Suply:</span>
          <span>{coinPrice?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Supply:</span>
          <span>{coinPrice?.max_supply}</span>
        </OverviewItem>
      </Overview>
      <Tabs>
        <Tab isActive={!!chartMatch}>
          <Link to={`/${coinId}/chart`}>Chart</Link>
        </Tab>
        <Tab isActive={!!priceMatch}>
          <Link to={`/${coinId}/price`}>Price</Link>
        </Tab>
      </Tabs>
      <Outlet context={{ coinId }} />
    </>
  )
}

export default Detail

export function useCoinId() {
  type TContext = { coinId?: string }
  return useOutletContext<TContext>()
}
