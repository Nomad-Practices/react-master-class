import { useParams, useLocation, Routes, Route, Outlet } from 'react-router-dom'
import { Container, Header, Loader, Title } from '../components/styled/common'
import {
   Overview,
   OverviewItem,
   Description,
} from '../components/styled/detail'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ILocationState {
   name: string
}
interface IInfo {
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
interface IPrice {
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
   const [loading, setLoading] = useState(true)
   const [info, setInfo] = useState<IInfo>()
   const [priceInfo, setPrice] = useState<IPrice>()
   useEffect(() => {
      ;(async () => {
         try {
            const { data: infoData } = await axios({
               baseURL: 'https://api.coinpaprika.com/v1',
               url: `/coins/${coinId}`,
               method: 'get',
            })
            const { data: priceData } = await axios({
               baseURL: 'https://api.coinpaprika.com/v1',
               url: `/tickers/${coinId}`,
            })
            setInfo(infoData)
            setPrice(priceData)
            setLoading(false)
         } catch (e) {
            console.error(e)
         }
      })()
   }, [coinId])
   /**
    * useLocation hook으로 현재 페이지의 Location 객체에 접근할 수 있고 여기서 Link의 state props를 확인할 수 있다.
    *
    * Link state props를 사용하면 사용자 입장에서 API 호출을 기다릴 필요없이 간단한 데이터는 바로 렌더링에 사용하여 UX를 높일 수는 있지만,
    * state를 생성하려면 특정 페이지로부터 이동해야 하기 때문에 목적지 페이지로 바로 접속하면 state props가 null이 될 수 있다는 점을 유의하자.
    *
    * state를 사용하되 optional property 또는 destructuring default value를 설정하여 default state props나 state property를  만들도록 하자~
    */
   const { state } = useLocation()

   return (
      <Container>
         <Header>
            <Title>
               {loading
                  ? 'Loading...'
                  : (state as ILocationState)?.name ?? info?.name}
            </Title>
         </Header>
         {loading ? (
            'Loading...'
         ) : (
            <>
               {/**
                * template(jsx)에 object property를 inject할 때는 되도록 optional property를 사용하여 사소한 undefined error를 일으키지 말자!!!
                */}
               <Overview>
                  <OverviewItem>
                     <span>Rank:</span>
                     <span>{info?.rank}</span>
                  </OverviewItem>
                  <OverviewItem>
                     <span>Symbol:</span>
                     <span>${info?.symbol}</span>
                  </OverviewItem>
                  <OverviewItem>
                     <span>Open Source:</span>
                     <span>{info?.open_source ? 'Yes' : 'No'}</span>
                  </OverviewItem>
               </Overview>
               <Description>{info?.description}</Description>
               <Overview>
                  <OverviewItem>
                     <span>Total Suply:</span>
                     <span>{priceInfo?.total_supply}</span>
                  </OverviewItem>
                  <OverviewItem>
                     <span>Max Supply:</span>
                     <span>{priceInfo?.max_supply}</span>
                  </OverviewItem>
               </Overview>
               {/**
                * nested route에서 child component가 렌더링될 위치는 react-router-dom의 Outlet 컴포넌트로 표시하면 된다.
                */}
               <Outlet />
            </>
         )}
      </Container>
   )
}

export default Detail
