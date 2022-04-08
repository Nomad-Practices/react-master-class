import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import ToggleBtn from '../components/Toggle'

const Container = styled.div`
  padding: 5px 20px;
  max-width: 600px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 10vh;
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
    <Container>
      <ToggleBtn />
      <Header>
        <Link to="/">
          <Title>Crypto Tracker</Title>
        </Link>
      </Header>
      <Outlet />
    </Container>
  )
}

export default GlobalLayout
