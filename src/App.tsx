import styled from 'styled-components'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'

/**
 * motion 컴포넌트에 스타일을 적용할 때는 아래와 같이 컴포넌트를 정의한다.
 */
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
}

function App() {
  const [show, setShow] = useState(false)
  return (
    <Wrapper>
      <button onClick={() => setShow((prev) => !prev)}>click</button>
      {/**
       * motion 컴포넌트가 React tree로부터 unmount되는 동안 animation을 정의할 수 있다.
       * 추가적으로 exit라는 props를 전달해야 한다,
       */}
      <AnimatePresence>
        {show && (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default App
