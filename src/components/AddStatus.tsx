import { useForm } from 'react-hook-form'
import { currStatusListAtom } from '../atoms'
import { useSetRecoilState } from 'recoil'

interface IForm {
  anotherStatus: string
}

function AddStatus() {
  const setCurrStatusList = useSetRecoilState(currStatusListAtom)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  function onValid({ anotherStatus }: IForm) {
    setCurrStatusList((prev) => {
      const ret = [...prev, anotherStatus]
      localStorage.setItem('statusList', JSON.stringify(ret))
      return ret
    })
    setValue('anotherStatus', '')
  }
  function onInvalid() {
    alert('only UPPERCASE non-empty letter!')
    setValue('anotherStatus', '')
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('anotherStatus', {
          validate: (val) => val && val === val.toUpperCase(),
        })}
        type="text"
      />
      <button>add status</button>
    </form>
  )
}

export default AddStatus
