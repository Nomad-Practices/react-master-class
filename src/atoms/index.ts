import { atom, selector, useRecoilValue } from 'recoil'

export const minutesState = atom({
   key: 'minutes',
   default: 0,
})

/**
 * selector.get -> state를 read
 * selector.set -> state를 write
 * selector는 Vue의 computedRef와 거의 동일한 기능을 가진다.
 */
export const hourSelector = selector<number>({
   key: 'hours',
   get({ get }) {
      return get(minutesState) / 60
   },
   set({ set }, newVal) {
      set(minutesState, (newVal as number) * 60)
   },
})
