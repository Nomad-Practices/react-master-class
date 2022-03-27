import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
   height: 100vh;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: linear-gradient(135deg, rgb(255, 221, 89), rgb(255, 63, 52));
`
const Box = styled.div`
   width: 300px;
   height: 300px;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 20px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 28px;
`
const Circle = styled(motion.div)`
   background-color: #48dbfb;
   width: 100px;
   height: 100px;
`

function SharedLayout() {
   const [clicked, setClicked] = useState(false)
   function toggleClicked() {
      setClicked((prev) => !prev)
   }
   return (
      <Wrapper onClick={toggleClicked}>
         <Box>
            {clicked && (
               <Circle layoutId="circle" style={{ borderRadius: 50 }} />
            )}
         </Box>
         {/**
          * 서로 다른 motion 컴포넌트들에게 동일한 layoutId props를 전달하면 각 컴포넌트의 CSS로 인한 layout 변화가 공유되어
          * 마치 하나의 컴포넌트의 animation으로 만들어준다.
          */}
         <Box>
            {!clicked && (
               <Circle
                  layoutId="circle"
                  style={{ borderRadius: 0, scale: 2 }}
               />
            )}
         </Box>
      </Wrapper>
   )
}

export default SharedLayout
