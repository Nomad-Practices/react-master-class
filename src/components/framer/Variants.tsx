import { motion, Variants } from 'framer-motion'
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
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   background-color: rgba(255, 255, 255, 0.2);
   border-radius: 40px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Circle = styled(motion.div)`
   background-color: white;
   width: 70px;
   height: 70px;
   place-self: center;
   border-radius: 35px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

/**
 * framer motion으로 구현할 animation을 단계별로 정의한 js 객체를 Variant라고 한다.
 * variants를 사용하면 motion component에 적용할 props를 간결하게 전달할 수 있다.
 *
 */
const boxVariants: Variants = {
   start: {
      opacity: 0,
      scale: 0.5,
   },
   end: {
      opacity: 1,
      scale: 1,
      transition: {
         type: 'spring',
         duration: 0.5,
         bounce: 0.5,
         delayChildren: 0.2,
         staggerChildren: 0.1,
      },
   },
}

const circleVariants: Variants = {
   start: {
      opacity: 0,
      y: 10,
   },
   end: {
      opacity: 1,
      y: 0,
   },
}

function Vvariants() {
   return (
      <Wrapper>
         <Box variants={boxVariants} initial="start" animate="end">
            {/**
             * motion이 적용된 컴포넌트의 variants와 관련 props syntax는 default로 motion이 적용된 자식 컴포넌트로 복사된다.
             * 따라서 motion이 적용된 자식 컴포넌트는 부모 컴포넌트와 동일한 interface를 가진 variants를 가져야 한다.
             * 이미 아래에서는 <Circle variants={circleVariants} initial="start" animate="end"/>로 동작한다는 의미~
             */}
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
            <Circle variants={circleVariants} />
         </Box>
      </Wrapper>
   )
}

export default Vvariants
