import styled from 'styled-components'
import { motion } from 'framer-motion'
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
  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? 'center' : 'flex-start',
          alignItems: clicked ? 'center' : 'flex-start',
        }}
      >
        {/**
         * css에 의해서 특정 motion 컴포넌트의 위치가 달라지는 과정에 animation을 적용할 때는 위치가 변하는 motion 컴포넌트에 layout props를 전달한다.
         */}
        <Circle layout />
      </Box>
    </Wrapper>
  )
}

export default App
