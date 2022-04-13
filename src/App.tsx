import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

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

const boxVariants: Variants = {
  whileHover: {
    scale: 1.5,
    rotateZ: 90,
  },
  whileTap: {
    borderRadius: '100px',
    scale: 1,
  },
  whileDrag: {
    backgroundColor: 'rgba(46, 204, 113,1.0)',
    transition: {
      duration: 10,
    },
  },
}

/**
 * motion 컴포넌트에 drag props를 전달하기만 하면 된다.
 * motion 컴포넌트의 color에 transition을 부여할 때는 rgba 형식으로 지정하면 된다.
 */
function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        whileDrag="whileDrag"
      />
    </Wrapper>
  )
}

export default App
