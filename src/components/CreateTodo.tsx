import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { toDoState } from '../atoms'
import { ECate } from '../types/models'

// form 내부 input 이름들
interface IFormInputs {
  todo: string
}

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IFormInputs>()
  const setState = useSetRecoilState(toDoState)

  function handleValid(data: IFormInputs) {
    setState((prev) => [
      ...prev,
      { id: Date.now(), text: data.todo, category: ECate['TODO'] },
    ])
    setValue('todo', '')
  }
  return (
    <form onSubmit={handleSubmit(handleValid)}>
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
