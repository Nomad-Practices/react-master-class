import { atom } from 'recoil'

interface ITodo {
  id: number
  text: string
  status: 'TODO' | 'DOING' | 'DONE'
}

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: true,
})

export const todoStateAtom = atom<ITodo[]>({
  key: 'todo',
  default: [],
})
