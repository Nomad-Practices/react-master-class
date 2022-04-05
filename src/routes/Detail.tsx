import { useLocation, useParams } from 'react-router-dom'

interface ILinkState {
  state: {
    name: string
  }
}

function Detail() {
  const { coinId } = useParams()
  const { state } = useLocation() as ILinkState
  /**
   * state가 정의되지 않는 경우를 대비하여 nullish colescing을 사용한다.
   */
  return <h1>{state?.name ?? 'Loading...'}</h1>
}

export default Detail
