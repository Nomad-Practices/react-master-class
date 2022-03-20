import { atom, selector, useRecoilValue } from 'recoil'

export const minutesState = atom({
   key: 'minutes',
   default: 0,
})

export const hourSelector = selector({
   key: 'hours',
   get({ get }) {
      return (get(minutesState) / 60).toFixed(2)
   },
})
