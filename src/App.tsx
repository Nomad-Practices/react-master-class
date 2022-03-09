import { createGlobalStyle } from 'styled-components'
import Router from './Router'

/**
 * React 앱 전반에 있는 모든 컴포넌트에 공통으로 적용할 css 속성들은 styled components의 createGlobalStyle helper function을 사용한다.
 * 여기서 반환된 StyledComponent는 React tree 최상단에 두면 된다
 * 보통 reset css처럼 default global style을 적용할 때 많이 사용된다.
 * index.html에 명시하지 않아도 되다니ㅠ
 */
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* custom settings */
* {
  box-sizing: border-box
}
body {
  font-family: 'Quicksand', sans-serif; 
  background-color:  ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
a {
  text-decoration: none;
  color: inherit;
}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
