import {
   DragDropContext,
   Droppable,
   Draggable,
   DropResult,
} from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import { toDoState } from './atoms'
import { Board, Boards, Card, Wrapper } from './components/styled'
import { cloneDeep } from 'lodash-es'

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
                           <Draggable draggableId={t} index={i} key={t}>
                              {(provided) => (
                                 /**
                                  * provided.draggableProps -> Drag를 적용할 영역에 전달할 props
                                  */
                                 <Card
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                 >
                                    {t}
                                 </Card>
                              )}
                           </Draggable>
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
