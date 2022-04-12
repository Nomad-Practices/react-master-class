import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { todoSelector, currStatusAtom, currStatusListAtom } from '../atoms'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'
import AddStatus from './AddStatus'

function TodoList() {
  const currStatusList = useRecoilValue(currStatusListAtom)
  const filteredTodos = useRecoilValue(todoSelector)
  const [currStatus, setCurrStatus] = useRecoilState(currStatusAtom)
  function onInput(ev: React.FormEvent<HTMLSelectElement>) {
    setCurrStatus(ev.currentTarget.value)
  }
  return (
    <>
      <h1>Add status(category)</h1>
      <AddStatus />
      <hr />
      <h1>Add todo</h1>
      <CreateTodo />
      <hr />
      <h1>Todo List</h1>
      <select value={currStatus} onInput={onInput}>
        <option value="" disabled>
          choose
        </option>
        {currStatusList.map((cs, index) => (
          <option key={index} value={cs}>
            {cs}
          </option>
        ))}
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
