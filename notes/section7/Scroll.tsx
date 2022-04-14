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
  height: 500vh;
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

/**
 * 진행 중인 animation과 관련된 수치를 추적할 때는 useMotionValue hook을 사용하면 된다.
 * 여기서 useMotionValue의 반환된 데이터는 컴포넌트 render cycle을 따르지 않는다.
 * -> 즉, 컴포넌트 state가 아니다
 */

function App() {
  const x = useMotionValue(0)
  /**
   * 특정 motionValue의 input을 일정 범위의 output motionValue으로 변환할 때는 useTransform hook을 사용하면 된다
   * color transform도 가능하다. 단, color 값은 rgba 형태로 작성해야 한다~~
   */
  const rotateZ = useTransform(x, [-800, 800], [360, -360])
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))',
    ]
  )
  /**
   * useViewportScroll을 사용하면 x, y 방향의 스크롤과 관련된 motionValue를 얻을 수 있다.
   */
  const { scrollY, scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 2])
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  )
}

export default App
