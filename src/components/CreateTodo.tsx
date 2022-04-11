import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { todoStateAtom } from '../atoms'

interface IForm {
  todo: string
}

function CreateTodo() {
  const setTodoState = useSetRecoilState(todoStateAtom)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  function onValid({ todo }: IForm) {
    setTodoState((prev) => [
      ...prev,
      { id: Date.now(), text: todo, status: 'TODO' },
    ])
    setValue('todo', '')
  }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('todo', {
          required: 'please write sth',
        })}
        type="text"
      />
      <button>Add</button>
    </form>
  )
}

export default CreateTodo
