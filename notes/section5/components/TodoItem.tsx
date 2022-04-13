import React from 'react'
import { EStatus, ITodo } from '../atoms'
import { useSetRecoilState } from 'recoil'
import { todoStateAtom } from '../atoms'
import { cloneDeep } from 'lodash-es'

function TodoItem({ id, text, status }: ITodo) {
  const setTodoState = useSetRecoilState(todoStateAtom)
  function switchStatus(ev: React.MouseEvent<HTMLButtonElement>) {
    // console.log(ev.currentTarget.name)
    setTodoState((prev) => {
      const clonedPrev = cloneDeep(prev)
      const tgtIdx = clonedPrev.findIndex((ci) => ci.id === id)
      clonedPrev[tgtIdx].status = ev.currentTarget.name as EStatus
      return clonedPrev
    })
  }
  return (
    <li>
      {text}
      {status !== EStatus.TODO && (
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
      )}
    </li>
  )
}

export default TodoItem
