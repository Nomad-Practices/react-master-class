import { useRecoilState } from 'recoil'
import { minutesState, hourSelector } from './atoms'
import React from 'react'

function App() {
   const [minutes, setMinutes] = useRecoilState(minutesState)
   /**
    * useRecoilState(selector)에서 첫번째 배열요소는 selector.get의 반환값이고 두번째 배열요소는 selector.set을 호출하는 함수이다!!!
    */
   const [hours, setHours] = useRecoilState(hourSelector)
   function onMinutesChange(event: React.FormEvent<HTMLInputElement>) {
      setMinutes(+event.currentTarget.value)
   }
   function onHoursChange(event: React.FormEvent<HTMLInputElement>) {
      setHours(+event.currentTarget.value)
   }
   return (
      <div>
         <input
            type="number"
            placeholder="Minutes"
            value={minutes}
            onChange={onMinutesChange}
         />
         <input
            type="number"
            placeholder="Hours"
            value={hours}
            onChange={onHoursChange}
         />
      </div>
   )
}

export default App
