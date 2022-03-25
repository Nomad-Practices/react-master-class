import { motion, useMotionValue, Variants } from 'framer-motion'
import { useEffect } from 'react'
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
   border-radius: 15px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

function Scroll() {
   /**
    * motion 컴포넌트의 animation을 tracking하여 실시간 값을 얻고 싶다면 motionValue를 이용하면 된다.
    *
    * 신기하게도, motionValue는 React 컴포넌트의 local state가 아니기 때문에(즉, 컴포넌트 life-cycle을 따르지 않기 때문에)
    * motionValue값이 달라지면서 컴포넌트의 re-rendering은 발생하지 않는다. 아마 빈도수가 어마무시하기 때문이 아닐까 생각한다.
    * tracking하기 위해서는 MotionValue를 컴포넌트의 style로 전달하면 된다.
    *
    * tracking하는 MotionValue의 값을 read/write할 때는 get/set 메서드를 사용하고
    * MotionValue 값의 변화를 감지하기 위한 hook으로 onChange 메서드를 사용하면 된다.
    * => 사용자가 직접 animation을 조작할 수 있다는 의미~
    */
   const x = useMotionValue(0)
   useEffect(() => {
      x.onChange(() => console.log(x.get()))
   }, [x])
   return (
      <Wrapper>
         <button
            onClick={() => {
               x.set(200)
            }}
         >
            click me
         </button>
         <Box drag="x" dragSnapToOrigin style={{ x }} />
      </Wrapper>
   )
}

export default Scroll
