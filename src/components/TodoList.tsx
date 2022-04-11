import { useForm } from 'react-hook-form'

interface IForm {
  todo: string
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>()
  function onValid(data: IForm) {
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

export default TodoList
