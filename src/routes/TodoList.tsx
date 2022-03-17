import { useRecoilValue } from 'recoil'
import { toDoState } from '../atoms'
import CreateTodo from '../components/CreateTodo'
import TodoItem from '../components/TodoItem'

function TodoList() {
  const state = useRecoilValue(toDoState)
  return (
    <div>
      <CreateTodo />
      <ul>
        {state.map((s) => (
          <TodoItem {...s} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
