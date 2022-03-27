import { motion, AnimatePresence, Variants } from 'framer-motion'
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
const Box = styled(motion.div)`
   width: 100px;
   height: 100px;
   background-color: rgba(255, 255, 255, 1);
   border-radius: 40px;
   top: 100px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 28px;
   position: absolute;
`

const boxVariants: Variants = {
   initial: {
      x: 500,
      opacity: 0,
      scale: 0,
   },
   animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
         duration: 1,
      },
   },
   exit: {
      x: -500,
      opacity: 0,
      scale: 0,
      transition: {
         duration: 1,
      },
   },
}

function Slider() {
   const [visible, setVisible] = useState(0)
   function nextPlease() {
      setVisible((prev) => (prev + 1) % 10)
   }
   return (
      <Wrapper>
         <AnimatePresence>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
               (n) =>
                  n === visible && (
                     <Box
                        variants={boxVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={n}
                     >
                        {n}
                     </Box>
                  )
            )}
         </AnimatePresence>
         <button onClick={nextPlease}>next</button>
      </Wrapper>
   )
}

export default Slider
