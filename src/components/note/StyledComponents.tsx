import styled, { keyframes } from 'styled-components'

/**
 * props를 통해서 전달된 theme 정보를 아래로 같이 적용할 수 있다.
 */
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 200px;
  background-color: ${(props) => props.theme.backgroundColor};
`

/**
 * styled component configuration은 컴포넌트 props로 구현
 * 컴포넌트 간의 스타일 중복을 방지할 수 있다.
 */
const Box = styled.div`
  background-color: 'green';
  width: 100px;
  height: 100px;
`

/**
 * styled component extension은 styled 함수로 구현한다.
 * 마치 typescript의 interface 확장하는 것처럼 이것도 역시 스타일 정의부분의 중복을 없앨 수 있다.
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

/**
 * component에 css animation을 줄 때는 styled-component의 keyframes 함수를 사용한다.
 * keyframes``의 back tick 안에서 animation 정의를 주고
 * animation 적용할 때는 keyframes 함수를 할당한 변수를 아래와 같이 template literal로 전달하면 된다.
 */
const rotationAnim = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`
const Emoji = styled.span`
  font-size: 36px;
`
const Animated = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnim} 5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /**
  styled component 내부에 특정 element를 가리키기 위한 selector는 아래와 같이 일반 css selector를 작성하면 된다.
  styled component 내부의 pseudo selector는 마치 scss에서처럼 앞에 & 기호를 붙이면 된다.
  또한 styled component 내부의 또 다른 styled component의 selector를 적용할 때는 그대로 selector target 컴포넌트를 전달하면 된다.
  */
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
  }
`

function StyledComponents() {
  return (
    <>
      <Wrapper as="header">
        <Btn>Login</Btn>
        {/**
         * styled component를 extend하지 않고 style은 유지한 채 적용 tag만 바꾸고 싶을 때는 as props를 사용한다.
         * 아래에서 props로 전달하는 값은 styled. 뒤에 위치할 유효한 HTML tag이다.
         */}
        <Btn as="a">Login</Btn>
        <Input />
      </Wrapper>
      <Animated>
        <Emoji>🤩</Emoji>
      </Animated>
    </>
  )
  return <Circle />
}

export default StyledComponents
