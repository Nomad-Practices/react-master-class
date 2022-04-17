import { AnimatePresence, Variants, useViewportScroll } from 'framer-motion'
import {
  Wrapper,
  Row,
  Box,
  Title,
  Cover,
  Overview,
  Desc,
  Overlay,
  Info,
  Loader,
  SliderName,
} from './styled'
import { useState } from 'react'
import { makeImagePath } from '../../utils'
import { useMatch, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { chunk } from 'lodash-es'
import { IResultTv } from '../../api/interfaces'

const rowVariants: Variants = {
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
const boxVarinants: Variants = {
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
const infoVariants: Variants = {
  whileHover: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.5,
      duration: 0.3,
    },
  },
}
const overlayVariants: Variants = {
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

const BOX_COUNT_PER_SLIDE = 6

interface IProps {
  queryId: string
  queryFn: <T extends { results: IResultTv[] }>() => Promise<T>
}

function Slider({ queryId, queryFn }: IProps) {
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const navigate = useNavigate()
  const { scrollY } = useViewportScroll()

  const { data, isLoading } = useQuery(queryId.split('/'), queryFn)

  const sliderNm = queryId.split('/')[1]

  const boxChunks = chunk(data?.results ?? [], BOX_COUNT_PER_SLIDE)

  const tvMatch = useMatch('/tv/:sliderNm/:id')

  const clickedPoster =
    tvMatch && data?.results.find((r) => `${r.id}` === tvMatch?.params.id)

  function increaseIndex() {
    setLeaving(true)
    !leaving && setIndex((prev) => (prev + 1) % boxChunks.length)
  }
  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Wrapper>
            <SliderName onClick={() => increaseIndex()}>{sliderNm}</SliderName>
            <AnimatePresence
              onExitComplete={() => {
                setLeaving(false)
              }}
              initial={false}
            >
              <Row
                variants={rowVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {boxChunks[index].map((t) => (
                  <Box
                    layoutId={`${t.id}-${sliderNm}`}
                    variants={boxVarinants}
                    key={t.id}
                    bgphoto={makeImagePath(t.backdrop_path ?? '', 'w500')}
                    initial="initial"
                    whileHover="whileHover"
                    transition={{ type: 'tween' }}
                    onClick={() => {
                      navigate(`/tv/${sliderNm}/${t.id}`)
                    }}
                  >
                    <Info variants={infoVariants}>
                      <h4>{t?.name}</h4>
                    </Info>
                  </Box>
                ))}
              </Row>
            </AnimatePresence>
          </Wrapper>
          <AnimatePresence>
            {tvMatch?.params.sliderNm === sliderNm && (
              <>
                <Overlay
                  variants={overlayVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => navigate(-1)}
                />
                <Desc
                  layoutId={`${tvMatch?.params.id}-${sliderNm}`}
                  style={{ top: scrollY.get() + 50 }}
                >
                  {clickedPoster && (
                    <>
                      <Cover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedPoster?.backdrop_path ?? '',
                            'w500'
                          )})`,
                        }}
                      />
                      <Title>{clickedPoster?.name}</Title>
                      <Overview>{clickedPoster?.overview}</Overview>
                    </>
                  )}
                </Desc>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default Slider
