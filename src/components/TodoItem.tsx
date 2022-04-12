import React from 'react'
import { ITodo } from '../atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoStateAtom, currStatusListAtom } from '../atoms'
import { cloneDeep } from 'lodash-es'

function TodoItem({ id, text, status }: ITodo) {
  const currStatusList = useRecoilValue(currStatusListAtom)
  const setTodoState = useSetRecoilState(todoStateAtom)
  function switchStatus(ev: React.MouseEvent<HTMLButtonElement>) {
    // console.log(ev.currentTarget.name)
    setTodoState((prev) => {
      const clonedPrev = cloneDeep(prev)
      const tgtIdx = clonedPrev.findIndex((ci) => ci.id === id)
      clonedPrev[tgtIdx].status = ev.currentTarget.name
      localStorage.setItem('todos', JSON.stringify(clonedPrev))
      return clonedPrev
    })
  }
  return (
    <li>
      {text}
      {/* {status !== EStatus.TODO && (
        <button name="TODO" onClick={switchStatus}>
          TODO
        </button>
      )}
      {status !== EStatus.DOING && (
        <button name="DOING" onClick={switchStatus}>
          DOING
        </button>
      )}
      {status !== EStatus.DONE && (
        <button name="DONE" onClick={switchStatus}>
          DONE
        </button>
      )} */}
      {currStatusList.map(
        (cs, index) =>
          status !== cs && (
            <button key={index} name={cs} onClick={switchStatus}>
              {cs}
            </button>
          )
      )}
    </li>
  )
}

export default TodoItem
