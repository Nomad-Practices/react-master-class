import {
   useParams,
   useLocation,
   Outlet,
   Link,
   useMatch,
} from 'react-router-dom'
import { Container, Header, Loader, Title } from '../components/styled/common'
import {
   Overview,
   OverviewItem,
   Description,
   Tab,
   Tabs,
} from '../components/styled/detail'
import { useQuery } from 'react-query'
import { getInfoById, getPriceById } from '../utils/api'
import { Helmet } from 'react-helmet-async'

interface ILocationState {
   name: string
}

function Detail() {
   const { coinId } = useParams()
   /**
    * useQuery 내부 queryFn에 위치하는 함수는 가급적이면 아래와 같은 형식으로 적자
    * 또한 query별 caching을 수행하기 위해서는 queryId는 겹치면 안된다.
    * 특이하게도 react query에서 queryId는 하나의 string 또는 string[]이라는 점 잊지말자~
    */
   const { isLoading: isInfoLoading, data: info } = useQuery(
      ['coins', coinId],
      () => getInfoById(coinId!)
   )
   const { isLoading: isPriceLoading, data: price } = useQuery(
      ['tickers', coinId],
      () => getPriceById(coinId!),
      {
         refetchInterval: 5000,
      }
   )
   /**
    * useLocation hook으로 현재 페이지의 Location 객체에 접근할 수 있고 여기서 Link의 state props를 확인할 수 있다.
    *
    * Link state props를 사용하면 사용자 입장에서 API 호출을 기다릴 필요없이 간단한 데이터는 바로 렌더링에 사용하여 UX를 높일 수는 있지만,
    * state를 생성하려면 특정 페이지로부터 이동해야 하기 때문에 목적지 페이지로 바로 접속하면 state props가 null이 될 수 있다는 점을 유의하자.
    *
    * state를 사용하되 optional property 또는 destructuring default value를 설정하여 default state props나 state property를  만들도록 하자~
    */
   const { state } = useLocation()
   /**
    * useMatch hook은 현재 route가 특정 route pattern을 만족하는지 여부를 확인한다.
    * 만일 일치하지 않는다면 null을 반환한다.
    */
   const priceMatch = useMatch('/:coinId/price')
   const chartMatch = useMatch('/:coinId/chart')
   const isLoading = isInfoLoading || isPriceLoading

   return (
      <Container>
         {/**
          * React-Helmet을 사용하면 document head에 작성할 html tag들을 바로 전달할 수 있다.
          * 그래서 title뿐만 아니라 favicon, css도 컴포넌트 단에서 지정할 수 있다.
          */}
         <Helmet>
            <title>{(state as ILocationState)?.name ?? info?.name}</title>
         </Helmet>
         <Header>
            <Title>
               {isLoading ? (
                  <Loader>Loading...</Loader>
               ) : (
                  (state as ILocationState)?.name ?? info?.name
               )}
            </Title>
         </Header>
         {isLoading ? (
            <Loader>Loading...</Loader>
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
                     <span>Price:</span>
                     <span>${price?.quotes?.USD?.price?.toFixed(3)}</span>
                  </OverviewItem>
               </Overview>
               <Description>{info?.description}</Description>
               <Overview>
                  <OverviewItem>
                     <span>Total Suply:</span>
                     <span>{price?.total_supply}</span>
                  </OverviewItem>
                  <OverviewItem>
                     <span>Max Supply:</span>
                     <span>{price?.max_supply}</span>
                  </OverviewItem>
               </Overview>
               {/**
                * nested route에서 child component가 렌더링될 위치는 react-router-dom의 Outlet 컴포넌트로 표시하면 된다.
                */}
               <Tabs>
                  <Tab isActive={chartMatch !== null}>
                     <Link to={`/${coinId}/chart`}>Chart</Link>
                  </Tab>
                  <Tab isActive={priceMatch !== null}>
                     <Link to={`/${coinId}/price`}>Price</Link>
                  </Tab>
               </Tabs>
               <Outlet context={{ coinId }} />
            </>
         )}
      </Container>
   )
}

export default Detail
