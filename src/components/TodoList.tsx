import { useForm } from 'react-hook-form'
import { todoStateAtom } from '../atoms'
import { useRecoilState } from 'recoil'

interface IForm {
  todo: string
}

function TodoList() {
  const [todoState, setTodoState] = useRecoilState(todoStateAtom)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  function onValid({ todo }: IForm) {
    setTodoState((prev) => [
      ...prev,
      { id: Date.now(), text: todo, status: 'TODO' },
    ])
    setValue('todo', '')
  }
  return (
    <>
      <h1>To dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('todo', {
            required: 'please write sth',
          })}
          type="text"
        />
        <button>Add</button>
      </form>
      <ul>
        {todoState.map((td) => (
          <li key={td.id}>{td.text}</li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
