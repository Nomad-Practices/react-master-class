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
  initial: (custom: boolean) => ({
    x: custom ? 500 : -500,
    opacity: 0,
    scale: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (custom: boolean) => ({
    x: custom ? -500 : 500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
}

function App() {
  const [visible, setVisible] = useState(0)
  const [direction, setDirection] = useState(true)
  function nextPlease() {
    setVisible((prev) => (prev + 1) % 10)
    setDirection(true)
  }
  function prevPlease() {
    setVisible((prev) => (prev === 0 ? 9 : prev - 1))
    setDirection(false)
  }
  return (
    <Wrapper>
      {/**
       * exitBeforeEnter props를 사용하면 unmount되는 motion 컴포넌트의 exit가 종료된 뒤에서야 새로운 motion 컴포넌트의 initial이 실행된다.
       * 없다면 exit와 initial이 동시에 발생한다
       */}
      <AnimatePresence custom={direction} exitBeforeEnter>
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
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
        )} */}
        {/**
         * React 컴포넌트의 key props만 다르게 한다면 새롭게 rendering되는, 전혀 다른 컴포넌트가 된다.
         * 따라서 조건부 list rendering에 굳이 배열이 필요하지 않다~
         *
         * 컴포넌트의 variants를 동적으로 제어할 때는 custom props를 사용한다.
         * => 여기서 AnimatePresence 컴포넌트에도 동일하게 전달해야 한다!!
         * => 또한 개별 variant는 custom props 값을 인자, 객체를 반환하는 함수여야 한다.
         * => 개별 컴포넌트 별로 animation에 방향성을 부여하는 것처럼 부가적인 기능을 부여할 수 있다!!
         *
         */}
        <Box
          key={visible}
          variants={boxVariants}
          initial="initial"
          animate="animate"
          custom={direction}
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={() => nextPlease()}>next</button>
      <button onClick={() => prevPlease()}>prev</button>
    </Wrapper>
  )
}

export default App
