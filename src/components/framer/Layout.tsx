import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: linear-gradient(135deg, rgb(255, 221, 89), rgb(255, 63, 52));
`
const Box = styled.div`
   width: 400px;
   height: 400px;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 20px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
   display: flex;
   /* align-items: center;
   justify-content: center; */
   font-size: 28px;
   position: absolute;
`
const Circle = styled(motion.div)`
   background-color: #48dbfb;
   width: 100px;
   height: 100px;
   border-radius: 50px;
`

function Layout() {
   const [clicked, setClicked] = useState(false)
   function toggleClicked() {
      setClicked((prev) => !prev)
   }
   return (
      <Wrapper onClick={toggleClicked}>
         <Box
            style={{
               justifyContent: clicked ? 'center' : 'flex-start',
               alignItems: clicked ? 'center' : 'flex-start',
            }}
         >
            {/**
             * CSS에 의해서 컴포넌트 내부 layout(정렬)의 변화로 위치가 바뀌는 motion 컴포넌트에 animation을 적용할 때는
             * layout props를 true로 전달하기만 하면 된다.
             */}
            <Circle layout />
         </Box>
      </Wrapper>
   )
}

export default Layout
