import { useQuery } from 'react-query'
import { getMovies } from '../api'
import styled from 'styled-components'
import { makeImagePath } from '../utils'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'
import { chunk } from 'lodash-es'

const BOX_COUNT_PER_SLIDE = 6

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
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`
const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`
const rowVar: Variants = {
  initial: {
    x: window.outerWidth + 5,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
}
const boxVar: Variants = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: 1.3,
    y: -50,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 0.3,
    },
  },
}
function Home() {
  const { data, isLoading } = useQuery(['movies', 'nowPlaying'], getMovies)
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const boxChunks = chunk(data?.results ?? [], BOX_COUNT_PER_SLIDE)
  function increaseIndex() {
    setLeaving(true)
    !leaving && setIndex((prev) => (prev + 1) % boxChunks.length)
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
            {/**
             * AnimatePresence 내부 motion 컴포넌트의 exit 이후에 실행할 callback은 onExitComplete props를 사용하면 된다~
             * 또한 처음 화면에 rendering될 때 내부 motion 컴포넌트의 initial animation을 비활성화할 때는  initial props에 false로 전달하면 된다.
             */}
            <AnimatePresence
              onExitComplete={() => {
                setLeaving(false)
              }}
              initial={false}
            >
              {/**
               * motion 컴포넌트의 key props만 바꿔도 react에서는 rerendering 된다는 성질을 이용하면 슬라이더는 쉽게 만들 수 있다.
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
                {boxChunks[index].map((t) => (
                  <Box
                    variants={boxVar}
                    key={t.id}
                    bgPhoto={makeImagePath(t.backdrop_path ?? '', 'w500')}
                    initial="initial"
                    whileHover="whileHover"
                    transition={{ type: 'tween' }}
                  />
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
