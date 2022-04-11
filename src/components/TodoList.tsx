import { useRecoilValue } from 'recoil'
import { todoStateAtom } from '../atoms'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

function TodoList() {
  const todoState = useRecoilValue(todoStateAtom)
  return (
    <>
      <h1>To dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todoState.map((td) => (
          <TodoItem key={td.id} {...td} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
