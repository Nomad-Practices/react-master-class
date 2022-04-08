import { useCoinId } from '../routes/Detail'
import { useQuery } from 'react-query'
import { fetchOhclvHistorical } from '../api'
import ApexChart, { Props } from 'react-apexcharts'
import { useRecoilValue } from 'recoil'
import { isDarkMode } from '../atoms'

/**
 * Vue, React에서 데이터 시각화를 할 때는 apex-chart~!!
 */
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
  const isDark = useRecoilValue(isDarkMode)
  const { isLoading, data = [] } = useQuery<IHistory[]>(
    ['coin', 'detail', coinId, 'chart'],
    () => fetchOhclvHistorical(coinId),
    {
      refetchInterval: 10000,
    }
  )

  const chartProps: Props = {
    type: 'candlestick',
    width: 600,
    series: [
      {
        name: 'candle',
        data: isLoading
          ? []
          : data.map((d) => ({
              x: d.time_open,
              y: [
                d.open?.toFixed(2),
                d.high?.toFixed(2),
                d.low?.toFixed(2),
                d.close?.toFixed(2),
              ],
            })),
      },
    ],
    options: {
      theme: {
        mode: isDark ? 'dark' : 'light',
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        show: false,
      },
      chart: {
        background: 'transparent',
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
    },
  }

  return <ApexChart {...chartProps} />
}
export default Chart
