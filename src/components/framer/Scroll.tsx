import {
   motion,
   useMotionValue,
   useTransform,
   useViewportScroll,
} from 'framer-motion'
import { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
   height: 200vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(135deg, rgb(255, 221, 89), rgb(255, 63, 52));
`
const Box = styled(motion.div)`
   width: 100px;
   height: 100px;
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
    * MotionValue 값의 변화를 감지할 때는 onChange 메서드를 사용하면 된다.
    * => 사용자가 직접 animation을 조작할 수 있다는 의미~
    *
    * 특정 inputRange에 값이 존재하는 motionValue를 전혀 다른 outputRange에 있는 값으로 변환시킬 때는 useTransformation hook을 사용한다.
    * 여기서 inpuRange의 길이와 outputRange의 길이는 같아야 한다.
    *
    * viewPort scroll과 관련된 motionValue는 useViewportScroll hook을 사용한다.
    */
   const x = useMotionValue(0)
   const rotateZ = useTransform(x, [-800, 800], [-360, 360])
   const background = useTransform(
      x,
      [-800, 800],
      [
         'linear-gradient(135deg, rgb(253, 167, 223), rgb(181, 52, 113)',
         'linear-gradient(135deg, rgb(6, 82, 221), rgb(18, 203, 196))',
      ]
   )
   const { scrollYProgress } = useViewportScroll()
   const scale = useTransform(scrollYProgress, [0, 1], [1, 5])
   useEffect(() => {
      scrollYProgress.onChange(() =>
         console.log(scrollYProgress.get(), scrollYProgress.get())
      )
   }, [scrollYProgress])
   return (
      <Wrapper style={{ background }}>
         <Box drag="x" dragSnapToOrigin style={{ x, rotateZ, scale }} />
      </Wrapper>
   )
}

export default Scroll
