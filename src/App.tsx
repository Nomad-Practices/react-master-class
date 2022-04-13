import styled from 'styled-components'
import { motion, useMotionValue, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'

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
  useEffect(() => {
    x.onChange(() => {
      console.log(x.get())
    })
  }, [x])
  return (
    <Wrapper>
      <button
        onClick={() => {
          x.set(200)
        }}
      >
        click me
      </button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  )
}

export default App
