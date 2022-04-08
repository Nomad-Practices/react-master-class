import { useCoinId } from '../routes/Detail'
import { useQuery } from 'react-query'
import { fetchOhclvHistorical } from '../api'

type Nullable<T> = T | null

interface IHistory {
  time_open: string
  time_close: string
  open: Nullable<number>
  high: Nullable<number>
  low: Nullable<number>
  close: Nullable<number>
  volume: Nullable<number>
  market_cap: Nullable<number>
}

function Chart() {
  const { coinId = '' } = useCoinId()
  const { isLoading, data } = useQuery<IHistory>(
    ['coin', 'detail', coinId, 'chart'],
    () => fetchOhclvHistorical(coinId)
  )
  return <h1>Chart</h1>
}

export default Chart
