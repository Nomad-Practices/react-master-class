import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'

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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const boxVariants: Variants = {
  // whileHover: {
  //   scale: 1.5,
  //   rotateZ: 90,
  // },
  // whileTap: {
  //   borderRadius: '100px',
  //   scale: 1,
  // },
  // whileDrag: {
  //   backgroundColor: 'rgba(46, 204, 113,1.0)',
  //   transition: {
  //     duration: 10,
  //   },
  // },
}

/**
 * motion 컴포넌트에 drag props를 전달하기만 하면 된다.
 * motion 컴포넌트의 color에 transition을 부여할 때는 rgba 형식으로 지정하면 된다.
 *
 * drag props로 'x' 또는 'y'를 전달하면 수평, 수직 방향으로만 드래그를 제한할 수 있다.
 * 드래그 범위를 제한할 때는 dragConstraints props를 사용하면 된다.
 * -> 만일 특정 컴포넌트의 경계를 드래그 범위로 잡고 싶다면 해당 컴포넌트의 ref를 dragConstraints로 전달하면 된다!
 *
 * 드래그 이후 처음 위치로 되돌아가도록 만들 때는 dragSanpToOrigin props를 전달한다.
 * 드래그 대상 컴포넌트가 드래그를 따라가는 정도(?)를 제어할 때는 dragElastic props(0~1)를 전달하면 된다.
 * -> 드래그 범위를 벗어나면 마치 드래그와 반대방향으로 장력이 생기는 효과를 가진다
 */
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef}
          dragSnapToOrigin
          dragElastic={1}
          variants={boxVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          whileDrag="whileDrag"
        />
      </BiggerBox>
    </Wrapper>
  )
}

export default App
