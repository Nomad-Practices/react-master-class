import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
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
   border-radius: 40px;
`
const DragArea = styled.div`
   width: 600px;
   height: 600px;
   background-color: rgba(255, 255, 255, 0.4);
   border-radius: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   /* overflow: hidden; */
`
const boxVariants: Variants = {
   hover: {
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
   const dragAreaRef = useRef<HTMLDivElement>(null)
   return (
      <Wrapper>
         <DragArea ref={dragAreaRef}>
            {/**
             * motion 컴포넌트에 drag를 활성화할 때는 drag라는 props만 전달하면 끝난다~
             * drag가 가능한 영역의 크기를 설정할 때는 dragConstraints의 top/bottom/left/right를 지정하면 된다.
             *
             * 여기서 특정 컴포넌트의 경계를 dragArea로 설정할 때는 해당 컴포넌트의 ref를 dragContraints props로 전달하면 된다.
             * 즉, 경계 바깥까지 drag하고 마우스를 놓으면 dragArea에 접하도록 이동한다는 것이다.
             *
             * drag 이후 원래 위치로 돌아오게 만들려면 dragSnapToOrigin props를 전달하면 된다.
             *
             * dragArea 바깥까지 얼마나 이동할 수 있을지 설정하는 것은 dropElastic에 0 ~ 1 수를 주면된다.
             */}
            <Box
               drag
               dragSnapToOrigin
               dragElastic={1}
               variants={boxVariants}
               whileHover="hover"
               whileTap="tap"
               whileDrag="drag"
               dragConstraints={dragAreaRef}
            />
         </DragArea>
      </Wrapper>
   )
}

export default Dragging
