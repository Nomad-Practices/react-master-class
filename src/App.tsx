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
  flex-direction: column;
`

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 100px;
`

const boxVariants: Variants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
}

function App() {
  const [visible, setVisible] = useState(0)
  function nextPlease() {
    setVisible((prev) => (prev + 1) % 10)
  }
  function prevPlease() {
    setVisible((prev) => (prev === 0 ? 9 : prev - 1))
  }
  return (
    <Wrapper>
      <AnimatePresence>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
          (n) =>
            n == visible && (
              <Box
                key={n}
                variants={boxVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {n}
              </Box>
            )
        )}
      </AnimatePresence>
      <button onClick={() => nextPlease()}>next</button>
      <button onClick={() => prevPlease()}>prev</button>
    </Wrapper>
  )
}

export default App
