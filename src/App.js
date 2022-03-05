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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`

/**
 * styled component에서는 스타일을 적용할 tag의 attr도 설정할 수 있다.
 * 그럼 해당 component들을 사용할 때, attr을 일일이 명시할 필요가 없어진다.
 */
const Input = styled.input.attrs({
  required: true,
  maxLength: 10,
})`
  background-color: Aquamarine;
  border: 0;
`

function App() {
  return (
    <Father as="header">
      <Btn>Login</Btn>
      {/**
       * styled component를 extend하지 않고 style은 유지한 채 적용 tag만 바꾸고 싶을 때는 as props를 사용한다.
       * 아래에서 props로 전달하는 값은 styled. 뒤에 위치할 유효한 HTML tag이다.
       */}
      <Btn as="a">Login</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  )
}

export default App
