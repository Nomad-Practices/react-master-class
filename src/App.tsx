import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function App() {
   function onDragEnd() {}
   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <div>
            <Droppable droppableId="one">
               {(provided) => (
                  /**
                   * provided.droppableProps -> Drop을 할 영역에 전달할 props
                   */
                  <ul ref={provided.innerRef} {...provided.droppableProps}>
                     <Draggable draggableId="first" index={0}>
                        {(provided) => (
                           /**
                            * provided.draggableProps -> Drag를 적용할 영역에 전달할 props
                            */
                           <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                           >
                              <span {...provided.dragHandleProps}>🏎</span>
                              hello
                           </li>
                        )}
                     </Draggable>
                  </ul>
               )}
            </Droppable>
         </div>
      </DragDropContext>
   )
}

export default App
