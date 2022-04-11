import { atom, selector } from 'recoil'

export enum EStatus {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}

export interface ITodo {
  id: number
  text: string
  status: EStatus
}

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: true,
})

export const currStatusAtom = atom<EStatus>({
  key: 'currStatus',
  default: EStatus.TODO,
})

export const todoStateAtom = atom<ITodo[]>({
  key: 'todo',
  default: [],
})

/**
 * recoil selector는 비유하자면 Vue에서 store getter와 동일한 개념이다.
 * 의존하는 atom의 변화에 반응하여 재연산된다
 * 동일한 useRecoilValue를 사용하면 selector의 반환값을 얻을 수 있다.
 */
export const todoSelector = selector({
  key: 'todoSelector',
  get({ get }) {
    const todos = get(todoStateAtom)
    const currStatus = get(currStatusAtom)
    return todos.filter((t) => t.status === currStatus)
  },
})
