import { useQuery } from 'react-query'
import { useApi } from '../api'
import styled from 'styled-components'
import { makeImagePath } from '../utils'
import {
  motion,
  AnimatePresence,
  Variants,
  useViewportScroll,
} from 'framer-motion'
import { useState } from 'react'
import { chunk } from 'lodash-es'
import { useMatch, useNavigate } from 'react-router-dom'
import { INowPlayingMv } from '../api/interfaces'

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
const Banner = styled.div<{ bgphoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
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
const Box = styled(motion.div)<{ bgphoto: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  cursor: pointer;
`
const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  width: 100%;
  position: absolute;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 300px;
`
const BigTitle = styled.h2`
  color: ${(props) => props.theme.white.lighter};
  font-weight: bold;
  padding: 10px;
  font-size: 30px;
  position: relative;
  top: -60px;
`
const BigOverview = styled.p`
  padding: 20px;
  color: ${(props) => props.theme.white.lighter};
  position: relative;
  top: -60px;
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
const infoVar: Variants = {
  whileHover: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 0.3,
    },
  },
}
const overlayVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}
function Home() {
  const navigate = useNavigate()
  const { scrollY } = useViewportScroll()
  const bigMovieMatch = useMatch('/movies/:id')
  const { data, isLoading } = useQuery(
    ['movies', 'nowPlaying'],
    useApi<Partial<INowPlayingMv>>('/movie/now_playing')
  )

  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const boxChunks = chunk(data?.results ?? [], BOX_COUNT_PER_SLIDE)

  const clickedMovie =
    bigMovieMatch?.params.id &&
    data?.results?.find((d) => `${d.id}` === bigMovieMatch?.params.id)

  function increaseIndex() {
    setLeaving(true)
    !leaving && setIndex((prev) => (prev + 1) % boxChunks.length)
  }
  function onBoxClick(id: number) {
    navigate(`/movies/${id}`)
  }
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgphoto={makeImagePath(data?.results?.[0]?.backdrop_path ?? '')}
          >
            <Title>{data?.results?.[0].title}</Title>
            <Overview>{data?.results?.[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence
              onExitComplete={() => {
                setLeaving(false)
              }}
              initial={false}
            >
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
                    layoutId={`${t.id}`}
                    variants={boxVar}
                    key={t.id}
                    bgphoto={makeImagePath(t.backdrop_path ?? '', 'w500')}
                    initial="initial"
                    whileHover="whileHover"
                    transition={{ type: 'tween' }}
                    onClick={() => onBoxClick(t.id)}
                  >
                    <Info variants={infoVar}>
                      <h4>{t.title}</h4>
                    </Info>
                  </Box>
                ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch && (
              <>
                <Overlay
                  variants={overlayVar}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => navigate(-1)}
                ></Overlay>
                <BigMovie
                  layoutId={bigMovieMatch?.params.id ?? ''}
                  style={{ top: scrollY.get() + 50 }}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path ?? '',
                            'w500'
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverview>{clickedMovie.overview}</BigOverview>
                    </>
                  )}
                </BigMovie>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  )
}

export default Home
