import { Droppable } from 'react-beautiful-dnd'
import { Area, Board, Title } from '../components/styled'
import DraggableCard from '../components/DraggableCard'

interface IProps {
   todos: string[]
   droppableId: string
}

function DroppableBoard({ todos, droppableId }: IProps) {
   return (
      <Board>
         <Title>{droppableId}</Title>
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
