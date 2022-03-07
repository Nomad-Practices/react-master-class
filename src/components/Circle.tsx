import styled from 'styled-components'

/**
 * optional property는 아래와 같이 '?'를 붙이면 된다.
 */
interface ICircleProps {
  bgColor: string
  borderColor?: string
  text?: string
}

interface IContainerProps {
  bgColor: string
  borderColor: string
}

/**
 * styled component의 props의 interface는 generic type에 사용된다.
 */
const Container = styled.div<IContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 3px dashed ${(props) => props.borderColor};
`

/**
 * 아래와 같이 컴포넌트가 받을 수 있는 props의 interface를 정의하여 parameter에 사용한다.
 *
 * 기존의 React PropTypes는 앱 실행 후에 전달된 prope들의 유효성을 검사하는 반면
 * typescript interface로 prop type을 정의하면 앱을 실행하기 전에 prop의 유효성을 검사할 수 있어서
 * 디버깅 용이성 + type inference에 의한 개발경험 향상 효과를 가진다.
 *
 * interface의 default property는 2가지 방법으로 전달할 수 있다.
 * (1) object destructuring에서 default value를 지정한다.
 * (2) Nullish coalescing operator (??)를 사용하여 블럭 내부에서 지정한다.
 * => 함수의 parameter는 가급적이면 interface를 사용할 수 있는 객체로 전달하는 것이 나을 것 같다.
 */
function Circle({ bgColor, borderColor, text = '' }: ICircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'black'}>
      {text}
    </Container>
  )
}

export default Circle
