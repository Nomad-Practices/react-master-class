import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Container, Header, Loader, Title } from '../components/styled/common'
import { CoinList, Coin, Image } from '../components/styled/home'
import { getAllCoins } from '../utils/api'
import { Helmet } from 'react-helmet-async'

function Home() {
   /**
    * useQuery hook을 사용하면 api 호출 + 응답 데이터 수집 + loading 여부를 한번에 얻을 수 있다~
    * 또한 useQuery는 query response caching을 제공하기 때문에 2번째 인자인 fetcher를 처음 컴포넌트 렌더링 때 한번만 실행한다는 특징이 있다
    */
   const { isLoading, data: coins } = useQuery('allCoins', getAllCoins)
   const MAX_COINS_COUNT = 100
   return (
      <Container>
         <Helmet>
            <title>All Coins~</title>
         </Helmet>
         <Header>
            <Title>All Coins</Title>
         </Header>
         <CoinList>
            {isLoading ? (
               <Loader>Loading...</Loader>
            ) : (
               coins?.slice(0, MAX_COINS_COUNT).map((c) => (
                  <Coin key={c.id}>
                     {/**
                      * react-router-dom의 Link 컴포넌트를 통해 다른 url로 navigate될 때, 목적지 페이지의 Location 객체로 state라는 props를 보낼 수 있습니다.
                      */}
                     <Link to={`/${c.id}`} state={{ name: c.name }}>
                        <Image
                           src={`https://cryptoicon-api.vercel.app/api/icon/${c.symbol.toLowerCase()}`}
                        />
                        {c.name} &rarr;
                     </Link>
                  </Coin>
               ))
            )}
         </CoinList>
      </Container>
   )
}

export default Home
