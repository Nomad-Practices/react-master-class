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
   initial: (custom: number) => ({
      x: 500 * custom,
      opacity: 0,
      scale: 0,
   }),
   animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.3,
      },
   },
   exit: (custom: number) => ({
      x: -500 * custom,
      opacity: 0,
      scale: 0,
      transition: {
         duration: 0.3,
      },
   }),
}

function Slider() {
   const [visible, setVisible] = useState(0)
   const [direction, setDirection] = useState(1)
   function nextPlease() {
      setDirection(1)
      setVisible((prev) => (prev + 1) % 10)
   }
   function prevPlease() {
      setDirection(-1)
      setVisible((prev) => (prev ? (prev - 1) % 10 : 9))
   }
   return (
      <Wrapper>
         <AnimatePresence exitBeforeEnter custom={direction}>
            {/**
             * motion animation에 방향성을 부여할 때는 motion 컴포넌트에 custom props를 사용하면 된다.
             * custom props로 전달된 값은 motion 컴포넌트의 Variants의 method parameter로 전달된다.
             * 그럼 전달된 값을 이용하여 variants를 동적으로 변형시킬 수 있게 된다~~
             *
             * 여기서 AnimatePresence 컴포넌트에도 동일한 custom props를 전달해야 한다.
             *
             * 추가적으로 한 motion 컴포넌트 exit animation이 종료된 이후에 다음 motion 컴포넌트의 initial + animate를 실행할 때는
             * AnimatePresence의 exitBeforeEnter props를 true로 전달하면 된다.
             *
             * 참고로 React에서 컴포넌트로 전달된 key props(React.key)는 해당 컴포넌트에 부여되는 default id로 사용된다.
             * 즉, 동일한 타입의 컴포넌트라도 key props만 바꾸면 바꾸기 전 컴포넌트가 React Tree에서 사라지고 바꾼 후 컴포넌트가 렌더링된다.
             */}
            <Box
               custom={direction}
               variants={boxVariants}
               initial="initial"
               animate="animate"
               exit="exit"
               key={visible}
            >
               {visible}
            </Box>
         </AnimatePresence>
         <button onClick={nextPlease}>next</button>
         <button onClick={prevPlease}>prev</button>
      </Wrapper>
   )
}

export default Slider
