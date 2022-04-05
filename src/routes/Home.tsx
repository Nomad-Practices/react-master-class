import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface ICoinInfo {
  id: string
  name: string
  symbol: string
  rank: number
  is_new: boolean
  is_active: boolean
  type: string
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinsList = styled.ul``

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.backgroundColor};
  border-radius: 15px;
  margin-bottom: 10px;
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
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`

function Home() {
  const [coins, setCoins] = useState<ICoinInfo[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('https://api.coinpaprika.com/v1/coins')
      setCoins(data.slice(0, 20))
    })()
  }, [])
  return (
    <Container>
      <Header>
        <Title>Home</Title>
      </Header>
      <CoinsList>
        {coins.map((c) => (
          <Coin key={c.id}>
            <Link to={`/${c.id}`}>{c.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
    </Container>
  )
}

export default Home
