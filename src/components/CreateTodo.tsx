import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currStatusAtom, EStatus, todoStateAtom } from '../atoms'

interface IForm {
  todo: string
}

function CreateTodo() {
  const setTodoState = useSetRecoilState(todoStateAtom)
  const currStatus = useRecoilValue(currStatusAtom)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  function onValid({ todo }: IForm) {
    const newItem = { id: Date.now(), text: todo, status: currStatus }
    setTodoState((prev) => {
      const ret = [...prev, newItem]
      localStorage.setItem('todos', JSON.stringify(ret))
      return ret
    })
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
