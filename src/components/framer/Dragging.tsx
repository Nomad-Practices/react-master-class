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
   drag: {
      // color 값을 rgb나 rgba로 전달해야 color transition이 부여된다!!
      backgroundColor: 'rgb(253, 203, 110)',
      transition: {
         duration: 10,
      },
   },
}

function Dragging() {
   return (
      <Wrapper>
         {/**
          * motion 컴포넌트에 drag를 활성화할 때는 drag라는 props만 전달하면 끝난다~
          */}
         <Box
            drag
            variants={boxVariants}
            whileHover="hover"
            whileTap="tap"
            whileDrag="drag"
         />
      </Wrapper>
   )
}

export default Dragging
