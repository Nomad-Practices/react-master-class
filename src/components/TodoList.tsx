import { useForm } from 'react-hook-form'

function TodoList() {
  /**
   * register: react-hook-form에 input을 등록하는 메서드 -> input subscribe로 form state를 분석할 수 있다.
   * watch : 현재 registerd된 input의 value들이 변할 때마다 현재 input state를 객체로 반환하는 메서드
   */
  const { register, handleSubmit, watch } = useForm()
  return (
    <form>
      <input {...register('email')} type="text" placeholder="Write a todo..." />
      <input {...register('firstName')} type="text" placeholder="first name" />
      <input {...register('lastName')} type="text" placeholder="last name" />
      <input {...register('userName')} type="text" placeholder="user name" />
      <input {...register('password')} type="text" placeholder="password" />
      <input
        {...register('pwConfirmation')}
        type="text"
        placeholder="password confirmation"
      />
      <button>Add</button>
    </form>
  )
}

export default TodoList
