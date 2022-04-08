import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { fetchAllCoins } from '../api'
import { Helmet } from 'react-helmet-async'

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
  /**
   * react-query를 사용하면 api 호출완료와 응답 데이터를 한번에 얻을 수 있다.
   * 특정 id를 가진 query에 대한 응답은 브라우저 캐시에 저장하기 때문에 재호출의 빈도수를 확! 줄일 수 있다~
   * 물론 cache에 있을 시간은 한정적이기 때문에 아마 일정 시간 뒤에 다시 요청한다.
   *
   * query별 id(key)는 string[]로 표현하면 된다.
   */
  const { isLoading, data: coins } = useQuery<ICoinInfo[]>(
    ['coin', 'all'],
    () => fetchAllCoins(20)
  )
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <CoinsList>
        {coins?.map((c) => (
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
    </>
  )
}

export default Home
