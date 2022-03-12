import { useQuery } from 'react-query'
import { useOutletContext } from 'react-router-dom'
import { IOutletCtxt } from '../types/models'
import { getHistoryById } from '../utils/api'
import ApexChart, { Props } from 'react-apexcharts'

function Chart() {
   const { coinId } = useOutletContext<IOutletCtxt>()
   const { isLoading, data: history } = useQuery(['history', coinId], () =>
      getHistoryById(coinId)
   )
   const ApexChartProps: Props = {
      options: {
         chart: {
            type: 'line',
            width: 500,
            height: 500,
            toolbar: {
               show: false,
            },
         },
         stroke: {
            show: true,
            curve: 'smooth',
            width: 3,
         },
         grid: {
            show: false,
         },
         fill: {
            type: 'gradient',
            gradient: {
               gradientToColors: ['blue'],
            },
            colors: ['#1A73E8', '#B32824'],
         },
         theme: {
            mode: 'dark',
         },
         tooltip: {
            y: {
               formatter: (val) => `$${val.toFixed(3)}`,
            },
         },
         xaxis: {
            categories: history?.map((p) => p.time_close),
            type: 'datetime',
         },
         yaxis: {
            show: false,
         },
      },
      series: [
         {
            name: 'Price',
            data: history?.map((p) => p.close)!,
         },
      ],
   }
   return (
      <div>
         {isLoading ? 'Loading chart...' : <ApexChart {...ApexChartProps} />}
      </div>
   )
}

export default Chart
