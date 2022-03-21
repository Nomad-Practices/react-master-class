import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import { toDoState } from './atoms'
import { Board, Boards, Wrapper } from './components/styled'
import { cloneDeep } from 'lodash-es'
import DraggableCard from './components/DraggableCard'

function App() {
   function onDragEnd({ draggableId, destination, source }: DropResult) {
      setTodos((prev) => {
         const next = cloneDeep(prev)
         next.splice(source.index, 1)
         next.splice(destination?.index ?? source.index, 0, draggableId)
         return next
      })
   }
   const [todos, setTodos] = useRecoilState(toDoState)
   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Wrapper>
            <Boards>
               <Droppable droppableId="one">
                  {(provided) => (
                     /**
                      * provided.droppableProps -> Drop을 할 영역에 전달할 props
                      */
                     <Board
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                     >
                        {todos.map((t, i) => (
                           <DraggableCard draggableId={t} index={i} key={t} />
                        ))}
                        {/**
                         * provided placeholder를 사용하면 Draggable이 원래 위치에서 벗어나도 Droppable의 height는 유지된다.
                         */}
                        {provided.placeholder}
                     </Board>
                  )}
               </Droppable>
            </Boards>
         </Wrapper>
         <Boards></Boards>
      </DragDropContext>
   )
}

export default App
