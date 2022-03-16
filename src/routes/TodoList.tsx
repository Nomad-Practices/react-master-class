import { useForm } from 'react-hook-form'
import { atom, useRecoilState } from 'recoil'

// form 내부 input 이름들
interface IFormInputs {
  todo: string
}

interface ITodo {
  id: number
  text: string
  category: 'TODO' | 'DOING' | 'DONE'
}

const toDoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
})

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IFormInputs>()
  const [state, setState] = useRecoilState(toDoState)

  function handleValid(data: IFormInputs) {
    setState((prev) => [
      ...prev,
      { id: Date.now(), text: data.todo, category: 'TODO' },
    ])
    setValue('todo', '')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register('todo', { required: 'Please Write todo' })}
          type="text"
          placeholder="Write todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {state.map((s) => (
          <li key={s.id}>{s.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
