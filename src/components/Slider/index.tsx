import { AnimatePresence, Variants } from 'framer-motion'
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
} from './styled'
import { useState } from 'react'
import { makeImagePath } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { chunk } from 'lodash-es'

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
  queryFn: () => Promise<unknown>
}

function Slider({ queryId, queryFn }: IProps) {
  const [leaving, setLeaving] = useState(false)
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const { data, isLoading } = useQuery(queryId.split('/'), queryFn)

  const boxChunks = chunk(data?.results ?? [], BOX_COUNT_PER_SLIDE)
  return (
    <>
      <Wrapper>
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
                layoutId={`${t.id}`}
                variants={boxVarinants}
                key={t.id}
                bgphoto={makeImagePath(t.backdrop_path ?? '', 'w500')}
                initial="initial"
                whileHover="whileHover"
                transition={{ type: 'tween' }}
                onClick={() => onBoxClick(t.id)}
              >
                <Info variants={infoVariants}>
                  <h4>{t.title}</h4>
                </Info>
              </Box>
            ))}
          </Row>
        </AnimatePresence>
      </Wrapper>
      <AnimatePresence>
        {bigMovieMatch && (
          <>
            <Overlay
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => navigate(-1)}
            ></Overlay>
            <Desc
              layoutId={bigMovieMatch?.params.id ?? ''}
              style={{ top: scrollY.get() + 50 }}
            >
              {clickedMovie && (
                <>
                  <Cover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                        clickedMovie.backdrop_path ?? '',
                        'w500'
                      )})`,
                    }}
                  />
                  <Title>{clickedMovie.title}</Title>
                  <Overview>{clickedMovie.overview}</Overview>
                </>
              )}
            </Desc>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Slider
