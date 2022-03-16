import { useForm } from 'react-hook-form'

interface IFormInputs {
  email: string
  first_name: string
  last_name: string
  user_name: string
  password: string
  password_confirmation: string
  extra_errors: string
}

function Login() {
  /**
   * react-hook-form을 사용하면 form state management + validation을 매우 간단하게 처리할 수 있다.
   * useForm에 IFormInputs generic을 추가하는 것을 잊지말자~
   *
   * watch => 모든 input value들의 변화를 감지한다.
   *
   * register => input의 onChange, onBlur event handling
   * -> register의 두번째 인자는 RegisterOption으로 validation rule들을 지정할 수 있다.
   * -> rule을 지정할 때는 (1) 값을 직접 전달하거나 (2) value와 error message를 전달하거나 (3) RegEx를 사용하면 된다
   * -> 문자열 패턴을 검사할 때는 정규식(RegEx)를 사용하면 된다.
   * -> Form 내부 input 항목들의 default value를 설정할 때는 useForm에 관련 option을 넘겨주면 된다~
   * -> 기존의 validation rule말고 현재 입력된 값을 기준으로 custom validation rule을 만들 때는 Register option 중 하나인 validate 메서드를 정의하면 된다
   * ---> validate 메서드의 반환 타입을 string으로 하면 유효하지 않을 때 출력할 message 역할을 한다.
   * ---> validate 메서드의 반환 타입을 객체로 잡으면 여러 개의 custom validation을 잡을 수 있다.
   *
   * handleSubmit => form의 onSubmit event handling + validation까지~
   * -> 유효성 여부는 register 메서드의 두번째 인자로 전달한 option 객체에 명시된 조건들을 모두 만족하는지 여부에 따라 달라진다.
   * -> validation 검사를 마쳤을 때, 유효하면 첫 번째 인자로 전달된 onValid, 유효하지 않으면 두 번째 인자로 전달된 onInValid 함수를 실행한다
   * -> 여기서 유효성 검사는 사용자가 처음으로 form을 submit한 이후에는 저절로 이루어진다.
   *
   * formState
   * input에 뭔가를 입력할 때마다 form에 입력된 항목들을 실시간으로 저장하는 객체
   * => errors : 만일 form에 입력한 항목이 유효하지 않을 때, 어떤 항목이 어떤 타입의 입력오류를 만들었는지를 보여주는 객체
   *
   * setError
   * useForm에서 제공하는 hook으로, 수동으로 기존 validation 외에 특정 조건을 만족할 때 custom error(검증용 api를 호출한다던지)를 발생시킬 때 사용한다
   * 또한 setError가 호출될 때 error가 발생한 input으로 강제로 focus할 수도 있다
   *
   * setValue
   * 특정 input 항목의 value를 특정 값으로 바꿀 수 있도록 하는 신기한 함수
   *
   * react-hook-form의 멋찐 점
   * (1) 만일 유효하지 않다면 유효하지 않은 첫번째 input 항목으로 자동으로 focus된다(커서가 이동한다.)
   * (2) 어느 항목에서 어떤 입력오류가 발생했는지까지 알려준다.
   * (3) validation 과정에서 발생한 오류에 대한 message도 설정할 수 있다.
   */
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IFormInputs>({
    defaultValues: {
      email: '@naver.com',
    },
  })
  const onValid = (data: IFormInputs) => {
    if (data.password !== data.password_confirmation) {
      setError(
        'password_confirmation',
        {
          message: 'password not matched',
        },
        { shouldFocus: true }
      )
    }
    setValue('user_name', 'hello world')
    // setError('extra_errors', { message: 'Server offline~' })
  }
  console.log(errors)
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('email', {
            required: 'email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'only naver.com emails allowed',
            },
          })}
          type="text"
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register('first_name', {
            required: 'write here',
            // validate: (value) =>
            //   value.includes('nico') ? 'no nico allowed' : true,
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'no nico allowed' : true,
              noNick: (value) =>
                value.includes('nick') ? 'no nick allowed' : true,
            },
          })}
          type="text"
          placeholder="first name"
        />
        <span>{errors?.first_name?.message}</span>
        <input {...register('last_name')} type="text" placeholder="last name" />
        <span>{errors?.last_name?.message}</span>
        <input
          {...register('user_name', { minLength: 10 })}
          type="text"
          placeholder="user name"
        />
        <span>{errors?.user_name?.message}</span>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'too short...',
            },
          })}
          type="text"
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('password_confirmation', { required: true })}
          type="text"
          placeholder="password confirmation"
        />
        <span>{errors?.password_confirmation?.message}</span>
        <button>Add</button>
        <span>{errors?.extra_errors?.message}</span>
      </form>
    </div>
  )
}
export default Login
