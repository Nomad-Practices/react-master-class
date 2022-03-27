import { motion, AnimatePresence, Variants } from 'framer-motion'
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
const Box = styled(motion.div)`
   height: 200px;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 20px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 28px;
`
const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   width: 50vw;
   gap: 10px;
   div {
      &:first-child,
      &:last-child {
         grid-column: span 2;
      }
   }
`
const Overlay = styled(motion.div)`
   width: 100%;
   height: 100%;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
`
const overlayVariants: Variants = {
   initial: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
   },
   animate: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   },
   exit: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
   },
}

function FourCards() {
   const [clicked, setClicked] = useState(false)
   function toggle() {
      setClicked((prev) => !prev)
   }
   return (
      <Wrapper onClick={toggle}>
         <Grid>
            <Box layoutId="hello" />
            <Box />
            <Box />
            <Box />
         </Grid>
         <AnimatePresence>
            {clicked && (
               <Overlay
                  variants={overlayVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
               >
                  <Box
                     style={{ width: '400px', height: '200px' }}
                     layoutId="hello"
                  />
               </Overlay>
            )}
         </AnimatePresence>
      </Wrapper>
   )
}

export default FourCards
