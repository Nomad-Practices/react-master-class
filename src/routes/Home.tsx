import { useQuery } from 'react-query'
import { getMovies } from '../api'
import styled from 'styled-components'
import { makeImagePath } from '../utils'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'

const Wrapper = styled.div`
  height: 200vh;
`
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  padding-left: 60px;
`
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`
const Overview = styled.p`
  font-size: 34px;
  width: 50%;
`
const Slider = styled.div`
  position: relative;
  top: -100px;
`
const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`
const Box = styled(motion.div)`
  background-color: white;
  height: 200px;
  color: red;
  font-size: 20px;
`
const rowVar: Variants = {
  initial: {
    x: window.outerWidth + 10,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
}
function Home() {
  const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies)
  const [index, setIndex] = useState(0)
  function increaseIndex() {
    setIndex((prev) => prev + 1)
  }
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path ?? '')}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence>
              {/**
               * motion 컴포넌트의 key props만 바꿔도 react에서는 rerendering 된다는 성질을 이용하면
               * 슬라이더는 쉽게 만들 수 있다.
               * 사라지려는 컴포넌트 exit을, 나타나려는 컴포넌트는 initial + animate를 실행하게 된다.
               */}
              <Row
                variants={rowVar}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <Box key={n}>{n}</Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  )
}

export default Home
