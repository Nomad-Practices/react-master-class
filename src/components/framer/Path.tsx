import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled(motion.div)`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(135deg, rgb(255, 221, 89), rgb(255, 63, 52));
`
/**
 * path tag의 fill attr을 currentColor로 지정하면 svg tag에 color style을 적용하면 이는 path의 color(채우는 색)로 전달된다.
 * svg 이미지의 outline color는 stroke attr로 지정하면 된다.
 */
const Svg = styled.svg`
   width: 300px;
   height: 300px;
   color: transparent;
`
const pathVariants: Variants = {
   initial: {
      fill: 'rgba(255,255,255,0)',
      pathLength: 0,
      stroke: 'white',
      strokeWidth: 2,
      d: 'M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z',
   },
   animate: {
      fill: 'rgba(255,255,255,1)',
      pathLength: 1,
      stroke: 'blue',
      /**
       * motion 컴포넌트의 개별적인 attr에 transition을 부여할 때는
       * 아래와 같이 default transition을 전달한 뒤,
       * target attr에 부여할 transition property를 지정하면 된다.
       *
       * default는 path의 모든 attr에 대해서 적용될 것이고,
       * pathLength(path의 윤곽선 길이)는 default에 따라 5초 동안 그려진다.
       * 그리고 fill(path 내부 채우는 색)의 변화는 개별적으로 2초 지나고 2초동안 일어나게 된다.
       */
      transition: {
         default: {
            duration: 10,
         },
         fill: {
            duration: 2,
            delay: 2,
         },
      },
   },
}
function Path() {
   return (
      <Wrapper>
         <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <motion.path
               variants={pathVariants}
               initial="initial"
               animate="animate"
            />
         </Svg>
      </Wrapper>
   )
}

export default Path
