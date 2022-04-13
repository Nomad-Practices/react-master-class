import styled from 'styled-components'
import { motion } from 'framer-motion'

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
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

/**
 * motion 컴포넌트의 중요한 props들
 * initial : animation 시작 전 초기상태
 * animate : animation 정의
 * exit : 컴포넌트가 unmount될 때 수행할 animation 정의
 * transition: animation의 한 state에서 다른 state로의 변환방식 정의
 */
function App() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotateZ: 360,
          transition: { duration: 1 },
        }}
        transition={{
          type: 'tween',
        }}
      />
    </Wrapper>
  )
}

export default App
