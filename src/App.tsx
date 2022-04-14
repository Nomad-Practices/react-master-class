import styled from 'styled-components'
import {
  motion,
  useMotionValue,
  Variants,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

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
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const Svg = styled.svg`
  width: 300px;
  height: 300px;
`

/**
 * 특정 style property에 적용할 animation은 다음과 같이 transition 안에 default 값과 함께 지정하면 된다.
 */
const pathVariants: Variants = {
  initial: {
    fill: 'rgba(255, 255, 255, 0)',
    stroke: 'white',
    pathLength: 0,
    strokeWidth: 2,
    d: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z',
  },
  animate: {
    fill: 'rgba(255, 255, 255, 1)',
    pathLength: 1,
    transition: {
      default: {
        duration: 3,
      },
      fill: {
        duration: 5,
        delay: 3,
      },
    },
  },
}
/**
 * 진행 중인 animation과 관련된 수치를 추적할 때는 useMotionValue hook을 사용하면 된다.
 * 여기서 useMotionValue의 반환된 데이터는 컴포넌트 render cycle을 따르지 않는다.
 * -> 즉, 컴포넌트 state가 아니다
 */

function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
        />
      </Svg>
    </Wrapper>
  )
}

export default App
