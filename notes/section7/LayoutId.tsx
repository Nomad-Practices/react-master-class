import styled from 'styled-components'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

function App() {
  const [clicked, setClicked] = useState(false)
  function toggleClicked() {
    setClicked((prev) => !prev)
  }
  /**
   * 서로 다른 컴포넌트 간의 조건부 배치가 달라질 때, 컴포넌트로 동일한 layoutId를 주면 마치 하나의 컴포넌트인 것처럼 animation이 적용된다.
   */
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked && <Circle layoutId="circle" style={{ borderRadius: 50 }} />}
      </Box>
      <Box>
        {clicked && <Circle layoutId="circle" style={{ borderRadius: 0 }} />}
      </Box>
    </Wrapper>
  )
}

export default App
