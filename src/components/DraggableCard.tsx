import { Draggable } from 'react-beautiful-dnd'
import { Card } from '../components/styled'
import React from 'react'

interface IDraggableCardProps {
   draggableId: string
   index: number
}

function DraggableCard({ draggableId, index }: IDraggableCardProps) {
   return (
      <Draggable draggableId={draggableId} index={index} key={draggableId}>
         {(provided) => (
            /**
             * provided.draggableProps -> Drag를 적용할 영역에 전달할 props
             */
            <Card
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
            >
               {draggableId}
            </Card>
         )}
      </Draggable>
   )
}
/**
 * React.memo로 component를 wrapping하면 props의 값이 변하지 않는 한, re-rendering이 되지 않도록 만들 수 있다.
 * 단, 전후 props의 비교는 얕은 범위에서만 일어난다.
 * 성능 최적화 도구들 중 하나이다.
 */
export default React.memo(DraggableCard)
