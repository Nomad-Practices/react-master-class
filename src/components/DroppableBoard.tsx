import { Droppable } from 'react-beautiful-dnd'
import { Area, Board, Title } from '../components/styled'
import DraggableCard from '../components/DraggableCard'
import { useRef } from 'react'

interface IProps {
   todos: string[]
   droppableId: string
}

function DroppableBoard({ todos, droppableId }: IProps) {
   /**
    * Vue에서 template reference처럼 React에서는 template 내에 html element에 access할 때는 useRef hook을 사용한다.
    */
   const inputRef = useRef<HTMLInputElement>(null)
   function onClick() {
      inputRef.current?.focus()
      setTimeout(() => inputRef.current?.blur(), 5000)
   }
   return (
      <Board>
         <Title>{droppableId}</Title>
         <input ref={inputRef} type="text" placeholder="grab me" />
         <button onClick={onClick}>click me</button>
         <Droppable droppableId={droppableId}>
            {(provided, { isDraggingOver, draggingFromThisWith }) => (
               /**
                * provided.droppableProps -> Drop을 할 영역에 전달할 props
                */
               <Area
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={isDraggingOver}
                  draggingFromThisWith={draggingFromThisWith}
               >
                  {todos.map((t, i) => (
                     <DraggableCard draggableId={t} index={i} key={t} />
                  ))}
                  {/**
                   * provided placeholder를 사용하면 Draggable이 원래 위치에서 벗어나도 Droppable의 height는 유지된다.
                   */}
                  {provided.placeholder}
               </Area>
            )}
         </Droppable>
      </Board>
   )
}

export default DroppableBoard
