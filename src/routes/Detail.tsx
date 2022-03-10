import { useParams, useLocation } from 'react-router-dom'
import { Container, Header, Loader, Title } from '../components/styled/common'
import { useState } from 'react'

interface ILocationState {
  name: string
}

function Detail() {
  const { coinId } = useParams()
  const [loading, setLoading] = useState(true)
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
        <Title>{(state as ILocationState)?.name ?? 'Ooops...'}</Title>
      </Header>
    </Container>
  )
}

export default Detail
