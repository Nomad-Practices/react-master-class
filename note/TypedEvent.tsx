import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`
const Header = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function TypedEvent() {
  const [value, setValue] = useState('')
  /**
   * 아래와 같이 React에서 event handler의 인자로 전달된 Event 객체의 interface를 명확히 전달하면
   * ts에서는 해당 event가 input element에 의한 Form event임을 알려줄 수 있다. => 이런건 구글링으로 알아봐야 한다.
   * @param event
   */
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event
    /**
     * event가 현재 전달된 currentTarget text형 inputElement라는 점에 기반하여
     * event.currentTarget.value가 string type이란 것을 자동으로 추론한다.
     */
    setValue(value)
  }
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log()
  }
  return (
    <Wrapper>
      <Header>Hello World~</Header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          value={value}
          onChange={onChange}
        />
        <button>Log in</button>
      </form>
    </Wrapper>
  )
}

export default TypedEvent
