/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-indent */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import { Container, CustomButton } from './styled'
import { FiPlus } from 'react-icons/fi'
import Lists from '../Lists'
import CreateList from '../Button/createList'

import { sort } from '../../store/board/board.action'

const Board = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.board)
  const [lits, setLists] = useState(data)
  const [isAdd, setOpenAdd] = useState(false)

  const handleOpen = () => {
    setOpenAdd(!isAdd)
  }

  useEffect(() => {
    setLists(data)
  }, [data, lits, setLists])

  const onDragEnd = (result) => {
    const { destination, source, draggbleId } = result
    if (!destination) return

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggbleId
      )
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {lits.map((item, key) => <Lists key={key} data={item} cards={item.cards} />)}
        {!isAdd
          ? <CustomButton onClick={handleOpen}>
            <FiPlus />
            <span>Adicionar outra lista</span>
            </CustomButton>
          : <div>
              <CreateList close={handleOpen} />
            </div>}
      </Container>
    </DragDropContext>
  )
}

export default Board
