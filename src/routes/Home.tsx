import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding: 0px, 20px;
  max-width: 480px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`
const CoinList = styled.ul``
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin: 0px 5px 10px 5px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`
const Loader = styled.span`
  text-align: center;
  display: block;
`
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
              <Link to={`/${c.id}`}>{c.name} &rarr;</Link>
            </Coin>
          ))
        )}
      </CoinList>
    </Container>
  )
}

export default Home
