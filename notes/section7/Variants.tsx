import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

/**
 * motion 컴포넌트에 스타일을 적용할 때는 아래와 같이 컴포넌트를 정의한다.
 */
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`

/**
 * variant를 사용하면 motion 컴포넌트의 props를 하나로 정리할 수 있다.
 * transition props는 animate의 transiton property로 옮기면 된다.
 *
 * 가장 중요한 점은, variants의 interface는 부모 motion -> 자식 motion으로 상속된다는 점이다.
 * 따라서 상속된 variants의 interface에 맞춰 자식 motion의 variants를 정의한 뒤에 variants만 전달하면 된다.
 *
 * 부모 motion에서 자식 motion의 transition을 제어할 수 있다.
 * transition / delayChildren
 * -> (첫번째) 자식 motion의 animation delay를 지정한다.
 * transition / staggerChildren
 * -> 자식 motion들의 animation 간의 시차를 지정한다.
 */
const boxVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

const circleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

/**
 * motion 컴포넌트의 중요한 props들
 * initial : animation 시작 전 초기상태
 * animate : 컴포넌트 mount + update 될 때, animation 정의
 * exit : 컴포넌트의 unmount 될 때, animation 정의
 * transition: animation의 한 state에서 다른 state로의 변환방식 정의
 */
function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="initial" animate="animate">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  )
}

export default App
