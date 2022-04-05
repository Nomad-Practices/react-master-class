import { useParams } from 'react-router-dom'

function Detail() {
  const { coinId } = useParams()
  return <h1>{coinId}</h1>
}

export default Detail
