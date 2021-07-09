import { Container, Tag, Trash } from './styled'
import { removeCard } from '../../store/board/board.action'

import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'

const Cards = ({ data, index, listId }) => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeCard(listId, data.id))
  }
  return (
    <Draggable draggableId={data.id} index={index}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{data.content}</span>
          <Tag color={data.color}>
            <span>{data.tag}</span>
          </Tag>
          <Trash className='hover' onClick={handleRemove} />
        </Container>
      )}
    </Draggable>
  )
}

export default Cards
