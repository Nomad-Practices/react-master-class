import styled from 'styled-components'

export const Overview = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: rgba(0, 0, 0, 0.5);
   padding: 10px 20px;
   border-radius: 10px;
`
export const OverviewItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   span:first-child {
      font-size: 10px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 5px;
   }
`
export const Description = styled.p`
   margin: 20px 0px;
`
