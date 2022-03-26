import { motion, AnimatePresence, Variants } from 'framer-motion'
import styled from 'styled-components'
import { useState } from 'react'

const Wrapper = styled(motion.div)`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(135deg, rgb(255, 221, 89), rgb(255, 63, 52));
`
const Box = styled(motion.div)`
   width: 400px;
   height: 200px;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 40px;
   position: absolute;
   top: 100px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const boxVariants: Variants = {
   initial: {
      opacity: 0,
      scale: 0,
   },
   animate: {
      opacity: 1,
      scale: 1,
      rotateZ: 360,
   },
   exit: {
      opacity: 0,
      scale: 0,
   },
}

function Disappear() {
   const [showing, setShowing] = useState(false)
   function onClick() {
      setShowing((prev) => !prev)
   }
   return (
      <Wrapper>
         <button onClick={onClick}>click me</button>
         {/**
          * React 컴포넌트가 React tree에 사리지기까지 animation은 AnimatePresense 컴포넌트를 사용하면 된다.
          * AnimatePresence는 언제나 visible여야 하고 내부 컴포넌트는 conditional rendering으로 구현해야 한다.
          *
          * 내부 컴포넌트는 initial animate 말고도 exit props를 가지는데, 이는 해당 motion 컴포넌트가 unmount되기 전의 스타일을 정의할 수 있다.
          */}
         <AnimatePresence>
            {showing && (
               <Box
                  variants={boxVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
               />
            )}
         </AnimatePresence>
      </Wrapper>
   )
}

export default Disappear
