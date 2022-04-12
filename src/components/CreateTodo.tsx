import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currStatusAtom, todoStateAtom } from '../atoms'

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
  function onInvalid() {
    alert('PLEASE WRITE STH!!')
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('todo', {
          validate: (val) => !!val,
        })}
        type="text"
      />
      <button>add item</button>
    </form>
  )
}

export default CreateTodo
