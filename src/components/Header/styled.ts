import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 17px;
  padding: 20px 60px;
  color: white;
`
export const Col = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`
export const Items = styled.ul`
  display: flex;
  align-items: center;
`
export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`
export const Search = styled.span`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
  }
`
export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.red};
  border-radius: 2.5px;
  bottom: -7px;
  left: 0;
  right: 0;
  margin: 0 auto;
`
export const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.white.lighter};
`
