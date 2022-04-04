import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`

interface IBoxProps {
  bgColor?: string
}

const Box = styled.div<IBoxProps>`
  background-color: ${(props) => props.bgColor ?? 'black'};
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  color: white;
`

function App() {
  return (
    <Father>
      <Box bgColor="tomato" />
      <Box bgColor="teal" />
      <Box>
        <Text>Hello World</Text>
      </Box>
    </Father>
  )
}

export default App
