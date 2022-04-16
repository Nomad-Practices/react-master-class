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
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

const overlayVariants: Variants = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  animate: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  exit: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
}

function App() {
  const [lid, setLid] = useState<number>(-1)
  /**
   * 서로 다른 컴포넌트 간의 조건부 배치가 달라질 때, 컴포넌트로 동일한 layoutId를 주면 마치 하나의 컴포넌트인 것처럼 animation이 적용된다.
   */
  return (
    <Wrapper>
      <Grid>
        {[0, 1, 3, 2].map((n) => (
          <Box key={n} layoutId={n + ''} onClick={() => setLid(n)} />
        ))}
      </Grid>
      <AnimatePresence>
        {lid % 2 === 0 && (
          <Overlay
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setLid(-1)}
          >
            <Box
              layoutId={lid + ''}
              style={{
                width: 400,
                height: 200,
                backgroundColor: 'rgba(255,255,255,1)',
              }}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default App
