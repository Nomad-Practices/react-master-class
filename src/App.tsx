import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Board, Boards, Card, Wrapper } from './components/styled'

function App() {
   function onDragEnd() {}
   const todos = ['a', 'b', 'c', 'd', 'e', 'f']
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
                           <Draggable draggableId={t} index={i}>
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
