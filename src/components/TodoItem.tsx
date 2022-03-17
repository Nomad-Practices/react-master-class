import { ITodo, ECate } from '../types/models'
import { useSetRecoilState } from 'recoil'
import { toDoState } from '../atoms'

function TodoItem({ id, text, category }: ITodo) {
  const setState = useSetRecoilState(toDoState)
  function onClick(cate: ECate) {
    setState((prev) =>
      prev.map((p) => (p.id === id ? { id, text, category: cate } : p))
    )
  }
  return (
    <li key={id}>
      <span>{text}</span>
      {category !== 'TODO' && (
        <button onClick={() => onClick(ECate['TODO'])}>Todo</button>
      )}
      {category !== 'DOING' && (
        <button onClick={() => onClick(ECate['DOING'])}>Doing</button>
      )}
      {category !== 'DONE' && (
        <button onClick={() => onClick(ECate['DONE'])}>Done</button>
      )}
    </li>
  )
}

export default TodoItem
