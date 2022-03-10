import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px, 20px;
  max-width: 480px;
  margin: 0 auto;
`
export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`
export const Loader = styled.span`
  text-align: center;
  display: block;
`
export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`
