import { useRecoilValue } from 'recoil'
import { todoSelector, todoStateAtom } from '../atoms'
import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

function TodoList() {
  // const todoState = useRecoilValue(todoStateAtom)
  const [todo, doing, done] = useRecoilValue(todoSelector)
  return (
    <>
      <h1>To dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        <h2>Todo~</h2>
        {todo.map((td) => (
          <TodoItem key={td.id} {...td} />
        ))}
        <br />
        <h2>Doing~</h2>
        {doing.map((td) => (
          <TodoItem key={td.id} {...td} />
        ))}
        <br />
        <h2>Done~</h2>
        {done.map((td) => (
          <TodoItem key={td.id} {...td} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
