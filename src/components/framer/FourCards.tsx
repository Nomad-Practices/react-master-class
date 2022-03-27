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
   const [id, setId] = useState<null | string>(null)
   return (
      <Wrapper>
         <Grid>
            {[1, 2, 3, 4].map((n) => (
               <Box
                  key={n}
                  layoutId={`box-${n}`}
                  onClick={() => setId(`box-${n}`)}
               />
            ))}
         </Grid>
         <AnimatePresence>
            {id && (
               <Overlay
                  variants={overlayVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => setId(null)}
               >
                  <Box
                     style={{ width: '400px', height: '200px' }}
                     layoutId={id}
                  />
               </Overlay>
            )}
         </AnimatePresence>
      </Wrapper>
   )
}

export default FourCards
