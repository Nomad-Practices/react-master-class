import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0px, 20px;
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

const coins = [
  {
    id: 'btc-bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'eth-ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    is_new: false,
    is_active: true,
    type: 'coin',
  },
  {
    id: 'hex-hex',
    name: 'HEX',
    symbol: 'HEX',
    rank: 3,
    is_new: false,
    is_active: true,
    type: 'token',
  },
]

function Home() {
  return (
    <Container>
      <Header>
        <Title>All Coins</Title>
      </Header>
      <CoinList>
        {coins.map((c) => (
          <Coin key={c.id}>
            <Link to={`/${c.id}`}>{c.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  )
}

export default Home
