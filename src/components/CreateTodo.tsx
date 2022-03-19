import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { categoryState, toDoState } from '../atoms'

// form 내부 input 이름들
interface IFormInputs {
  todo: string
}

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IFormInputs>()
  const setState = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)

  function onValid(data: IFormInputs) {
    setState((prev) => [...prev, { id: Date.now(), text: data.todo, category }])
    setValue('todo', '')
  }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('todo', { required: 'Please Write todo' })}
        type="text"
        placeholder="Write todo"
      />
      <button>Add</button>
    </form>
  )
}

export default CreateTodo
