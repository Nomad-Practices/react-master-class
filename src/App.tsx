import { useSetRecoilState, useRecoilValue } from 'recoil'
import { minutesState, hourSelector } from './atoms'
import React from 'react'

function App() {
   const setMinutes = useSetRecoilState(minutesState)
   const hours = useRecoilValue(hourSelector)
   function onMinutesChange(event: React.FormEvent<HTMLInputElement>) {
      setMinutes(+event.currentTarget.value)
   }
   return (
      <div>
         <input
            type="number"
            placeholder="Minutes"
            onChange={onMinutesChange}
         />
         <input type="number" placeholder="Hours" value={hours} readOnly />
      </div>
   )
}

export default App
