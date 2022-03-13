import styled from 'styled-components'

export const CoinList = styled.ul``
export const Coin = styled.li`
   background-color: ${(props) => props.theme.cardBgColor};
   color: ${(props) => props.theme.textColor};
   margin: 0px 5px 10px 5px;
   border-radius: 15px;
   a {
      padding: 20px;
      transition: color 0.2s ease-in;
      display: flex;
      align-items: center;
   }
   &:hover {
      a {
         color: ${(props) => props.theme.accentColor};
      }
   }
`
export const Image = styled.img`
   width: 35px;
   height: 35px;
   margin-right: 10px;
`
