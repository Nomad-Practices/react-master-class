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

function Home() {
  const [coins, setCoins] = useState<ICoinInfo[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('https://api.coinpaprika.com/v1/coins')
      setCoins(data.slice(0, 20))
    })()
  }, [])
  return (
    <CoinsList>
      {coins.map((c) => (
        <Coin key={c.id}>
          {/**
           * Link를 통해 navigate되었을 때 전달할 데이터는 state props로 전달할 수 있다.
           * 하지만 Link를 클릭해야 state가 생성되기 때문에 navigation 목적지 url에 바로 접속하게 되면 state는 정의되지 않는다!!
           */}
          <Link to={`/${c.id}`} state={{ name: c.name }}>
            {c.name} &rarr;
          </Link>
        </Coin>
      ))}
    </CoinsList>
  )
}

export default Home
