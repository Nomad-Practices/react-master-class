import styled from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`
function Home() {
  return <Title>All Coins~</Title>
}

export default Home
