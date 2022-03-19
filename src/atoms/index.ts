import { atom, selector } from 'recoil'
import { ECate, ITodo } from '../types/models'
/**
 * Recoil은 React 앱의 global state management 라이브러리이다.
 * state management는 여러 컴포넌트들이 공유할 state(global state)와 state manipulation 함수들을 일일이 여러 단계의 props를 거쳐서 전달하는 번거로움을 해결할 수 있다
 * 이런 문제를 traveling props라고 한다.
 *
 * 여기서 Recoil에 의해서 관리되는 state의 최소단위는 atom이라고 불린다.
 * 컴포넌트에서 recoil atom의 실시간 state 값을 사용할 때는 useAtomValue hook의 반환값을,
 * state를 modify할 때는 useSetRecoilState hook에서 반환된 setter을 사용한다.
 * current state와 setter를 동시에 받고 싶으면 useRecoiState hook을 사용하면 된다.
 */
export const isDarkAtom = atom({
  key: 'isDark',
  default: true,
})

export const toDoState = atom<ITodo[]>({
  key: 'todo',
  default: [],
})

export const categoryState = atom<ECate>({
  key: 'category',
  default: ECate.TODO,
})

/**
 * Recoil selector는 기존 state로부터 생성된 derived state로 원본은 그대로 두고 원하는 연산의 결과값만 반환한다.
 * selector는 특정 atom를 기준으로 생성되기 때문에 해당 atom에 변화에 맞춰서 다시 연산을 수행한다.
 * 마치 Vuex의 getter, Component의 computed와 비슷하다.
 */
export const toDoSelector = selector({
  key: 'todoSelector',
  get({ get }) {
    const todos = get(toDoState)
    const category = get(categoryState)
    return todos.filter((t) => t.category === category)
  },
})
