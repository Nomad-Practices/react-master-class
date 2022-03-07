import styled from 'styled-components'

interface ICircleProps {
  bgColor: string
}

interface IContainerProps {
  bgColor: string
}

/**
 * styled component의 props의 interface는 generic type에 사용된다.
 */
const Container = styled.div<IContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`

/**
 * 아래와 같이 컴포넌트가 받을 수 있는 props의 interface를 정의하여 parameter에 사용한다.
 *
 * 기존의 React PropTypes는 앱 실행 후에 전달된 prope들의 유효성을 검사하는 반면
 * typescript interface로 prop type을 정의하면 앱을 실행하기 전에 prop의 유효성을 검사할 수 있어서
 * 디버깅 용이성 + type inference에 의한 개발경험 향상 효과를 가진다.
 */
function Circle({ bgColor }: ICircleProps) {
  return <Container bgColor={bgColor} />
}

export default Circle
