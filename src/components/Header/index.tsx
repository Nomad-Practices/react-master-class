import { Nav, Col, Logo, Items, Item, Search, Circle, Input } from './styled'
import {
  motion,
  Variants,
  useAnimation,
  useViewportScroll,
} from 'framer-motion'
import { Link, useMatch, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  keyword: string
}

const logoVar: Variants = {
  initial: {
    fillOpacity: 1,
  },
  whileHover: {
    fillOpacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
    },
  },
}
const navVar: Variants = {
  initial: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
}
function Header() {
  const homeMatch = useMatch('/')
  const tvMatch = useMatch('/tv')
  const [showSearch, setShowSearch] = useState(false)
  const { scrollY } = useViewportScroll()
  /**
   * 코드 상에서 동적으로 url push, replace로 이동할 때는 react-router-dom의 useNavigate를 사용하면 된다~~
   */
  const navigate = useNavigate()
  /**
   * 코드 상에서 motion animation을 원하는 때에 실행하도록 제어(시작, 종료, 구독)할 때는 useAnimation hook을 사용한다.
   * 특정 조건에 여러 animation을 실행할 때 굉장히 유용하다.
   * useAnimation hook의 반환값은 motion 컴포넌트의 animate props로 전달하면 된다.
   */
  const inputAnimation = useAnimation()
  const navAnimation = useAnimation()
  function onClick() {
    inputAnimation.start({
      scaleX: showSearch ? 0 : 1,
    })
    setShowSearch((prev) => !prev)
  }
  useEffect(() => {
    scrollY.onChange(() => {
      navAnimation.start({
        backgroundColor: `rgba(0,0,0,${scrollY.get() > 80 ? 1 : 0})`,
      })
    })
  }, [])
  const { register, handleSubmit } = useForm<IForm>()
  function onValid(data: IForm) {
    navigate(`/search?keyword=${data.keyword}`)
  }
  return (
    <Nav variants={navVar} initial="initial" animate={navAnimation}>
      <Col>
        <Logo
          variants={logoVar}
          initial="initial"
          whileHover="whileHover"
          xmlns="http://www.w3.org/2000/svg"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
        </Logo>
        <Items>
          <Item>
            <Link to="/">Home</Link>
            {homeMatch && <Circle layoutId="dot" />}
          </Item>
          <Item>
            <Link to="/tv">Tv Shows</Link>
            {tvMatch && <Circle layoutId="dot" />}
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={onClick}
            animate={{ x: showSearch ? -185 : 0 }}
            transition={{ type: 'linear' }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            {...register('keyword', { required: true, minLength: 2 })}
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: 'linear' }}
            placeholder="Search for movie or tv show..."
          />
        </Search>
      </Col>
    </Nav>
  )
}

export default Header
