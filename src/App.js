import styled from 'styled-components'

const Father = styled.div`
  display: flex;
`

/**
 * styled component configuration은 컴포넌트 props로 구현
 * 컴포넌트 간의 스타일 중복을 방지할 수 있다.
 */
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`

/**
 * styled component extension은 styled 함수로 구현한다.
 * 마치 typescript의 interface 확장하여 이것도 역시 스타일 정의부분의 중복을 없앨 수 있다.
 */
const Circle = styled(Box)`
  border-radius: 50px;
`

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="red" />
    </Father>
  )
}

export default App
