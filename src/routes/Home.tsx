import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Header, Loader, Title } from '../components/styled/common'
import { CoinList, Coin, Image } from '../components/styled/home'

interface ICoin {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

function Home() {
  const [coins, setCoins] = useState<Array<ICoin>>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios({
          baseURL: 'https://api.coinpaprika.com/v1',
          url: '/coins',
          method: 'get',
        })
        setCoins(data.slice(0, 100))
        setLoading(false)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])
  return (
    <Container>
      <Header>
        <Title>All Coins</Title>
      </Header>
      <CoinList>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          coins.map((c) => (
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
