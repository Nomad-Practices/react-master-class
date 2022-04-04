import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`

interface IBoxProps {
  bgColor?: string
}
/**
 * template에서 전달한 props를 통해 styled 컴포넌트 configure하는 방법
 */
const Box = styled.div<IBoxProps>`
  background-color: ${(props) => props.bgColor ?? 'black'};
  width: 100px;
  height: 100px;
`

const Text = styled.span`
  color: white;
`
/**
 * 기존 styled 컴포넌트로부터 extend하는 방법
 */
const Circle = styled(Box)`
  border-radius: 50px;
`
function App() {
  return (
    <Father>
      <Box bgColor="tomato" />
      <Box bgColor="teal" />
      <Box>
        <Text>Hello World</Text>
      </Box>
      <Circle bgColor="yellow" />
    </Father>
  )
}

export default App
