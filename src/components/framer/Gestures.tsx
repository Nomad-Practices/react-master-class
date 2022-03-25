import { hover } from '@testing-library/user-event/dist/hover'
import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

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
   background-color: white;
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVariants: Variants = {
   hover: {
      scale: 1.5,
      rotateZ: 90,
   },
   tap: {
      scale: 1,
      borderRadius: '100px',
   },
}

function Gestures() {
   return (
      <Wrapper>
         {/**
          * motion이 적용된 컴포넌트가 mouse event를 감지할 때는 while~ 시작하는 gesture props를 전달하면 된다.
          */}
         <Box variants={boxVariants} whileHover="hover" whileTap="tap" />
      </Wrapper>
   )
}

export default Gestures
