import { useParams } from 'react-router-dom'

function Detail() {
  const { coinId } = useParams()
  return <h1>Detail view for {coinId}</h1>
}

export default Detail
