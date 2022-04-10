import { useForm } from 'react-hook-form'

interface IForm {
  email: string
  firstName: string
  lastName: string
  userName: string
  password: string
  pwConfirmation: string
}

function TodoList() {
  /**
   * register: react-hook-form에 input을 등록하는 메서드 -> input subscribe로 form state를 분석할 수 있다.
   * register의 2번째 인자를 통해 form validation이 가능하다.
   * validation option은 2가지로 전달할 수 있디.
   * -> 구체적인 value만
   * -> 구체적인 value + validation error message을 포함한 객체
   * -> 정규식 - input pattern 지정
   *
   * handleSubmit: form validation 담당
   * 인자로 유효할 경우, 무효할 경우에 실행할 callback을 전달할 수 있다.
   * input별 validation 결과를 객체로 변환한다.
   * form의 onsubmit props로 전달하면 된다.
   * -> 자동으로 preventDefault를 시행한다.
   * ->
   *
   * formState: 현재 form에 입력된 inputValue + validation 결과에 대한 정보를 객체로 반환한다.
   * formState는 최초 submit + 그 이후 input 입력 때마다 실시간으로 업데이트된다.
   *
   * watch : 현재 registerd된 input의 value들이 변할 때마다 현재 input state를 객체로 반환하는 메서드
   */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: '@naver.com',
    },
  })
  function onValid(data: IForm) {
    // console.log(data)
  }
  //   console.log(watch())
  console.log(errors)
  return (
    <form
      onSubmit={handleSubmit(onValid)}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: 'only @naver.com allowed',
          },
        })}
        type="text"
        placeholder="email"
      />
      <span>{errors?.email?.message}</span>
      <input {...register('firstName')} type="text" placeholder="first name" />
      <span>{errors?.firstName?.message}</span>
      <input {...register('lastName')} type="text" placeholder="last name" />
      <span>{errors?.lastName?.message}</span>
      <input
        {...register('userName', {
          required: true,
          minLength: 10,
        })}
        type="text"
        placeholder="user name"
      />
      <span>{errors?.userName?.message}</span>
      <input
        {...register('password', {
          required: 'Password is Required',
          minLength: {
            value: 5,
            message: 'minimum length is 5',
          },
        })}
        type="text"
        placeholder="password"
      />
      <span>{errors?.password?.message}</span>
      <input
        {...register('pwConfirmation')}
        type="text"
        placeholder="password confirmation"
      />
      <span>{errors?.pwConfirmation?.message}</span>
      <button>Add</button>
    </form>
  )
}

export default TodoList
