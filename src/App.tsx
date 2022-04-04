import styled, { keyframes } from 'styled-components'

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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
`

/**
 * styled 컴포넌트에서 html tag에 명시할 attr들은 아래와 같이 객체로 받을 수 있다.
 */
const Input = styled.input.attrs({
  required: true,
  maxLength: 10,
})`
  background-color: blue;
`

/**
 * CSS animation w/ keyframes
 */
const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(3600deg);
    border-radius: 0px;
  }
`

/**
 * SCSS  방식의 css selector 적용하기
 */
const Cabinet = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 5s linear infinite;
  span {
    font-size: 40px;
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`

function App() {
  return (
    <>
      <Father>
        <Box bgColor="teal" />
        <Box>
          <Text>Hello World</Text>
        </Box>
        <Circle bgColor="yellow" />
      </Father>
      <Btn>Button</Btn>
      {/**
       * 기존 styled 컴포넌트의 style은 그대로 유지한채 html tag만 변경할 때는 as props를 사용한다.
       */}
      <Btn as="a" href="#none">
        Link
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Cabinet>
        <span>😵‍💫</span>
      </Cabinet>
    </>
  )
}

export default App
