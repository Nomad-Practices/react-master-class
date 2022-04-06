import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

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
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`

function GlobalLayout() {
  return (
    <>
      <Container>
        <Header>
          <Title>Crypto Currency</Title>
        </Header>
        <Outlet />
      </Container>
    </>
  )
}

export default GlobalLayout