import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`
/**
 * styled component에 framer motion animation을 적용할 때, 아래와 같이 작성한다.
 */
const Box = styled(motion.div)`
   width: 200px;
   height: 200px;
   background-color: white;
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

function App() {
   return (
      <Wrapper>
         <Box
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotateZ: 360 }}
            transition={{ type: 'spring', duration: 1 }}
         />
      </Wrapper>
   )
}

export default App
