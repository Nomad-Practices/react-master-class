import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

/**
 * React 앱에 전반적인 theme을 적용할 때는 styled components의 ThemeProvider 컴포넌트를 사용하면 된다.
 * 하위 컴포넌트들에게 적용할 theme 정보를 담은 객체는 theme이라는 props로 전달한다.
 * ThemeProvider가 App 컴포넌트를 wrapping하기 때문에 theme props는 App 하위 컴포넌트들에서 접근할 수 있다.
 * 여기서 주의할 점은, 적용할 theme의 Object는 동일한 interface를 가져야 한다는 것~
 */
export const GlobalStyle = createGlobalStyle`
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
font-weight: 300;
  font-family: 'Quicksand', sans-serif; 
  color: 'black';
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
}
a {
  text-decoration: none;
  color: inherit;
}
`
export const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
`
export const Box = styled.div`
   width: 200px;
   height: 200px;
   background-color: white;
   border-radius: 10px;
   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
