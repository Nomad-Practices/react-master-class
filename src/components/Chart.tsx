import { useCoinId } from '../routes/Detail'
import { useQuery } from 'react-query'
import { fetchOhclvHistorical } from '../api'
import ApexChart, { Props } from 'react-apexcharts'
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
  const { isLoading, data = [] } = useQuery<IHistory[]>(
    ['coin', 'detail', coinId, 'chart'],
    () => fetchOhclvHistorical(coinId),
    {
      refetchInterval: 10000,
    }
  )
  const chartProps: Props = {
    type: 'line',
    series: [
      { name: 'close', data: isLoading ? [] : data.map((d) => d.close) },
    ],
    options: {
      theme: {
        mode: 'dark',
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      chart: {
        toolbar: {
          show: false,
        },
        background: 'transparent',
      },
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        type: 'datetime',
        categories: data.map((d) => d.time_close),
      },
      yaxis: {
        show: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['blue'],
          stops: [0, 100],
        },
      },
      colors: ['red'],
      tooltip: {
        y: {
          formatter(value) {
            return `$${value.toFixed(2)}`
          },
        },
      },
    },
  }

  return <ApexChart {...chartProps} />
}
export default Chart
