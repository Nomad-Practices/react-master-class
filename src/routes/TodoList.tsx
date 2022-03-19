import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoryState, toDoSelector } from '../atoms'
import CreateTodo from '../components/CreateTodo'
import TodoItem from '../components/TodoItem'
import { ECate } from '../types/models'

function TodoList() {
  const frontList = useRecoilValue(toDoSelector)
  const setCategory = useSetRecoilState(categoryState)
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    setCategory(event.currentTarget.value as ECate)
  }
  return (
    <div>
      <select onInput={onInput}>
        <option value={ECate.TODO}>to do</option>
        <option value={ECate.DOING}>doing</option>
        <option value={ECate.DONE}>done</option>
      </select>
      <CreateTodo />
      <ul>
        {frontList.map((s) => (
          <TodoItem key={s.id} {...s} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
