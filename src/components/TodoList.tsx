import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { todoSelector, EStatus, currStatusAtom } from '../atoms'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

function TodoList() {
  const filteredTodos = useRecoilValue(todoSelector)
  const [currStatus, setCurrStatus] = useRecoilState(currStatusAtom)
  function onInput(ev: React.FormEvent<HTMLSelectElement>) {
    setCurrStatus(ev.currentTarget.value as EStatus)
  }
  return (
    <>
      <h1>To dos</h1>
      <hr />
      <CreateTodo />
      <select value={currStatus} onInput={onInput}>
        <option value={EStatus.TODO}>todo</option>
        <option value={EStatus.DOING}>doing</option>
        <option value={EStatus.DONE}>done</option>
      </select>
      <ul>
        {filteredTodos.map((td) => (
          <TodoItem key={td.id} {...td} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
