import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import { toDoState } from './atoms'
import { Boards, Wrapper } from './components/styled'
import { cloneDeep } from 'lodash-es'
import DroppableBoard from './components/DroppableBoard'

function App() {
   const [state, setState] = useRecoilState(toDoState)
   function onDragEnd({ draggableId, destination, source }: DropResult) {
      setState((prev) => {
         const next = cloneDeep(prev)
         const destId = destination?.droppableId ?? source.droppableId
         const destPos = destination?.index ?? source.index

         const [draggedItem] = next[source.droppableId].splice(source.index, 1)
         next[destId].splice(destPos, 0, draggableId)
         return next
      })
   }
   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Wrapper>
            <Boards>
               {Object.keys(state).map((k) => (
                  <DroppableBoard key={k} todos={state[k]} droppableId={k} />
               ))}
            </Boards>
         </Wrapper>
         <Boards></Boards>
      </DragDropContext>
   )
}

export default App
